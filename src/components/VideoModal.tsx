import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, AlertCircle } from 'lucide-react';
import type { PortfolioProject } from '@/data/portfolio';

interface VideoModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    setFailed(false);
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), video[controls], [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) {
          e.preventDefault();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-video-title"
      aria-describedby="portfolio-video-description"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          onClose();
        }
      }}
    >
      <div
        className="absolute inset-0 bg-kirakart-ink/80 backdrop-blur-sm animate-[fade-up_0.2s_ease-out]"
        onClick={onClose}
      />
      <div ref={dialogRef} className="relative z-10 w-full max-w-3xl animate-[fade-up_0.3s_ease-out]">
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close video"
          className="absolute right-3 top-3 z-20 flex items-center gap-2 rounded-full bg-kirakart-ink/70 px-3 py-2 font-grotesk text-sm text-kirakart-cream/90 transition-colors hover:text-white sm:-top-12 sm:right-0 sm:rounded-none sm:bg-transparent sm:px-0 sm:py-0"
        >
          Close <X className="h-5 w-5" />
        </button>

        <div
          className="max-h-[calc(100dvh-2rem)] overflow-y-auto overflow-x-hidden rounded-2xl bg-kirakart-cream shadow-2xl"
        >
          <div className="relative aspect-video w-full bg-kirakart-ink">
            {!failed ? (
              <video
                ref={videoRef}
                src={project.videoUrl}
                poster={project.poster ?? project.thumbnail}
                controls
                playsInline
                preload="metadata"
                aria-label={`${project.title} video preview`}
                onError={() => setFailed(true)}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center text-kirakart-cream/80">
                <AlertCircle className="h-8 w-8" />
                <p className="font-grotesk text-sm">
                  This preview clip could not be loaded. The final deliverable will be a hosted video file.
                </p>
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-kirakart-border px-3 py-1 font-grotesk text-[10px] font-medium uppercase tracking-wide text-kirakart-ink">
                {project.category}
              </span>
              <span className="font-grotesk text-[10px] font-medium uppercase tracking-wide text-kirakart-muted">
                {project.format}
              </span>
              {project.isConcept && (
                <span className="rounded-full bg-kirakart-yellow px-3 py-1 font-grotesk text-[10px] font-medium uppercase tracking-wide text-kirakart-ink">
                  AI-Generated Concept
                </span>
              )}
            </div>

            <h2
              id="portfolio-video-title"
              className="mt-4 font-grotesk text-2xl font-bold tracking-tight text-kirakart-ink"
            >
              {project.title}
            </h2>
            <p id="portfolio-video-description" className="mt-3 text-sm leading-relaxed text-kirakart-muted">
              {project.description}
            </p>

            <div className="mt-5 border-t border-kirakart-border pt-5">
              <p className="eyebrow mb-2">Creative Concept</p>
              <p className="text-sm leading-relaxed text-kirakart-ink/80">{project.objective}</p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
