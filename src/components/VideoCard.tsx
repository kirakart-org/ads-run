import { useEffect, useRef, useState } from 'react';
import { Play, AlertCircle } from 'lucide-react';
import type { PortfolioProject } from '@/data/portfolio';

interface VideoCardProps {
  project: PortfolioProject;
  onOpen: (project: PortfolioProject) => void;
  priority?: boolean;
}

export default function VideoCard({ project, onOpen, priority = false }: VideoCardProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group block w-full text-left focus-visible:outline-none"
      aria-label={`Play ${project.title}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-kirakart-border/40">
        {!failed ? (
          <img
            ref={imgRef}
            src={project.thumbnail}
            alt={`${project.title} — ${project.category} concept video thumbnail`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            width={600}
            height={750}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-300 ease-out ${
              loaded ? 'opacity-100 scale-100 group-hover:scale-[1.02]' : 'opacity-0 scale-[1.01]'
            }`}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-kirakart-muted">
            <AlertCircle className="h-6 w-6" />
            <span className="mt-2 text-xs">Preview unavailable</span>
          </div>
        )}

        {!loaded && !failed && (
          <div className="absolute inset-0 bg-kirakart-border/30" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-kirakart-ink/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-kirakart-cream/90 px-3 py-1 font-grotesk text-[10px] font-medium uppercase tracking-wide text-kirakart-ink backdrop-blur-sm">
            {project.category}
          </span>
          {project.isConcept && (
            <span className="rounded-full bg-kirakart-yellow/90 px-3 py-1 font-grotesk text-[10px] font-medium uppercase tracking-wide text-kirakart-ink backdrop-blur-sm">
              AI-Generated Concept
            </span>
          )}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-kirakart-cream/95 text-kirakart-ink shadow-lg transition-[transform,background-color,color] duration-200 ease-out group-hover:scale-105 group-hover:bg-kirakart-red group-hover:text-white">
            <Play className="h-5 w-5 translate-x-0.5 fill-current" />
          </span>
        </div>

        <div className="absolute bottom-4 right-4">
          <span className="font-grotesk text-[11px] font-medium text-white/90">{project.format}</span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-grotesk text-lg font-semibold tracking-tight text-kirakart-ink transition-colors group-hover:text-kirakart-red">
          {project.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-kirakart-muted">
          {project.description}
        </p>
      </div>
    </button>
  );
}
