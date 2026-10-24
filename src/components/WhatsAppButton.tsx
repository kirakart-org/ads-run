import { site } from '@/data/business';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  label?: string;
  variant?: 'icon' | 'full';
  className?: string;
}

export default function WhatsAppButton({
  label = 'Chat on WhatsApp',
  variant = 'full',
  className = '',
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Hi Kirakart Ads, I'd like to discuss an AI-powered UGC-style video ad for my brand.",
  )}`;

  if (variant === 'icon') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl ${className}`}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 border border-kirakart-ink/20 bg-transparent px-6 py-3.5 font-grotesk text-sm font-medium tracking-wide text-kirakart-ink transition-all duration-300 hover:border-[#25D366] hover:text-[#25D366] ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}
