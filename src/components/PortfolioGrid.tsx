import { useMemo, useState } from 'react';
import VideoCard from './VideoCard';
import VideoModal from './VideoModal';
import {
  publishedProjects,
  portfolioFilters,
  type PortfolioProject,
  type PortfolioCategory,
} from '@/data/portfolio';

interface PortfolioGridProps {
  projects?: PortfolioProject[];
  showFilters?: boolean;
  limit?: number;
}

export default function PortfolioGrid({
  projects = publishedProjects,
  showFilters = false,
  limit,
}: PortfolioGridProps) {
  const [filter, setFilter] = useState<'All Work' | PortfolioCategory>('All Work');
  const [active, setActive] = useState<PortfolioProject | null>(null);

  const filtered = useMemo(() => {
    const list = filter === 'All Work' ? projects : projects.filter((p) => p.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, projects, limit]);

  return (
    <div>
      {showFilters && (
        <div
          role="group"
          aria-label="Filter portfolio by category"
          className="no-scrollbar -mx-5 mb-10 overflow-x-auto px-5 sm:mx-0 sm:px-0"
        >
          <div className="flex w-max gap-2 sm:flex-wrap">
            {portfolioFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 font-grotesk text-xs font-medium uppercase tracking-wide transition-all duration-300 ${
                  filter === f
                    ? 'border-kirakart-ink bg-kirakart-ink text-kirakart-cream'
                    : 'border-kirakart-border bg-transparent text-kirakart-muted hover:border-kirakart-ink hover:text-kirakart-ink'
                }`}
                aria-pressed={filter === f}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      )}

      <div
        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((project, i) => (
          <VideoCard key={project.id} project={project} onOpen={setActive} priority={i < 3} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-kirakart-muted">
          No published projects in this category yet.
        </p>
      )}

      <VideoModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}
