import { useState, type FormEvent } from 'react';
import { MessageCircle, Send, Check } from 'lucide-react';

type FormState = {
  fullName: string;
  contactNumber: string;
  email: string;
  service: string;
  location: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const serviceOptions = [
  'Carport',
  'Solar Carport',
  'Shade Netting',
  'Paving & Tar',
  'Gates & Security',
  'Maintenance',
  'Other',
];

const initial: FormState = {
  fullName: '',
  contactNumber: '',
  email: '',
  service: '',
  location: '',
  details: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name';
    if (!form.contactNumber.trim()) next.contactNumber = 'Please enter your contact number';
    else if (!/^[\d\s+()-]{7,}$/.test(form.contactNumber)) next.contactNumber = 'Please enter a valid phone number';
    if (!form.email.trim()) next.email = 'Please enter your email address';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email address';
    if (!form.service) next.service = 'Please select a service';
    if (!form.location.trim()) next.location = 'Please enter your location';
    if (!form.details.trim()) next.details = 'Please describe your project';

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center bg-white p-12 text-center border border-charcoal-200">
        <div className="flex h-16 w-16 items-center justify-center bg-gold-500">
          <Check size={32} className="text-charcoal-900" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-charcoal-900">
          Thank You for Your Enquiry
        </h3>
        <p className="mt-3 max-w-md text-sm text-charcoal-500">
          Your request has been received. Our team will contact you within [response time] to
          discuss your project requirements.
        </p>
        <button
          onClick={() => {
            setForm(initial);
            setSubmitted(false);
          }}
          className="mt-8 text-sm font-medium uppercase tracking-wider text-charcoal-800 transition-colors hover:text-gold-600"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white p-8 sm:p-10 border border-charcoal-200">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-xs font-medium uppercase tracking-wider text-charcoal-700">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            value={form.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className={`mt-2 w-full border bg-charcoal-50 px-4 py-3 text-sm text-charcoal-900 outline-none transition-colors focus:bg-white focus:border-gold-500 ${
              errors.fullName ? 'border-red-400' : 'border-charcoal-200'
            }`}
          />
          {errors.fullName && <p className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="contactNumber" className="block text-xs font-medium uppercase tracking-wider text-charcoal-700">
            Contact Number *
          </label>
          <input
            id="contactNumber"
            type="tel"
            value={form.contactNumber}
            onChange={(e) => handleChange('contactNumber', e.target.value)}
            className={`mt-2 w-full border bg-charcoal-50 px-4 py-3 text-sm text-charcoal-900 outline-none transition-colors focus:bg-white focus:border-gold-500 ${
              errors.contactNumber ? 'border-red-400' : 'border-charcoal-200'
            }`}
          />
          {errors.contactNumber && <p className="mt-1.5 text-xs text-red-500">{errors.contactNumber}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-charcoal-700">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`mt-2 w-full border bg-charcoal-50 px-4 py-3 text-sm text-charcoal-900 outline-none transition-colors focus:bg-white focus:border-gold-500 ${
              errors.email ? 'border-red-400' : 'border-charcoal-200'
            }`}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="service" className="block text-xs font-medium uppercase tracking-wider text-charcoal-700">
            Service Required *
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => handleChange('service', e.target.value)}
            className={`mt-2 w-full border bg-charcoal-50 px-4 py-3 text-sm text-charcoal-900 outline-none transition-colors focus:bg-white focus:border-gold-500 ${
              errors.service ? 'border-red-400' : 'border-charcoal-200'
            }`}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.service && <p className="mt-1.5 text-xs text-red-500">{errors.service}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="location" className="block text-xs font-medium uppercase tracking-wider text-charcoal-700">
            Location (Province / City) *
          </label>
          <input
            id="location"
            type="text"
            value={form.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className={`mt-2 w-full border bg-charcoal-50 px-4 py-3 text-sm text-charcoal-900 outline-none transition-colors focus:bg-white focus:border-gold-500 ${
              errors.location ? 'border-red-400' : 'border-charcoal-200'
            }`}
          />
          {errors.location && <p className="mt-1.5 text-xs text-red-500">{errors.location}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="details" className="block text-xs font-medium uppercase tracking-wider text-charcoal-700">
            Project Details *
          </label>
          <textarea
            id="details"
            rows={5}
            value={form.details}
            onChange={(e) => handleChange('details', e.target.value)}
            className={`mt-2 w-full resize-none border bg-charcoal-50 px-4 py-3 text-sm text-charcoal-900 outline-none transition-colors focus:bg-white focus:border-gold-500 ${
              errors.details ? 'border-red-400' : 'border-charcoal-200'
            }`}
          />
          {errors.details && <p className="mt-1.5 text-xs text-red-500">{errors.details}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 flex w-full items-center justify-center gap-2 bg-gold-500 px-9 py-4 text-sm font-medium uppercase tracking-wide text-charcoal-900 transition-all duration-300 hover:bg-gold-400"
      >
        <Send size={16} />
        Request a Free Quote
      </button>

      <a
        href="#"
        className="mt-4 flex w-full items-center justify-center gap-2 border border-charcoal-300 px-9 py-4 text-sm font-medium uppercase tracking-wide text-charcoal-800 transition-all duration-300 hover:border-green-600 hover:bg-green-50 hover:text-green-700"
      >
        <MessageCircle size={16} />
        Enquire on WhatsApp
      </a>
    </form>
  );
}
