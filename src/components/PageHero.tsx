import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({ title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal-900/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />

      <div className="relative flex h-full items-end">
        <div className="container-px pb-14">
          <nav className="mb-4 flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
            <Link to="/" className="transition-colors hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-gold-500">{title}</span>
          </nav>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {subtitle}
            </p>
          )}
          <div className="mt-6 h-px w-16 bg-gold-500" />
        </div>
      </div>
    </section>
  );
}
