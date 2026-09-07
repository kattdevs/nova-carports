import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
};

const galleryImages: GalleryImage[] = [
  { id: 'g13', src: '/gallery/project-1.jpeg', alt: 'Modern grey slatted carport over brick-paved backyard with vehicle parked underneath', caption: 'Slatted Aluminium Carport', category: 'Carports' },
  { id: 'g14', src: '/gallery/project-2.jpeg', alt: 'Carport attached to house with blue trim over a bare earth yard', caption: 'Residential Lean-To Carport', category: 'Carports' },
  { id: 'g15', src: '/gallery/project-3.jpeg', alt: 'Carport attached to home with solar panels installed on the roof above, overlooking a paved patio and pool', caption: 'Solar-Ready Patio Carport', category: 'Solar Carports' },
  { id: 'g16', src: '/gallery/project-4.jpeg', alt: 'Wide angle of solar panel-topped carport shading a tiled patio with sliding doors', caption: 'Solar Carport — Patio View', category: 'Solar Carports' },
  { id: 'g17', src: '/gallery/project-5.jpeg', alt: 'Grey slatted carport frame mid-installation against a brick boundary wall with tools on site', caption: 'Carport Installation In Progress', category: 'Carports' },
  { id: 'g18', src: '/gallery/project-6.jpeg', alt: 'Worker standing on a drum while assembling a red-trimmed carport roof next to a yellow house wall', caption: 'On-Site Carport Assembly', category: 'Carports' },
  { id: 'g19', src: '/gallery/project-7.jpeg', alt: 'Brown-finished steel carport shading a white pickup truck beneath large trees', caption: 'Timber-Finish Carport', category: 'Carports' },
  { id: 'g20', src: '/gallery/project-8.jpeg', alt: 'Carport frame under construction with cream trim next to a pink-plastered wall and building materials', caption: 'Carport Structural Build', category: 'Carports' },
  { id: 'g21', src: '/gallery/project-9.jpeg', alt: 'Red steel carport frame installed over a gravel driveway with a palm tree in the background', caption: 'Structural Carport — Palm Garden', category: 'Carports' },
  { id: 'g22', src: '/gallery/project-10.jpeg', alt: 'Completed dark steel carport over a brick-paved driveway with palisade fencing and a tiled-roof home', caption: 'Finished Driveway Carport', category: 'Carports' },
  { id: 'g23', src: '/gallery/project-11.jpeg', alt: 'Worker on a ladder fitting roof sheeting to a red steel carport frame spanning a narrow walkway', caption: 'Carport Roofing In Progress', category: 'Carports' },
  { id: 'g24', src: '/gallery/project-12.jpeg', alt: 'Carport with decorative white pillars and red trim under construction at a rural property', caption: 'Decorative Column Carport', category: 'Carports' },
  { id: 'g25', src: '/gallery/project-13.jpeg', alt: 'Grey carport structure spanning a herringbone brick driveway alongside a residential home', caption: 'Carport Over Paved Walkway', category: 'Carports' },
  { id: 'g26', src: '/gallery/project-14.jpeg', alt: 'Completed red steel carport over a garden lawn with a worker finishing up on site', caption: 'Backyard Carport Completion', category: 'Carports' },
  { id: 'g27', src: '/gallery/project-15.jpeg', alt: 'Grey slatted carport frame during construction against a brick wall with a compressor and tools nearby', caption: 'Slatted Carport Framework', category: 'Carports' },
  { id: 'g28', src: '/gallery/project-16.jpeg', alt: 'Red steel carport frame being installed over a gravel yard next to a yellow house wall with a palm tree', caption: 'Structural Carport Build', category: 'Carports' },
  { id: 'g29', src: '/gallery/project-17.jpeg', alt: 'Long dark carport structure covering a paved walkway between a boundary wall and a house', caption: 'Extended Walkway Carport', category: 'Carports' },
  { id: 'g30', src: '/gallery/project-18.jpeg', alt: 'Carport with blue trim attached to a house overlooking a bare dirt yard and chain-link fence', caption: 'Attached Home Carport', category: 'Carports' },
];

const categories = ['All', 'Carports', 'Solar Carports', 'Shade Netting', 'Gates & Security', 'Paving & Tar', 'Maintenance'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'All' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length));
  const nextImage = () => setLightbox((prev) => (prev === null ? null : (prev + 1) % filtered.length));

  return (
    <>
      <PageHero
        title="Project Gallery"
        subtitle="A visual showcase of our completed carports, solar canopies, shade structures, paving, and security installations across South Africa."
        image="https://images.pexels.com/photos/29274538/pexels-photo-29274538.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Construction workers assembling steel frame structure with cranes"
      />

      <section className="bg-white">
        <div className="container-px section-py">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                Visual Portfolio
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl">
                Client Project Gallery
              </h2>
              <div className="mx-auto mt-6 h-px w-16 bg-gold-500" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${filter === cat
                    ? 'bg-charcoal-900 text-white'
                    : 'border border-charcoal-300 bg-white text-charcoal-700 hover:border-charcoal-900 hover:bg-charcoal-900 hover:text-white'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((image, i) => (
              <Reveal key={image.id} delay={(i % 4) * 60}>
                <button
                  onClick={() => openLightbox(i)}
                  className="group relative block w-full overflow-hidden bg-charcoal-900"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-charcoal-900/0 transition-colors duration-500 group-hover:bg-charcoal-900/40" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-charcoal-900 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0">
                      <span className="text-xs font-medium uppercase tracking-widest text-gold-500">
                        {image.category}
                      </span>
                      <p className="mt-1 text-sm font-medium text-white">{image.caption}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Inspired by What You See? Let's Build Yours." />

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center text-white transition-colors hover:text-gold-500"
            aria-label="Close gallery"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center text-white transition-colors hover:text-gold-500 sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center text-white transition-colors hover:text-gold-500 sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>

          <div
            className="relative max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-h-[80vh] w-full object-contain"
            />
            <div className="mt-4 text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-gold-500">
                {filtered[lightbox].category}
              </span>
              <p className="mt-1 text-sm text-white/80">{filtered[lightbox].caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
