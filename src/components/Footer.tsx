import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { companyInfo, services } from '@/data/content';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products & Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/image.png" alt="Nova Carports" className="h-12 w-auto object-contain" />
              <span className="font-display text-base font-semibold tracking-wide">
                Nova Carports
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Premium structural carports, solar-ready canopies, and architectural shade
              structures custom-engineered and installed across South Africa.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media placeholder"
                  className="flex h-10 w-10 items-center justify-center border border-charcoal-700 text-white/60 transition-colors hover:border-gold-500 hover:text-gold-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Paving & Tar Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold-500" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold-500" />
                <span>{companyInfo.email}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-500" />
                <span>{companyInfo.location}</span>
              </li>
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 bg-gold-500 px-5 py-3 text-sm font-medium uppercase tracking-wide text-charcoal-900 transition-colors hover:bg-gold-400"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal-800">
        <div className="container-px flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Nova Carports. All rights reserved.
          </p>
          <a
            href="#top"
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/40 transition-colors hover:text-gold-500"
          >
            Back to top
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
