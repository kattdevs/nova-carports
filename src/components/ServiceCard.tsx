import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/data/content';

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="group flex h-full flex-col justify-between overflow-hidden border border-charcoal-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-xl hover:shadow-charcoal-900/5">
      <div>
        <div className="relative aspect-[16/9] overflow-hidden bg-charcoal-100">
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-charcoal-900/90 text-gold-500 backdrop-blur-sm transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-charcoal-900">
            <Icon size={20} />
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-charcoal-900 transition-colors group-hover:text-gold-600">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal-900 transition-colors hover:text-gold-600"
        >
          Explore Service
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
