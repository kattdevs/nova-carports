import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Wind, Wrench, Award, HardHat, Building2, Hammer } from 'lucide-react';
import Button from '@/components/Button';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { services } from '@/data/content';

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'SABS-Compliant Structural Steel',
  },
  {
    icon: Wind,
    title: 'Wind & Hail-Resistant Installations',
  },
  {
    icon: Wrench,
    title: 'Turnkey Service: Foundations to Roofing',
  },
  {
    icon: Award,
    title: 'Backed by Structural Warranties',
  },
];

const approachItems = [
  {
    icon: HardHat,
    title: 'Engineering & Structural Integrity',
    description:
      'Every carport and canopy is engineered to precise load calculations, ensuring structural integrity against South African wind and weather conditions.',
  },
  {
    icon: Building2,
    title: 'Quality Materials',
    description:
      'We use high-grade structural steel, chromadek sheeting, and premium components sourced from trusted suppliers for long-lasting performance.',
  },
  {
    icon: Hammer,
    title: 'Professional Installation',
    description:
      'Our experienced installation teams handle every aspect — from excavation and concrete to fabrication, erection, and final finishing.',
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/31197870/pexels-photo-31197870.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Modern steel framework carport structure under clear sky"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-charcoal-900/50" />

        <div className="relative flex h-full items-center">
          <div className="container-px">
            <Reveal>
              <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
                Engineering Robust Protection for Your Fleet and Property
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Premium carports, solar-ready canopies, and architectural shade structures
                custom-engineered and installed across South Africa.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button to="/contact" size="lg">
                  Request a Free Quote
                </Button>
                <Button to="/projects" size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-charcoal-900 hover:border-white">
                  Explore Our Portfolio
                  <ArrowRight size={16} />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-charcoal-200 bg-white">
        <div className="container-px py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold-500/30 bg-charcoal-50">
                      <Icon size={22} className="text-gold-600" />
                    </div>
                    <p className="text-sm font-medium leading-snug text-charcoal-700">
                      {item.title}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUILT FOR PROTECTION */}
      <section className="bg-charcoal-50">
        <div className="container-px section-py">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                Our Approach
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-charcoal-900 sm:text-4xl lg:text-5xl text-balance">
                Built for Protection. Designed for Longevity.
              </h2>
              <div className="mt-6 h-px w-16 bg-gold-500" />
              <p className="mt-6 text-base leading-relaxed text-charcoal-600">
                We approach every project as an engineering challenge first and a construction
                project second. Our structures are designed to withstand South Africa's diverse
                weather — from coastal winds to highveld hail storms — while maintaining clean
                architectural lines that enhance your property's value.
              </p>
              <p className="mt-4 text-base leading-relaxed text-charcoal-600">
                From the first site assessment to the final inspection, our team applies rigorous
                standards in structural engineering, material selection, and installation
                craftsmanship.
              </p>
            </Reveal>

            <div className="grid gap-6">
              {approachItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={i} delay={i * 100}>
                    <div className="flex gap-5 border-l-2 border-gold-500/40 bg-white p-6 transition-colors hover:border-gold-500">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-charcoal-900">
                        <Icon size={22} className="text-gold-500" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-charcoal-900">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-white">
        <div className="container-px section-py">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                  What We Do
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-charcoal-900 sm:text-4xl lg:text-5xl text-balance">
                  Complete Structural & Surface Solutions
                </h2>
              </div>
              <Button to="/services" variant="ghost" size="md">
                View All Services
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, i) => (
              <Reveal key={service.id} delay={i * 100}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(3).map((service, i) => (
              <Reveal key={service.id} delay={i * 100}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
            <Reveal delay={200}>
              <Link
                to="/services"
                className="group flex h-full min-h-[280px] flex-col justify-between bg-charcoal-900 p-8 transition-colors hover:bg-charcoal-800"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
                    Plus
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">
                    Paving & Tar Services
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    Interlocking pavers, hot-mix asphalt, kerbing, and surface rehabilitation
                    for driveways, parking lots, and access roads.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold-500">
                  Learn More
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection title="Protect Your Property With Infrastructure Built to Last." />
    </>
  );
}