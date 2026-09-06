import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/data/content';

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      to="/services"
      className="group relative flex flex-col overflow-hidden bg-white border border-charcoal-200 transition-all duration-500 hover:border-charcoal-400 hover:shadow-xl hover:shadow-charcoal-900/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-100">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-charcoal-900/20 transition-opacity duration-500 group-hover:bg-charcoal-900/10" />
        <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center bg-charcoal-900/90 backdrop-blur-sm">
          <Icon size={24} className="text-gold-500" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-charcoal-900">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-500">
          {service.shortDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-charcoal-800 transition-colors group-hover:text-gold-600">
          Learn More
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
