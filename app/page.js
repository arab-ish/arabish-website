'use client';

import { useState } from 'react';
import { MapPin, CalendarDays, Utensils, Flame, Mail, Phone, Instagram, ArrowRight, Star, Users, Clock, Truck, Menu, X } from 'lucide-react';

const logoUrl = '/arabish-logo.png';

const menuItems = [
  {
    title: 'Gyro Chorizo Wrap',
    tag: 'Signature',
    description: 'Spiced gyro-style meat meets smoky chorizo energy, wrapped with crisp vegetables, fries, and house sauce.',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Loaded Mediterranean Fries',
    tag: 'Crowd Favorite',
    description: 'Crispy fries layered with bold protein, garlic sauce, herbs, pickles, and warm Mediterranean heat.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Falafel-ish Bowl',
    tag: 'Vegetarian',
    description: 'Crunchy falafel, grains, greens, pickled vegetables, sauces, and texture in every bite.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Rotating Specials',
    tag: 'Limited Drops',
    description: 'Seasonal fusion plates, event-only items, and chef-driven experiments built around bold craving.',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1200&auto=format&fit=crop',
  },
];

const schedule = [
  { day: 'Wednesday', time: '11:00 AM – 2:00 PM', place: 'Downtown Madison Lunch Pop-Up' },
  { day: 'Friday', time: '5:00 PM – 9:00 PM', place: 'Community Events + Private Service' },
  { day: 'Saturday', time: '12:00 PM – 8:00 PM', place: 'Markets, Festivals, and Catering' },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=900&auto=format&fit=crop',
];

function Button({ children, variant = 'gold', className = '', href }) {
  const base = 'inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-black uppercase tracking-[0.12em] transition focus:outline-none focus:ring-2 focus:ring-[#b89a55] focus:ring-offset-2';
  const styles = variant === 'outline'
    ? 'border border-white/30 bg-white/5 text-white hover:bg-white hover:text-black'
    : 'bg-[#b89a55] text-black hover:bg-[#c9ad66]';
  if (href) {
    return <a href={href} className={`${base} ${styles} ${className}`}>{children}</a>;
  }
  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#b89a55]/30 bg-[#b89a55]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#b89a55]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#b89a55]" />
      {children}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Menu', '#menu'],
    ['Truck', '#truck'],
    ['Catering', '#catering'],
    ['Gallery', '#gallery'],
    ['Contact', '#contact'],
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080806]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#top" aria-label="Arab-ish home">
          <img src={logoUrl} alt="Arab-ish Mediterranean Fusion logo" className="h-11 w-auto rounded-sm bg-white px-2 py-1" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-stone-200 transition hover:text-[#b89a55]">
              {label}
            </a>
          ))}
          <Button href="#catering" className="px-5 py-3">Book Catering</Button>
        </nav>
        <button aria-label="Toggle menu" className="rounded-full border border-white/20 p-2 text-white md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#080806] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="text-base font-medium text-stone-100">
                {label}
              </a>
            ))}
            <Button href="#catering">Book Catering</Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#f5efe4] text-[#11110f]">
      <Nav />

      <section className="bg-food-hero relative min-h-screen overflow-hidden pt-24 text-white">
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070706] to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <img src={logoUrl} alt="Arab-ish Mediterranean Fusion logo" className="mb-8 w-72 max-w-full rounded-lg bg-white p-3 shadow-2xl md:w-96" />
            <SectionLabel>Madison, Wisconsin Food Truck</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
              Mediterranean Flavor. Reimagined.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200 md:text-xl">
              Fusion Mediterranean comfort food inspired by bold Middle Eastern flavor and built for everyday craving.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#truck">Find the Truck <MapPin className="ml-2 h-5 w-5" /></Button>
              <Button href="#catering" variant="outline">Book Catering <ArrowRight className="ml-2 h-5 w-5" /></Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-[#b89a55]/20 blur-3xl" />
            <div className="bg-grill relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-black/70 p-6 backdrop-blur-xl">
                <div className="mb-2 flex items-center gap-2 text-[#b89a55]"><Flame size={18} /> Signature Item</div>
                <h2 className="text-3xl font-black tracking-tight text-white">Gyro Chorizo Wrap</h2>
                <p className="mt-2 text-sm leading-6 text-stone-200">Familiar food with bold Mediterranean soul.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#070706] px-4 py-20 text-white lg:px-8" id="menu">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <SectionLabel>Featured Menu</SectionLabel>
              <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Built for craving. Designed to scale.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-stone-300">
              Arab-ish makes Middle Eastern-inspired food approachable without watering it down. Strong flavor, clean presentation, and menu items that work for lunch crowds, events, catering, and future fast-casual service.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {menuItems.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#15130f] text-white shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute left-4 top-4 rounded-full bg-[#b89a55] px-3 py-1 text-xs font-black uppercase tracking-widest text-black">{item.tag}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-300">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>What is Arab-ish?</SectionLabel>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Middle Eastern inspired. American accessible.</h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              Arab-ish is Mediterranean fusion with roots, confidence, and hospitality. The food is built around familiar formats people already love — wraps, fries, bowls, and event-friendly plates — then layered with bold Middle Eastern flavor, sauces, spice, and soul.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              It should feel easy to try, hard to forget, and strong enough to grow from a Madison food truck into a future fast-casual restaurant brand.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Bold', 'Warm', 'Premium', 'Approachable'].map((word) => (
              <div key={word} className="rounded-[1.75rem] border border-black/10 bg-white p-8 shadow-sm">
                <div className="mb-8 h-2 w-16 rounded-full bg-[#b89a55]" />
                <h3 className="text-3xl font-black tracking-tight">{word}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="truck" className="bg-[#15130f] px-4 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionLabel>Find the Truck</SectionLabel>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Where are we today?</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-stone-300">
              Follow the weekly schedule, book us for private events, or join the list for location drops and new menu releases.
            </p>
            <div className="mt-8 space-y-4">
              {schedule.map((item) => (
                <div key={item.day} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-start gap-4">
                    <CalendarDays className="mt-1 h-5 w-5 text-[#b89a55]" />
                    <div>
                      <h3 className="font-black">{item.day}</h3>
                      <p className="text-stone-300">{item.time}</p>
                      <p className="text-sm text-stone-400">{item.place}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0a08] shadow-2xl">
            <div className="flex h-full min-h-[460px] flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(184,154,85,.22),transparent_35%),linear-gradient(135deg,#111,#232019)] p-8 text-center">
              <Truck className="mb-6 h-16 w-16 text-[#b89a55]" />
              <h3 className="text-3xl font-black tracking-tight">Map Embed Placeholder</h3>
              <p className="mt-3 max-w-md text-stone-300">Connect Google Maps, StreetFoodFinder, or a live schedule tool here for arab-ish.com.</p>
              <Button href="https://maps.google.com" className="mt-7">Get Directions</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catering" className="px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Catering</SectionLabel>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Bring Arab-ish to the room.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Professional, memorable food for churches, family reunions, weddings, corporate lunches, graduation parties, private events, and festivals.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[{ icon: Users, text: 'Flexible guest counts' }, { icon: Utensils, text: 'Wraps, plates, fries, bowls' }, { icon: Clock, text: 'Simple booking process' }].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <Icon className="h-5 w-5 text-[#b89a55]" />
                  <span className="font-bold">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-xl md:p-8">
            <h3 className="text-2xl font-black tracking-tight">Book Arab-ish Catering</h3>
            <form name="catering" method="POST" data-netlify="true" className="mt-6 grid gap-4 md:grid-cols-2">
              <input type="hidden" name="form-name" value="catering" />
              <input name="name" className="rounded-2xl border border-black/10 bg-[#f7f2ea] px-4 py-4 outline-none focus:border-[#b89a55]" placeholder="Name" />
              <input name="email" type="email" className="rounded-2xl border border-black/10 bg-[#f7f2ea] px-4 py-4 outline-none focus:border-[#b89a55]" placeholder="Email" />
              <select name="eventType" className="rounded-2xl border border-black/10 bg-[#f7f2ea] px-4 py-4 outline-none focus:border-[#b89a55]" defaultValue="">
                <option value="" disabled>Event type</option>
                <option>Church event</option>
                <option>Family reunion</option>
                <option>Corporate lunch</option>
                <option>Wedding</option>
                <option>Festival</option>
                <option>Private party</option>
              </select>
              <input name="eventDate" className="rounded-2xl border border-black/10 bg-[#f7f2ea] px-4 py-4 outline-none focus:border-[#b89a55]" placeholder="Event date" />
              <input name="guestCount" className="rounded-2xl border border-black/10 bg-[#f7f2ea] px-4 py-4 outline-none focus:border-[#b89a55]" placeholder="Guest count" />
              <input name="budget" className="rounded-2xl border border-black/10 bg-[#f7f2ea] px-4 py-4 outline-none focus:border-[#b89a55]" placeholder="Budget" />
              <textarea name="notes" className="min-h-32 rounded-2xl border border-black/10 bg-[#f7f2ea] px-4 py-4 outline-none focus:border-[#b89a55] md:col-span-2" placeholder="Notes, location, service window, menu preferences" />
              <button className="mt-1 rounded-full bg-black px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#b89a55] hover:text-black md:col-span-2" type="submit">Submit Catering Inquiry</button>
            </form>
            <p className="mt-4 text-xs text-stone-500">Form is visually ready. Connect Cloudflare Forms, Formspree, Basin, or a booking CRM before launch.</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#070706] px-4 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Gallery</SectionLabel>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Food that looks alive.</h2>
            <p className="max-w-md text-stone-300">Use this section for real food, trailer, customer, grill, and catering photos as the brand grows.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {galleryImages.map((img, index) => (
              <div key={img} className={`overflow-hidden rounded-[1.5rem] ${index === 0 || index === 5 ? 'md:col-span-2' : ''}`}>
                <img src={img} alt="Arab-ish food and service gallery" className="h-72 w-full object-cover transition duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <div className="mb-5 flex gap-1 text-[#b89a55]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} fill="currentColor" size={20} />)}</div>
            <h3 className="text-3xl font-black tracking-tight">Google Reviews Placeholder</h3>
            <p className="mt-4 text-lg leading-8 text-stone-700">Connect live Google reviews once the truck profile is active. Use testimonials to build trust for catering and first-time visitors.</p>
          </div>
          <div id="contact" className="rounded-[2rem] border border-black/10 bg-[#15130f] p-8 text-white shadow-sm">
            <SectionLabel>Follow the Flavor</SectionLabel>
            <h3 className="text-3xl font-black tracking-tight">Get truck drops, specials, and catering updates.</h3>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input className="min-h-14 flex-1 rounded-full border border-white/10 bg-white/10 px-5 text-white outline-none placeholder:text-stone-400 focus:border-[#b89a55]" placeholder="Email or phone" />
              <button className="min-h-14 rounded-full bg-[#b89a55] px-7 font-bold text-black transition hover:bg-[#c9ad66]" type="button">Join List</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#070706] px-4 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 border-t border-white/10 pt-10 md:grid-cols-[1fr_1fr_1fr]">
          <div>
            <img src={logoUrl} alt="Arab-ish Mediterranean Fusion logo" className="w-64 rounded-lg bg-white p-3" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-stone-400">Familiar food with bold Mediterranean soul. Madison, Wisconsin.</p>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-[#b89a55]">Contact</h4>
            <div className="mt-4 space-y-3 text-stone-300">
              <p className="flex items-center gap-2"><Mail size={16} /> hello@arab-ish.com</p>
              <p className="flex items-center gap-2"><Phone size={16} /> Add business phone</p>
              <p className="flex items-center gap-2"><Instagram size={16} /> @arabish</p>
            </div>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-[#b89a55]">Quick Links</h4>
            <div className="mt-4 grid gap-3 text-stone-300">
              <a href="#menu">Menu</a>
              <a href="#truck">Find the Truck</a>
              <a href="#catering">Catering</a>
              <a href="#gallery">Gallery</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl text-xs text-stone-500">© 2026 Arab-ish Mediterranean Fusion. Built for arab-ish.com.</div>
      </footer>
    </main>
  );
}
