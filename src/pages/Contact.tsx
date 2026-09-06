import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { companyInfo } from '@/data/content';

export default function Contact() {
  return (
    <>
      <PageHero
        title="Let's Discuss Your Project"
        subtitle="Tell us what you need and our team will help you determine the right solution for your property."
        image="https://images.pexels.com/photos/8482551/pexels-photo-8482551.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Engineer in hardhat reviewing architectural floor plans at construction site"
      />

      <section className="bg-white">
        <div className="container-px section-py">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* FORM */}
            <div className="lg:col-span-3">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                  Enquiry Form
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold text-charcoal-900 sm:text-3xl">
                  Request a Free Quote
                </h2>
                <div className="mt-4 h-px w-16 bg-gold-500" />
                <p className="mt-4 text-sm leading-relaxed text-charcoal-500">
                  Complete the form below with your project details. The more information you
                  provide, the more accurately we can assess your requirements.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </Reveal>
            </div>

            {/* CONTACT INFO */}
            <div className="lg:col-span-2">
              <Reveal delay={150}>
                <div className="bg-charcoal-900 p-8 sm:p-10">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
                    Contact Information
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-bold text-white">
                    Get in Touch
                  </h2>
                  <div className="mt-6 h-px w-16 bg-gold-500" />

                  <ul className="mt-8 space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-charcoal-700">
                        <Phone size={20} className="text-gold-500" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-white/40">Phone</p>
                        <p className="mt-1 text-sm text-white">0670777845</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-charcoal-700">
                        <Mail size={20} className="text-gold-500" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-white/40">Email</p>
                        <p className="mt-1 text-sm text-white">{companyInfo.email}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-charcoal-700">
                        <MapPin size={20} className="text-gold-500" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-white/40">Location</p>
                        <p className="mt-1 text-sm text-white">7 Elsburg Road, Delville, Germiston</p>
                      </div>
                    </li>
                  </ul>

                  <a

                    href="https://wa.me/27670777845?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex items-center justify-center gap-2 bg-gold-500 px-6 py-4 text-sm font-medium uppercase tracking-wide text-charcoal-900 transition-colors hover:bg-gold-400"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Enquiry
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* MAP PLACEHOLDER */}
          <Reveal delay={100}>
            <div className="mt-12">
              <div className="relative flex h-80 items-center justify-center overflow-hidden bg-charcoal-100 border border-charcoal-200">
                <div className="absolute inset-0 opacity-30">
                  <svg className="h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d6d3d1" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="relative flex flex-col items-center text-center">
                  <MapPin size={40} className="text-gold-500" />
                  <p className="mt-3 font-display text-lg font-semibold text-charcoal-700">
                    Service Area: South Africa
                  </p>
                  <p className="mt-1 text-sm text-charcoal-400">
                    Map placeholder — serving residential and commercial clients nationwide
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
