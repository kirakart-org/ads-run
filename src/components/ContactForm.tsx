import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, AlertCircle } from 'lucide-react';
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
  brief: string;
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
  brief: '',
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

function validate(s: FormState): Errors {
  const e: Errors = {};
  if (!s.fullName.trim()) e.fullName = 'Please enter your name.';
  if (!s.email.trim()) e.email = 'Please enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)) e.email = 'Please enter a valid email address.';
  if (!s.brand.trim()) e.brand = 'Please enter your brand name.';
  if (!s.category) e.category = 'Please select a product category.';
  if (!s.budget) e.budget = 'Please select a budget range.';
  if (!s.brief.trim() || s.brief.trim().length < 20)
    e.brief = 'Please add a brief of at least 20 characters.';
  return e;
}

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Set<keyof FormState>>(new Set());
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

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

    const subject = encodeURIComponent(`New enquiry from ${form.brand} — ${packageLabel || 'General'}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.fullName}`,
        `Business email: ${form.email}`,
        `Brand: ${form.brand}`,
        `Product website / Instagram: ${form.url || '—'}`,
        `Product category: ${form.category}`,
        `Selected package: ${packageLabel || '—'}`,
        `Budget: ${form.budget}`,
        `Desired number of videos: ${form.videoCount || '—'}`,
        '',
        'Project details:',
        form.brief,
      ].join('\n'),
    );

    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="border border-kirakart-border bg-kirakart-cream p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto h-12 w-12 text-kirakart-red" />
        <h3 className="mt-4 font-grotesk text-xl font-semibold text-kirakart-ink">
          Your email draft is ready.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-kirakart-muted">
          Your email app should have opened with your enquiry pre-filled. Nothing is submitted or
          stored on this website. If it didn&rsquo;t, write to us directly at{' '}
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
            Name <span className="text-kirakart-red">*</span>
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
            Product website or Instagram URL
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

      <div className="grid gap-6 sm:grid-cols-2">
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
            Desired number of videos
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
      </div>

      <div>
        <label htmlFor="brief" className="mb-1.5 block font-grotesk text-sm font-medium text-kirakart-ink">
          Project details <span className="text-kirakart-red">*</span>
        </label>
        <textarea
          id="brief"
          rows={5}
          placeholder="Tell us about your product, the ad you have in mind, and any assets or requirements we should know about."
          value={form.brief}
          onChange={(e) => update('brief', e.target.value)}
          onBlur={() => handleBlur('brief')}
          className={fieldClass('brief')}
          aria-invalid={!!errors.brief}
        />
        {touched.has('brief') && errors.brief && <FieldError msg={errors.brief} />}
      </div>

      <div className="flex flex-col gap-4 border-t border-kirakart-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-xs leading-relaxed text-kirakart-muted">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          This form opens your email app with a draft; it does not submit or store your details. For a direct reply, write to{' '}
          <a href={`mailto:${site.contact.email}`} className="text-kirakart-red link-underline">{site.contact.email}</a>.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-kirakart-ink px-8 py-3.5 font-grotesk text-sm font-medium tracking-wide text-kirakart-cream transition-all duration-300 hover:bg-kirakart-red disabled:opacity-50"
        >
          Open Email Draft
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
