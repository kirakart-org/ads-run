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

  useEffect(() => {
    if (!project) return;
    setFailed(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} video`}
    >
      <div
        className="absolute inset-0 bg-kirakart-ink/80 backdrop-blur-sm animate-[fade-up_0.2s_ease-out]"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-3xl animate-[fade-up_0.3s_ease-out]">
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 flex items-center gap-2 font-grotesk text-sm text-kirakart-cream/80 transition-colors hover:text-white"
        >
          Close <X className="h-5 w-5" />
        </button>

        <div className="overflow-hidden rounded-2xl bg-kirakart-cream shadow-2xl">
          <div className="relative aspect-video w-full bg-kirakart-ink">
            {!failed ? (
              <video
                ref={videoRef}
                src={project.videoUrl}
                poster={project.poster ?? project.thumbnail}
                controls
                playsInline
                preload="metadata"
                onError={() => setFailed(true)}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <track kind="captions" />
              </video>
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
                  Concept Work
                </span>
              )}
            </div>

            <h3 className="mt-4 font-grotesk text-2xl font-bold tracking-tight text-kirakart-ink">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-kirakart-muted">{project.description}</p>

            <div className="mt-5 border-t border-kirakart-border pt-5">
              <p className="eyebrow mb-2">Creative Objective</p>
              <p className="text-sm leading-relaxed text-kirakart-ink/80">{project.objective}</p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
