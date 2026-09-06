import { useState } from 'react';
import { X, MapPin, Wrench, Layers, FileText } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ProjectCard from '@/components/ProjectCard';
import CTASection from '@/components/CTASection';
import { projects, projectCategories, type Project, type ProjectCategory } from '@/data/content';

type Filter = ProjectCategory | 'All';

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        title="Projects Built to Perform"
        subtitle="A portfolio of engineered carports, solar canopies, shade structures, paving, and security installations delivered across South Africa."
        image="https://images.pexels.com/photos/9799731/pexels-photo-9799731.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Aerial view of solar panels on a parking lot roof"
      />

      {/* GALLERY */}
      <section className="bg-charcoal-50">
        <div className="container-px section-py">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                Portfolio
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl">
                Explore Our Work
              </h2>
              <div className="mx-auto mt-6 h-px w-16 bg-gold-500" />
            </div>
          </Reveal>

          {/* FILTERS */}
          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                    filter === cat
                      ? 'bg-charcoal-900 text-white'
                      : 'border border-charcoal-300 bg-white text-charcoal-700 hover:border-charcoal-900 hover:bg-charcoal-900 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* GRID */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 80}>
                <ProjectCard project={project} onClick={() => setSelected(project)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Have a Project in Mind? Let's Make It Happen." />

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-900/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-charcoal-900/80 text-white transition-colors hover:bg-charcoal-900"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>

            <div className="relative aspect-[16/9] overflow-hidden bg-charcoal-100">
              <img
                src={selected.image}
                alt={selected.imageAlt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
            </div>

            <div className="p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                {selected.category}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-charcoal-900 sm:text-3xl">
                {selected.title}
              </h3>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="flex items-start gap-3 border-l-2 border-gold-500/40 pl-4">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-gold-600" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-charcoal-400">Location</p>
                    <p className="mt-1 text-sm text-charcoal-700">{selected.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-l-2 border-gold-500/40 pl-4">
                  <Wrench size={18} className="mt-0.5 shrink-0 text-gold-600" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-charcoal-400">Scope of Work</p>
                    <p className="mt-1 text-sm text-charcoal-700">{selected.scope}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-l-2 border-gold-500/40 pl-4">
                  <Layers size={18} className="mt-0.5 shrink-0 text-gold-600" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-charcoal-400">Materials</p>
                    <p className="mt-1 text-sm text-charcoal-700">{selected.materials}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-l-2 border-gold-500/40 pl-4">
                  <FileText size={18} className="mt-0.5 shrink-0 text-gold-600" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-charcoal-400">Project Type</p>
                    <p className="mt-1 text-sm text-charcoal-700">{selected.category}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-charcoal-100 pt-6">
                <p className="text-sm leading-relaxed text-charcoal-600">
                  {selected.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
