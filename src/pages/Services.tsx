import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { services, pavingServices } from '@/data/content';

export default function Services() {
  return (
    <>
      <PageHero
        title="Engineered Solutions for Every Property"
        subtitle="We provide complete structural, shade, security, and surface solutions for residential and commercial properties across South Africa."
        image="https://images.pexels.com/photos/29274538/pexels-photo-29274538.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Construction workers assembling steel frame structure with cranes"
      />

      {/* MAIN SERVICES */}
      <section className="bg-white">
        <div className="container-px section-py">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
              Core Services
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-charcoal-900 sm:text-3xl">
              Structural & Shade Solutions
            </h2>
            <div className="mt-6 h-px w-16 bg-gold-500" />
          </Reveal>

          <div className="mt-14 flex flex-col gap-16 lg:gap-24">
            {services.map((service, i) => {
              const reversed = i % 2 === 1;
              return (
                <Reveal key={service.id}>
                  <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reversed ? 'lg:[direction:rtl]' : ''}`}>
                    <div className={`relative overflow-hidden ${reversed ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="aspect-[4/3] overflow-hidden bg-charcoal-100">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className={reversed ? 'lg:[direction:ltr]' : ''}>
                      <span className="font-display text-4xl font-bold text-charcoal-200">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-bold text-charcoal-900 sm:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-charcoal-600">
                        {service.description}
                      </p>
                      <Link
                        to="/contact"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-charcoal-800 transition-colors hover:text-gold-600"
                      >
                        Request a Quote
                        <ArrowRight size={14} className="transition-transform duration-300 hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PAVING & TAR — VISUALLY DISTINCT */}
      <section className="relative overflow-hidden bg-charcoal-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/17366763/pexels-photo-17366763.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Interlocking brick pavement texture"
            className="h-full w-full object-cover opacity-10"
          />
        </div>

        <div className="relative container-px section-py">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
                Specialist Division
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
                Paving & Tar Services
              </h2>
              <div className="mt-6 h-px w-16 bg-gold-500" />
              <p className="mt-6 text-base leading-relaxed text-white/70">
                From interlocking pavers to hot-mix asphalt, our paving division delivers
                durable, architecturally finished surfaces engineered for residential and
                commercial applications.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {pavingServices.map((service, i) => {
              return (
                <Reveal key={service.id} delay={i * 80}>
                  <div className="group flex flex-col overflow-hidden bg-charcoal-800 border border-charcoal-700 transition-colors hover:border-gold-500/40">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                        {service.description}
                      </p>
                      <Link
                        to="/contact"
                        className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold-500 transition-colors hover:text-gold-400"
                      >
                        Request a Quote
                        <ArrowRight size={14} className="transition-transform duration-300 hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Start Your Project?" />
    </>
  );
}