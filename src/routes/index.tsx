import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Plane,
  Hotel,
  Car,
  Palmtree,
  BusFront,
  LifeBuoy,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Heart,
  Sparkles,
  ShieldCheck,
  Compass,
  Search,
  ArrowRight,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { Preloader } from "@/components/Preloader";
import logo from "@/assets/quickfly-logo.png.asset.json";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "QuickFly Travel & Tourism | Flights, Hotels & Tours in Erbil" },
      {
        name: "description",
        content:
          "QuickFly Travel & Tourism in Bakhtiari District, Erbil — flight tickets, hotel reservations, car rental, holiday packages and airport transfers. Travel Smart, Fly Quick!",
      },
      { property: "og:title", content: "QuickFly Travel & Tourism | Erbil, Iraq" },
      {
        property: "og:description",
        content:
          "Flights, hotels, car rentals and unforgettable journeys — all in one place. Based in Bakhtiari District, Erbil.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "QuickFly Travel & Tourism",
          slogan: "Travel Smart , Fly Quick!",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bakhtiari District",
            addressLocality: "Erbil",
            addressCountry: "IQ",
          },
          telephone: ["+9647509757042", "+9647509577041"],
          sameAs: ["https://instagram.com/quickfly.co", "https://facebook.com/quickfly.co"],
        }),
      },
    ],
  }),
});

const WA1 = "https://wa.me/9647509757042";
const WA2 = "https://wa.me/9647509577041";

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const destinations = [
  { name: "Maldives", note: "Overwater villas & turquoise lagoons", src: img("photo-1514282401047-d79a71a590e8") },
  { name: "Dubai", note: "Skylines, desert safaris & luxury", src: img("photo-1512453979798-5ea266f8880c") },
  { name: "Istanbul", note: "Where two continents meet", src: img("photo-1524231757912-21f4fe3a7200") },
  { name: "Paris", note: "Timeless romance and elegance", src: img("photo-1502602898657-3e91760cbb34") },
  { name: "Cappadocia", note: "Sunrise balloons over fairy chimneys", src: img("photo-1605281317010-fe5ffe798166") },
  { name: "Bali", note: "Rice terraces, temples & surf", src: img("photo-1537996194471-e657df975ab4") },
  { name: "Switzerland", note: "Alpine peaks and glacier trains", src: img("photo-1530122037265-a5f1f91d3b99") },
  { name: "Santorini", note: "White cliffs above the Aegean", src: img("photo-1570077188670-e3a8d69ac5ff") },
];

const services = [
  { icon: Plane, title: "Flight Tickets", text: "Domestic and international tickets with the best available fares and flexible routing." },
  { icon: Hotel, title: "Hotel Reservations", text: "Handpicked stays from city hotels to beach resorts, booked and confirmed for you." },
  { icon: Car, title: "Car Rental", text: "Reliable vehicles at your destination, with or without a driver." },
  { icon: Palmtree, title: "Holiday Packages", text: "Complete itineraries combining flights, hotels, tours and transfers." },
  { icon: BusFront, title: "Airport Transfers", text: "Comfortable pick-up and drop-off so your trip starts and ends stress-free." },
  { icon: LifeBuoy, title: "Travel Assistance", text: "Visa guidance, travel documents and support before and during your journey." },
];

const why = [
  { icon: Heart, title: "Personalized Service", text: "Every trip is planned around your dates, budget and travel style — never a template." },
  { icon: Sparkles, title: "Travel Made Simple", text: "One team handles flights, hotels, cars and transfers, so you only make one call." },
  { icon: ShieldCheck, title: "Reliable Assistance", text: "Changes, delays or questions — we stay reachable while you're on the road." },
  { icon: Compass, title: "Local Expertise", text: "Erbil-based and close to our travellers, with real knowledge of the region." },
];

const gallery = [
  { src: img("photo-1488646953014-85cb44e25828", 1200), label: "Slow mornings abroad", span: "md:col-span-2 md:row-span-2" },
  { src: img("photo-1507525428034-b723cf961d3e", 900), label: "Endless coastlines", span: "" },
  { src: img("photo-1469854523086-cc02fe5d8800", 900), label: "Open roads", span: "" },
  { src: img("photo-1476514525535-07fb3b4ae5f1", 1200), label: "Mountain air", span: "md:col-span-2" },
];

function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  tone = "light",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  tone?: "light" | "white" | "navy";
}) {
  const bg = tone === "navy" ? "bg-primary text-primary-foreground" : tone === "white" ? "bg-card" : "bg-background";
  return (
    <section id={id} className={`${bg} scroll-mt-24 px-5 py-20 md:py-28`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
          )}
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight md:text-5xl">{title}</h2>
          {lead && (
            <p className={`mt-4 text-base md:text-lg ${tone === "navy" ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
              {lead}
            </p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function BookingWidget() {
  const [form, setForm] = useState({ from: "Erbil (EBL)", to: "", depart: "", ret: "", travelers: "1 Adult" });

  const message = encodeURIComponent(
    `Hello QuickFly! I'd like to search a trip.\nFrom: ${form.from || "-"}\nTo: ${form.to || "-"}\nDeparture: ${
      form.depart || "-"
    }\nReturn: ${form.ret || "-"}\nTravelers: ${form.travelers}`,
  );

  const field = "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-accent";

  return (
    <div id="booking" className="scroll-mt-28 rounded-3xl border border-border bg-card p-5 shadow-[0_30px_80px_-50px_rgba(11,37,69,0.7)] md:p-7">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">From</span>
          <input className={field} value={form.from} onChange={(e) => setForm({ ...form, from: e.target.value })} placeholder="Erbil" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">To</span>
          <input className={field} value={form.to} onChange={(e) => setForm({ ...form, to: e.target.value })} placeholder="Dubai" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Departure</span>
          <input type="date" className={field} value={form.depart} onChange={(e) => setForm({ ...form, depart: e.target.value })} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Return</span>
          <input type="date" className={field} value={form.ret} onChange={(e) => setForm({ ...form, ret: e.target.value })} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Travelers</span>
          <select className={field} value={form.travelers} onChange={(e) => setForm({ ...form, travelers: e.target.value })}>
            {["1 Adult", "2 Adults", "3 Adults", "Family (4+)", "Group (8+)"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <a
        href={`${WA1}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.01] md:w-auto"
      >
        <Search className="h-4 w-4" /> Search
      </a>
      <p className="mt-3 text-xs text-muted-foreground">
        Your search is sent to our travel team on WhatsApp and answered personally.
      </p>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Preloader />
      <SiteNav />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-14 md:pb-24 md:pt-20">
          <div className="qf-rise max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Travel Smart , Fly Quick!
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">
              Your Journey Starts With QuickFly
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/80 md:text-lg">
              Flights, hotels, car rentals and unforgettable journeys — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-105"
              >
                Plan Your Trip <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="mt-12">
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* Destinations */}
      <Section
        id="destinations"
        eyebrow="Popular Destinations"
        title="Where Will You Go Next?"
        lead="From island escapes to city breaks, these are the journeys our travellers love most."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => (
            <article key={d.name} className="group overflow-hidden rounded-3xl bg-card shadow-[0_24px_60px_-45px_rgba(11,37,69,0.8)]">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={d.src}
                  alt={`${d.name} travel destination`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-display text-xl font-bold text-primary-foreground">{d.name}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground">{d.note}</p>
                <a
                  href={`${WA1}?text=${encodeURIComponent(`Hello QuickFly! I'm interested in travelling to ${d.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                >
                  Explore Destination <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section
        id="services"
        tone="white"
        eyebrow="Our Services"
        title="Everything You Need For Your Journey"
        lead="One team, one conversation — every part of your trip handled from start to finish."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why */}
      <Section
        id="why"
        tone="navy"
        eyebrow="Why QuickFly"
        title="Why Travel With QuickFly?"
        lead="A local agency with a personal touch — and the reach to take you anywhere."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <div key={w.title} className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <w.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section
        eyebrow="Travel Inspiration"
        title="Places Worth Dreaming About"
        lead="A little inspiration for the trip you keep promising yourself."
      >
        <div className="grid auto-rows-[220px] gap-5 md:grid-cols-4">
          {gallery.map((g) => (
            <figure key={g.src} className={`group relative overflow-hidden rounded-3xl ${g.span}`}>
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent p-5 font-display text-sm font-semibold text-primary-foreground">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* About & team */}
      <Section
        id="about"
        tone="white"
        eyebrow="About Us"
        title="Meet QuickFly"
        lead="QuickFly Travel & Tourism is an Erbil-based travel agency built on a simple idea: travel should feel easy. From the first question to the flight home, we stay with you."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { name: "Omer Sultan", role: "Chief Executive Officer", initials: "OS" },
            { name: "Sarab Sultan", role: "Travel & Customer Support", initials: "SS" },
          ].map((p) => (
            <div key={p.name} className="flex items-center gap-5 rounded-3xl border border-border bg-background p-7">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary font-display text-xl font-bold text-primary-foreground">
                {p.initials}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold text-primary">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        eyebrow="Location & Contact"
        title="Come Say Hello In Erbil"
        lead="Find us in Bakhtiari District, Erbil, Iraq — or message us on WhatsApp and we'll reply quickly."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-7">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="font-display text-lg font-bold text-primary">QuickFly Travel & Tourism</h3>
                <p className="text-sm text-muted-foreground">Bakhtiari District, Erbil, Iraq</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <a
                href={WA1}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl bg-accent px-5 py-4 text-sm font-semibold text-accent-foreground"
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> WhatsApp 0750 975 7042
                </span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={WA2}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground"
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> WhatsApp 0750 957 7041
                </span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com/quickfly.co"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-primary hover:border-accent"
              >
                <Instagram className="h-4 w-4" /> @quickfly.co
              </a>
              <a
                href="https://facebook.com/quickfly.co"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-primary hover:border-accent"
              >
                <Facebook className="h-4 w-4" /> quickfly.co
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <iframe
              title="QuickFly Travel & Tourism location in Bakhtiari District, Erbil"
              src="https://www.google.com/maps?q=Bakhtiari%20District%2C%20Erbil%2C%20Iraq&output=embed"
              className="h-full min-h-[340px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-primary px-5 py-20 text-center text-primary-foreground md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">Your Next Destination Is Waiting.</h2>
          <p className="mt-4 text-primary-foreground/75">Tell us where you dream of going — we'll handle the rest.</p>
          <a
            href={WA1}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground transition-transform hover:scale-105"
          >
            Book Your Trip <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card px-5 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <img src={logo.url} alt="QuickFly Travel & Tourism" className="h-12 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground">
              Travel Smart , Fly Quick! Your trusted travel partner in Erbil, Iraq.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-primary">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Home", "About Us", "Services", "Destinations", "Why QuickFly", "Contact"].map((l, i) => (
                <li key={l}>
                  <a className="hover:text-accent" href={["#home", "#about", "#services", "#destinations", "#why", "#contact"][i]}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-primary">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-primary">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Bakhtiari District, Erbil, Iraq</li>
              <li>
                <a className="hover:text-accent" href={WA1} target="_blank" rel="noreferrer">
                  0750 975 7042
                </a>
              </li>
              <li>
                <a className="hover:text-accent" href={WA2} target="_blank" rel="noreferrer">
                  0750 957 7041
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="https://instagram.com/quickfly.co" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-primary hover:text-accent" />
              </a>
              <a href="https://facebook.com/quickfly.co" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-primary hover:text-accent" />
              </a>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-7xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 QuickFly Travel & Tourism. All rights reserved.
        </p>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA1}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with QuickFly on WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
