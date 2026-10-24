import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { packages } from '@/data/pricing';
import { site } from '@/data/business';

interface FormState {
  fullName: string;
  email: string;
  brand: string;
  url: string;
  category: string;
  packageId: string;
  budget: string;
  videoCount: string;
  objective: string;
  brief: string;
  contactMethod: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: '',
  email: '',
  brand: '',
  url: '',
  category: '',
  packageId: '',
  budget: '',
  videoCount: '',
  objective: '',
  brief: '',
  contactMethod: 'Email',
};

const categories = [
  'Skincare & Beauty',
  'Food & Beverage',
  'Fashion & Accessories',
  'Lifestyle & Consumer',
  'Other',
];

const budgets = [
  'Under ₹5,000',
  '₹5,000–₹15,000',
  '₹15,000–₹30,000',
  '₹30,000+',
  'Not sure yet',
];

const objectives = [
  'Brand awareness',
  'Product launch',
  'Paid social testing',
  'Content refresh',
  'Other',
];

const contactMethods = ['Email', 'WhatsApp', 'Phone'];

function validate(s: FormState): Errors {
  const e: Errors = {};
  if (!s.fullName.trim()) e.fullName = 'Please enter your full name.';
  if (!s.email.trim()) e.email = 'Please enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)) e.email = 'Please enter a valid email address.';
  if (!s.brand.trim()) e.brand = 'Please enter your brand name.';
  if (!s.category) e.category = 'Please select a product category.';
  if (!s.budget) e.budget = 'Please select a budget range.';
  if (!s.objective) e.objective = 'Please select a campaign objective.';
  if (!s.brief.trim() || s.brief.trim().length < 20)
    e.brief = 'Please add a brief of at least 20 characters.';
  if (!s.contactMethod) e.contactMethod = 'Please choose a preferred contact method.';
  return e;
}

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Set<keyof FormState>>(new Set());
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const pkg = searchParams.get('package');
    if (pkg && packages.some((p) => p.id === pkg)) {
      setForm((f) => ({ ...f, packageId: pkg }));
    }
  }, [searchParams]);

  const packageLabel = useMemo(
    () => packages.find((p) => p.id === form.packageId)?.name ?? '',
    [form.packageId],
  );

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleBlur = (key: keyof FormState) => {
    setTouched((t) => new Set(t).add(key));
    setErrors(validate({ ...form, [key]: form[key] }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const allErrors = validate(form);
    setErrors(allErrors);
    setTouched(new Set(Object.keys(form) as (keyof FormState)[]));
    if (Object.keys(allErrors).length > 0) return;

    setStatus('submitting');
    const subject = encodeURIComponent(`New enquiry from ${form.brand} — ${packageLabel || 'General'}`);
    const body = encodeURIComponent(
      [
        `Full name: ${form.fullName}`,
        `Business email: ${form.email}`,
        `Brand: ${form.brand}`,
        `Website / Instagram: ${form.url || '—'}`,
        `Product category: ${form.category}`,
        `Selected package: ${packageLabel || '—'}`,
        `Budget: ${form.budget}`,
        `Number of videos: ${form.videoCount || '—'}`,
        `Campaign objective: ${form.objective}`,
        `Preferred contact: ${form.contactMethod}`,
        '',
        'Brief:',
        form.brief,
      ].join('\n'),
    );

    window.setTimeout(() => {
      window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
      setStatus('success');
    }, 900);
  };

  if (status === 'success') {
    return (
      <div className="border border-kirakart-border bg-kirakart-cream p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto h-12 w-12 text-kirakart-red" />
        <h3 className="mt-4 font-grotesk text-xl font-semibold text-kirakart-ink">
          Your brief is on its way.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-kirakart-muted">
          Your email app should have opened with your details pre-filled. If it didn&rsquo;t, write
          to us directly at{' '}
          <a href={`mailto:${site.contact.email}`} className="text-kirakart-red link-underline">
            {site.contact.email}
          </a>
          .
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setForm(initialState);
          }}
          className="mt-6 font-grotesk text-sm font-medium text-kirakart-ink link-underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const fieldClass = (key: keyof FormState) =>
    `w-full border bg-kirakart-cream px-4 py-3 text-sm text-kirakart-ink transition-colors placeholder:text-kirakart-muted/60 focus:outline-none focus:border-kirakart-ink ${
      touched.has(key) && errors[key] ? 'border-kirakart-red' : 'border-kirakart-border'
    }`;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block font-grotesk text-sm font-medium text-kirakart-ink">
            Full name <span className="text-kirakart-red">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            onBlur={() => handleBlur('fullName')}
            className={fieldClass('fullName')}
            aria-invalid={!!errors.fullName}
          />
          {touched.has('fullName') && errors.fullName && (
            <FieldError msg={errors.fullName} />
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-grotesk text-sm font-medium text-kirakart-ink">
            Business email <span className="text-kirakart-red">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            className={fieldClass('email')}
            aria-invalid={!!errors.email}
          />
          {touched.has('email') && errors.email && <FieldError msg={errors.email} />}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="brand" className="mb-1.5 block font-grotesk text-sm font-medium text-kirakart-ink">
            Brand name <span className="text-kirakart-red">*</span>
          </label>
          <input
            id="brand"
            type="text"
            value={form.brand}
            onChange={(e) => update('brand', e.target.value)}
            onBlur={() => handleBlur('brand')}
            className={fieldClass('brand')}
            aria-invalid={!!errors.brand}
          />
          {touched.has('brand') && errors.brand && <FieldError msg={errors.brand} />}
        </div>
        <div>
          <label htmlFor="url" className="mb-1.5 block font-grotesk text-sm font-medium text-kirakart-ink">
            Website or Instagram URL
          </label>
          <input
            id="url"
            type="url"
            placeholder="https://"
            value={form.url}
            onChange={(e) => update('url', e.target.value)}
            className={fieldClass('url')}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="category" className="mb-1.5 block font-grotesk text-sm font-medium text-kirakart-ink">
            Product category <span className="text-kirakart-red">*</span>
          </label>
          <select
            id="category"
            value={form.category}
            onChange={(e) => update('category', e.target.value)}
            onBlur={() => handleBlur('category')}
            className={fieldClass('category')}
            aria-invalid={!!errors.category}
          >
            <option value="">Select a category</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {touched.has('category') && errors.category && <FieldError msg={errors.category} />}
        </div>
        <div>
          <label htmlFor="packageId" className="mb-1.5 block font-grotesk text-sm font-medium text-kirakart-ink">
            Selected package
          </label>
          <select
            id="packageId"
            value={form.packageId}
            onChange={(e) => update('packageId', e.target.value)}
            className={fieldClass('packageId')}
          >
            <option value="">Not sure yet</option>
            {packages.map((p) => (
              <option key={p.id} value={p.id}>{p.name} — {p.price}{p.cadence ?? ''}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="budget" className="mb-1.5 block font-grotesk text-sm font-medium text-kirakart-ink">
            Approximate budget <span className="text-kirakart-red">*</span>
          </label>
          <select
            id="budget"
            value={form.budget}
            onChange={(e) => update('budget', e.target.value)}
            onBlur={() => handleBlur('budget')}
            className={fieldClass('budget')}
            aria-invalid={!!errors.budget}
          >
            <option value="">Select a range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          {touched.has('budget') && errors.budget && <FieldError msg={errors.budget} />}
        </div>
        <div>
          <label htmlFor="videoCount" className="mb-1.5 block font-grotesk text-sm font-medium text-kirakart-ink">
            Number of videos
          </label>
          <input
            id="videoCount"
            type="number"
            min="1"
            placeholder="e.g. 5"
            value={form.videoCount}
            onChange={(e) => update('videoCount', e.target.value)}
            className={fieldClass('videoCount')}
          />
        </div>
        <div>
          <label htmlFor="objective" className="mb-1.5 block font-grotesk text-sm font-medium text-kirakart-ink">
            Campaign objective <span className="text-kirakart-red">*</span>
          </label>
          <select
            id="objective"
            value={form.objective}
            onChange={(e) => update('objective', e.target.value)}
            onBlur={() => handleBlur('objective')}
            className={fieldClass('objective')}
            aria-invalid={!!errors.objective}
          >
            <option value="">Select an objective</option>
            {objectives.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          {touched.has('objective') && errors.objective && <FieldError msg={errors.objective} />}
        </div>
      </div>

      <div>
        <label htmlFor="brief" className="mb-1.5 block font-grotesk text-sm font-medium text-kirakart-ink">
          Project brief <span className="text-kirakart-red">*</span>
        </label>
        <textarea
          id="brief"
          rows={5}
          placeholder="Tell us about your product, what you're selling, and what kind of creative you're looking for."
          value={form.brief}
          onChange={(e) => update('brief', e.target.value)}
          onBlur={() => handleBlur('brief')}
          className={fieldClass('brief')}
          aria-invalid={!!errors.brief}
        />
        {touched.has('brief') && errors.brief && <FieldError msg={errors.brief} />}
      </div>

      <div>
        <span className="mb-2 block font-grotesk text-sm font-medium text-kirakart-ink">
          Preferred contact method <span className="text-kirakart-red">*</span>
        </span>
        <div className="flex flex-wrap gap-3">
          {contactMethods.map((m) => (
            <label
              key={m}
              className={`flex cursor-pointer items-center gap-2 border px-4 py-2.5 text-sm transition-colors ${
                form.contactMethod === m
                  ? 'border-kirakart-ink bg-kirakart-ink text-kirakart-cream'
                  : 'border-kirakart-border text-kirakart-ink/80 hover:border-kirakart-ink/40'
              }`}
            >
              <input
                type="radio"
                name="contactMethod"
                value={m}
                checked={form.contactMethod === m}
                onChange={(e) => update('contactMethod', e.target.value)}
                className="sr-only"
              />
              {m}
            </label>
          ))}
        </div>
        {touched.has('contactMethod') && errors.contactMethod && <FieldError msg={errors.contactMethod} />}
      </div>

      <div className="flex flex-col gap-4 border-t border-kirakart-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-xs leading-relaxed text-kirakart-muted">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          This form opens your email app pre-filled. For a direct reply, write to{' '}
          <a href={`mailto:${site.contact.email}`} className="text-kirakart-red link-underline">{site.contact.email}</a>.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 bg-kirakart-ink px-8 py-3.5 font-grotesk text-sm font-medium tracking-wide text-kirakart-cream transition-all duration-300 hover:bg-kirakart-red disabled:opacity-50"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            'Send Enquiry'
          )}
        </button>
      </div>
    </form>
  );
}

function FieldError({ msg }: { msg: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-kirakart-red">
      <AlertCircle className="h-3.5 w-3.5" />
      {msg}
    </p>
  );
}
