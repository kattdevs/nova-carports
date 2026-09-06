import type { Project } from '@/data/content';

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative block w-full overflow-hidden bg-charcoal-900 text-left"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent transition-opacity duration-500 group-hover:from-charcoal-900 group-hover:via-charcoal-900/40" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="text-xs font-medium uppercase tracking-widest text-gold-500">
          {project.category}
        </span>
        <h3 className="mt-2 font-display text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-white/60">{project.location}</p>
      </div>

      <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center bg-gold-500 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-charcoal-900">
          <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
      </div>
    </button>
  );
}
