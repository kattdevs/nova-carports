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
  { id: 'g1', src: '/image.png', alt: 'Nova Carports company logo', caption: 'Nova Carports Brand Identity', category: 'Brand' },
  { id: 'g2', src: 'https://images.pexels.com/photos/31197870/pexels-photo-31197870.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Modern steel framework carport structure under clear sky', caption: 'Steel Cantilever Carport Frame', category: 'Carports' },
  { id: 'g3', src: 'https://images.pexels.com/photos/9799764/pexels-photo-9799764.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Parking lot with solar panel canopy structures', caption: 'Solar Carport Installation', category: 'Solar Carports' },
  { id: 'g4', src: 'https://images.pexels.com/photos/5511454/pexels-photo-5511454.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Shade sail canopy structures under blue sky', caption: 'Architectural Shade Sails', category: 'Shade Netting' },
  { id: 'g5', src: 'https://images.pexels.com/photos/32574417/pexels-photo-32574417.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Security gate with intercom system at driveway entrance', caption: 'Automated Security Gate', category: 'Gates & Security' },
  { id: 'g6', src: 'https://images.pexels.com/photos/17366769/pexels-photo-17366769.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Close-up of interlocking grey brick pavement', caption: 'Interlocking Brick Paving', category: 'Paving & Tar' },
  { id: 'g7', src: 'https://images.pexels.com/photos/9799727/pexels-photo-9799727.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Aerial view of parking lot with solar panel canopies', caption: 'Commercial Solar Array', category: 'Solar Carports' },
  { id: 'g8', src: 'https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Contemporary luxury home with spacious paved driveway', caption: 'Residential Carport & Driveway', category: 'Carports' },
  { id: 'g9', src: 'https://images.pexels.com/photos/19893266/pexels-photo-19893266.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Modern parking structure with curved canopy under blue sky', caption: 'Commercial Parking Canopy', category: 'Shade Netting' },
  { id: 'g10', src: 'https://images.pexels.com/photos/34272103/pexels-photo-34272103.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Asphalt truck paving a street on a sunny day', caption: 'Hot-Mix Asphalt Surfacing', category: 'Paving & Tar' },
  { id: 'g11', src: 'https://images.pexels.com/photos/14539151/pexels-photo-14539151.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Construction worker welding steel beam on site', caption: 'On-Site Steel Fabrication', category: 'Maintenance' },
  { id: 'g12', src: 'https://images.pexels.com/photos/16580841/pexels-photo-16580841.png?auto=compress&cs=tinysrgb&w=1200', alt: 'Security gate at a residential driveway entrance', caption: 'Residential Estate Gate', category: 'Gates & Security' },
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
                  className={`px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                    filter === cat
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
