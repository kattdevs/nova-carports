import { HardHat, Building2, Hammer, ShieldCheck, Award, ClipboardCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { processSteps } from '@/data/content';

const pillars = [
  {
    icon: HardHat,
    title: 'Engineering & Structural Integrity',
    description:
      'Every structure is engineered with precise load calculations, ensuring stability and safety under South African weather conditions.',
  },
  {
    icon: Building2,
    title: 'Quality Materials',
    description:
      'High-grade structural steel, chromadek sheeting, and premium components sourced from trusted, certified suppliers.',
  },
  {
    icon: Hammer,
    title: 'Professional Installation',
    description:
      'Experienced crews manage every phase on site — excavation, concrete, fabrication, erection, and finishing.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Compliance',
    description:
      'Fully compliant with local municipal building regulations, OHSA safety standards, and industry best practices.',
  },
  {
    icon: Award,
    title: 'Long-Term Customer Value',
    description:
      'Structures backed by warranties and ongoing maintenance support to protect your investment for years to come.',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        title="Built on Structural Integrity. Driven by Craftsmanship."
        image="https://images.pexels.com/photos/7937367/pexels-photo-7937367.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Architects in hard hats examining blueprints on a construction site"
      />

      {/* OUR STORY + MISSION */}
      <section className="bg-white">
        <div className="container-px section-py">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                Our Story
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-charcoal-900 sm:text-4xl text-balance">
                Engineering Durable Shelter for South Africa
              </h2>
              <div className="mt-6 h-px w-16 bg-gold-500" />
              <p className="mt-6 text-base leading-relaxed text-charcoal-600">
                Established with a commitment to structural integrity and craftsmanship, we
                deliver durable shelter solutions built to withstand South Africa's diverse
                weather conditions — from coastal winds to highveld hail storms.
              </p>
              <p className="mt-4 text-base leading-relaxed text-charcoal-600">
                What began as a focus on premium carport installations has grown into a
                comprehensive engineering practice covering solar integration, architectural
                shade, paving, security automation, and structural maintenance.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex h-full flex-col justify-center bg-charcoal-900 p-10">
                <ClipboardCheck size={32} className="text-gold-500" />
                <span className="mt-6 text-xs font-semibold uppercase tracking-widest text-gold-500">
                  Our Mission
                </span>
                <p className="mt-4 font-display text-xl font-medium leading-relaxed text-white sm:text-2xl text-balance">
                  To provide property owners and businesses with engineered, aesthetically
                  refined shade and security infrastructure that adds long-term value.
                </p>
                <div className="mt-8 border-t border-charcoal-700 pt-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
                    Compliance & Standards
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    Fully compliant with local municipal building regulations, OHSA safety
                    standards, and industry best practices.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-charcoal-50">
        <div className="container-px section-py">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                What Sets Us Apart
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-charcoal-900 sm:text-4xl lg:text-5xl text-balance">
                The Pillars of Our Practice
              </h2>
              <div className="mx-auto mt-6 h-px w-16 bg-gold-500" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="group h-full border border-charcoal-200 bg-white p-8 transition-all duration-500 hover:border-gold-500/40 hover:shadow-lg hover:shadow-charcoal-900/5">
                    <div className="flex h-14 w-14 items-center justify-center bg-charcoal-900 transition-colors group-hover:bg-gold-500">
                      <Icon size={26} className="text-gold-500 transition-colors group-hover:text-charcoal-900" />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold text-charcoal-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-500">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="bg-white">
        <div className="container-px section-py">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                Our Process
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-charcoal-900 sm:text-4xl lg:text-5xl text-balance">
                From Consultation to Final Inspection
              </h2>
              <div className="mx-auto mt-6 h-px w-16 bg-gold-500" />
            </div>
          </Reveal>

          <div className="mt-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-4">
              {processSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 100}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative flex h-16 w-16 items-center justify-center border-2 border-charcoal-200 bg-white">
                      <span className="font-display text-lg font-bold text-charcoal-900">
                        {step.step}
                      </span>
                      {i < processSteps.length - 1 && (
                        <div className="absolute left-full top-1/2 hidden h-px w-full -translate-y-1/2 bg-charcoal-200 lg:block" />
                      )}
                    </div>
                    <h3 className="mt-5 font-display text-sm font-semibold uppercase tracking-wide text-charcoal-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-charcoal-500">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Something That Lasts."
        buttonText="Request a Free Quote"
      />
    </>
  );
}
