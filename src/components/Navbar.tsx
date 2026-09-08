import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products & Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg shadow-charcoal-900/20'
        : 'bg-transparent'
        }`}
    >
      <nav className="container-px flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Nova Carports"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${active ? 'text-gold-500' : 'text-white/80 hover:text-white'
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gold-500 transition-all duration-300 ${active ? 'w-full' : 'w-0'
                      }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="https://wa.me/27670777845?text=Hi%2C%20I%27d%20like%20to%20request%20a%20free%20quote" size="sm">
            Request a Free Quote
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-charcoal-900/98 backdrop-blur-md transition-all duration-400 lg:hidden ${open ? 'max-h-screen border-t border-charcoal-700' : 'max-h-0'
          }`}
      >
        <ul className="container-px flex flex-col gap-1 py-4">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-3 text-sm font-medium uppercase tracking-wider transition-colors ${active ? 'text-gold-500' : 'text-white/80 hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-3">
            <Button href="https://wa.me/27670777845?text=Hi%2C%20I%27d%20like%20to%20request%20a%20free%20quote" size="sm">
              Request a Free Quote
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
