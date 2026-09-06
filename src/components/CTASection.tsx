import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

type CTASectionProps = {
  title: string;
  buttonText?: string;
  to?: string;
};

export default function CTASection({
  title,
  buttonText = 'Request a Free Quote',
  to = '/contact',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900" />
        <div className="absolute left-1/2 top-0 h-px w-64 -translate-x-1/2 bg-gold-500/60" />
      </div>

      <Reveal className="relative container-px section-py text-center">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
          {title}
        </h2>
        <div className="mx-auto mt-6 h-px w-16 bg-gold-500" />
        <Link
          to={to}
          className="mt-10 inline-flex items-center gap-2 bg-gold-500 px-9 py-4 text-sm font-medium uppercase tracking-wide text-charcoal-900 transition-all duration-300 hover:bg-gold-400 hover:gap-3"
        >
          {buttonText}
          <ArrowRight size={16} />
        </Link>
      </Reveal>
    </section>
  );
}
