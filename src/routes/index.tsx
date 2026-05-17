import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import heroImg from "@/assets/hero-sed.jpg";
import activitiesImg from "@/assets/activities.jpg";
import projectsImg from "@/assets/projects.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "XXXII Jornada SED en Familia — Maristas Cartagena" },
      { name: "description", content: "Un día para cambiar el mundo. Fiesta solidaria con deportes, talleres, gastronomía y tómbola. Inscripciones abiertas." },
    ],
  }),
});

// Target date for countdown — adjust as needed
const EVENT_DATE = new Date("2026-05-23T10:00:00+02:00");

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

const navLinks = [
  { href: "#sobre", label: "Sobre SED" },
  { href: "#actividades", label: "Actividades" },
  { href: "#programa", label: "Programa" },
  { href: "#inscripciones", label: "Inscripciones" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#patrocinadores", label: "Patrocinadores" },
];

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-hero text-primary-foreground font-display font-bold">S</span>
          <span className="font-display text-lg font-bold tracking-tight">Jornada SED</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#inscripciones" className="inline-flex items-center rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background hover:opacity-90 transition">
          Participa
        </a>
      </div>
    </header>
  );
}

function Countdown() {
  const { d, h, m, s } = useCountdown(EVENT_DATE);
  const items = [
    { v: d, l: "Días" },
    { v: h, l: "Horas" },
    { v: m, l: "Min" },
    { v: s, l: "Seg" },
  ];
  return (
    <div className="flex gap-3 sm:gap-4">
      {items.map((it) => (
        <div key={it.l} className="flex-1 rounded-2xl bg-background/15 backdrop-blur-sm border border-white/20 px-4 py-3 text-center">
          <div className="font-display text-3xl sm:text-4xl font-bold tabular-nums text-white">{String(it.v).padStart(2, "0")}</div>
          <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70 mt-1">{it.l}</div>
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-hero">
      <img
        src={heroImg}
        alt="Familias y alumnos celebrando la Jornada SED en Maristas Cartagena"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pt-32 pb-20 sm:pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
            <span className="h-2 w-2 rounded-full bg-sun animate-pulse" />
            XXXII Edición · 2026
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] text-white text-balance">
            Un día para <em className="not-italic bg-sun bg-clip-text text-transparent">cambiar el mundo</em>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 text-balance">
            Jornada SED en Familia · Maristas Cartagena. Más de 30 años de solidaridad,
            educación y desarrollo. Una fiesta para ayudar.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#inscripciones" className="inline-flex items-center rounded-full bg-sun px-7 py-3.5 font-semibold text-sun-foreground shadow-glow hover:scale-[1.02] transition">
              Inscríbete →
            </a>
            <a href="#sobre" className="inline-flex items-center rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition">
              Conoce SED
            </a>
          </div>
          <div className="mt-12 max-w-xl">
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  const stats = [
    { v: "32", l: "Ediciones" },
    { v: "30+", l: "Años de historia" },
    { v: "1000+", l: "Participantes" },
    { v: "∞", l: "Solidaridad" },
  ];
  return (
    <section id="sobre" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">¿Qué es SED?</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight text-balance">
              Solidaridad,<br /> Educación y<br /> Desarrollo.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">SED</strong> es una ONG vinculada a los colegios Maristas
              que trabaja en proyectos educativos, sociales y de cooperación internacional,
              principalmente en <span className="text-foreground">África</span> y <span className="text-foreground">América Latina</span>.
            </p>
            <p>
              La <strong className="text-foreground">Jornada SED</strong> del colegio Maristas Cartagena es una gran fiesta solidaria anual
              donde participan alumnos, familias, profesores, antiguos alumnos y empresas colaboradoras.
              Un evento con más de tres décadas de tradición.
            </p>
            <blockquote className="border-l-4 border-sun pl-5 italic font-display text-2xl text-foreground">
              “Solidaridad que educa. Más de 30 años construyendo futuro.”
            </blockquote>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-soft">
              <div className="font-display text-5xl font-bold text-primary">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const activities = [
  { icon: "⚽", title: "Deportes", desc: "Torneos de fútbol sala, baloncesto, balonmano, pádel, voley, badminton y ajedrez." },
  { icon: "🎨", title: "Talleres", desc: "Pintacaras, manualidades, cuentacuentos e hinchables para los más pequeños." },
  { icon: "🍳", title: "Gastronomía", desc: "Concurso gastronómico, bar solidario y comida en familia." },
  { icon: "🎤", title: "Maristas Talent", desc: "El gran concurso de talento del colegio. Música, baile y mucha emoción." },
  { icon: "🎟️", title: "Tómbola y Rifas", desc: "Premios solidarios y un rastrillo lleno de sorpresas." },
  { icon: "🎮", title: "Juegos virtuales", desc: "Gaming, Escape Room y retos digitales para secundaria." },
];

function Actividades() {
  return (
    <section id="actividades" className="relative py-28 sm:py-36 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Actividades</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight text-balance">
              Una fiesta para todas las edades.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Desde infantil hasta antiguos alumnos: hay una propuesta para cada miembro
            de la comunidad marista.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <article key={a.title} className="group relative overflow-hidden rounded-3xl bg-card border border-border p-7 transition hover:-translate-y-1 hover:shadow-soft">
              <div className="text-4xl">{a.icon}</div>
              <h3 className="mt-5 font-display text-2xl font-bold">{a.title}</h3>
              <p className="mt-2 text-muted-foreground">{a.desc}</p>
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-sun/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            </article>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl">
          <img src={activitiesImg} alt="Niños y niñas en actividades deportivas" loading="lazy" width={1280} height={960} className="w-full h-72 sm:h-96 object-cover" />
        </div>
      </div>
    </section>
  );
}

const program = [
  { time: "10:00", act: "Apertura oficial" },
  { time: "10:30", act: "Torneos deportivos" },
  { time: "12:00", act: "Talleres infantiles y pintacaras" },
  { time: "13:00", act: "Concurso gastronómico" },
  { time: "14:30", act: "Comida solidaria en familia" },
  { time: "16:00", act: "Maristas Talent" },
  { time: "17:00", act: "Rifas y tómbola" },
  { time: "18:30", act: "Concierto en directo" },
  { time: "19:30", act: "Clausura" },
];

function Programa() {
  return (
    <section id="programa" className="py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Programa</span>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-balance">
          El día, hora a hora.
        </h2>
        <div className="mt-12 divide-y divide-border rounded-3xl bg-card border border-border overflow-hidden">
          {program.map((p, i) => (
            <div key={p.time} className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] items-center gap-6 px-6 sm:px-10 py-5 hover:bg-muted/40 transition">
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary tabular-nums">{p.time}</div>
              <div className="flex items-center gap-3 text-base sm:text-lg">
                <span className="h-2 w-2 rounded-full bg-sun" />
                {p.act}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Etapa = {
  key: string;
  title: string;
  subtitle: string;
  withInscription: { name: string; price?: string }[];
  withoutInscription: { name: string; price?: string }[];
};

const etapas: Etapa[] = [
  {
    key: "infantil",
    title: "Infantil",
    subtitle: "Hasta 5 años",
    withInscription: [
      { name: "Concurso de dibujo", price: "3 €" },
      { name: "Fútbol sala (5 años)", price: "3 €" },
    ],
    withoutInscription: [
      { name: "Pesca de patitos", price: "3 ekis" },
      { name: "Talleres", price: "3 ekis" },
    ],
  },
  {
    key: "primaria14",
    title: "Primaria 1º–4º",
    subtitle: "Primaria pequeña",
    withInscription: [
      { name: "Maristas Talent", price: "3 €" },
      { name: "Concurso de Pintura", price: "3 €" },
      { name: "Ajedrez", price: "3 €" },
      { name: "Fútbol Sala", price: "3 €" },
      { name: "Balonmano", price: "3 €" },
      { name: "Concurso Gastronómico", price: "3,5 €" },
    ],
    withoutInscription: [
      { name: "Pesca de patitos", price: "3 ekis" },
      { name: "Talleres", price: "3 ekis" },
    ],
  },
  {
    key: "primaria56",
    title: "Primaria 5º–6º",
    subtitle: "Primaria mayor",
    withInscription: [
      { name: "Maristas Talent", price: "3 €" },
      { name: "Concurso de Pintura", price: "3 €" },
      { name: "Juegos virtuales", price: "3 €" },
      { name: "Ajedrez", price: "3 €" },
      { name: "Fútbol Sala", price: "3 €" },
      { name: "Balonmano", price: "3 €" },
      { name: "Baloncesto", price: "3 €" },
      { name: "Voley", price: "3 €" },
      { name: "Concurso Gastronómico", price: "3,5 €" },
    ],
    withoutInscription: [],
  },
  {
    key: "secundaria",
    title: "Secundaria",
    subtitle: "1º–4º ESO",
    withInscription: [
      { name: "Maristas Talent", price: "3 €" },
      { name: "Concurso de Pintura", price: "3 €" },
      { name: "Juegos virtuales", price: "3 €" },
      { name: "Voley", price: "3 €" },
      { name: "Ajedrez", price: "3 €" },
      { name: "Fútbol Sala", price: "3 €" },
      { name: "Balonmano", price: "3 €" },
      { name: "Baloncesto", price: "3 €" },
      { name: "Badmintón", price: "3 €" },
      { name: "Pádel (3º–4º ESO)", price: "3 €" },
      { name: "Escape Room", price: "3 €" },
      { name: "Concurso Gastronómico", price: "3,5 €" },
    ],
    withoutInscription: [],
  },
  {
    key: "bach",
    title: "Bachiller y Antiguos Alumnos",
    subtitle: "Mayores y exalumnos",
    withInscription: [
      { name: "Maristas Talent", price: "3 €" },
      { name: "Concurso de Pintura", price: "3 €" },
      { name: "Juegos virtuales", price: "3 €" },
      { name: "Mus", price: "3 €" },
      { name: "Voley", price: "3 €" },
      { name: "Ajedrez", price: "3 €" },
      { name: "Fútbol Sala", price: "3 €" },
      { name: "Baloncesto", price: "3 €" },
      { name: "Pádel", price: "3 €" },
      { name: "Badmintón", price: "3 €" },
      { name: "Fútbol Antiguos Alumnos (con árbitro)", price: "5 €" },
      { name: "Concurso Gastronómico", price: "3,5 €" },
    ],
    withoutInscription: [],
  },
];

function Inscripciones() {
  const [active, setActive] = useState(etapas[0].key);
  const current = useMemo(() => etapas.find((e) => e.key === active)!, [active]);
  return (
    <section id="inscripciones" className="py-28 sm:py-36 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Inscripciones</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-balance">
              Elige tu etapa y participa.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Inscripciones del <strong className="text-foreground">martes 7</strong> al <strong className="text-foreground">lunes 13 de abril</strong>.
              Infantil y Primaria con tutores · Secundaria, Bachiller y Antiguos Alumnos en
              recreos en Biblioteca (11:00–11:30).
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {etapas.map((e) => (
            <button
              key={e.key}
              onClick={() => setActive(e.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition border ${
                active === e.key
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {e.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-card border border-border p-8 shadow-soft">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold">{current.title}</h3>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Con inscripción</span>
            </div>
            <p className="text-sm text-muted-foreground">{current.subtitle}</p>
            <ul className="mt-6 divide-y divide-border">
              {current.withInscription.map((a) => (
                <li key={a.name} className="flex items-center justify-between py-3">
                  <span>{a.name}</span>
                  {a.price && <span className="font-semibold text-primary">{a.price}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-sun/15 border border-sun/40 p-8">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold">Sin inscripción</h3>
              <span className="text-xs font-semibold uppercase tracking-widest text-sun-foreground">Libre</span>
            </div>
            <p className="text-sm text-muted-foreground">¡Apúntate en el momento!</p>
            {current.withoutInscription.length > 0 ? (
              <ul className="mt-6 divide-y divide-sun/30">
                {current.withoutInscription.map((a) => (
                  <li key={a.name} className="flex items-center justify-between py-3">
                    <span>{a.name}</span>
                    {a.price && <span className="font-semibold">{a.price}</span>}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-10 rounded-2xl bg-background/60 p-6 text-sm text-muted-foreground">
                Esta etapa no dispone de actividades libres específicas. Consulta el resto
                de propuestas del día: tómbola, bar solidario, conciertos y rastrillo.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Proyectos() {
  const projects = [
    { country: "Costa de Marfil", title: "Educación rural", desc: "Apoyo a escuelas en zonas vulnerables." },
    { country: "Perú", title: "Becas Maristas", desc: "Acceso a la educación para familias sin recursos." },
    { country: "RD del Congo", title: "Formación docente", desc: "Capacitación a maestros de comunidades indígenas." },
  ];
  return (
    <section id="proyectos" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl">
            <img src={projectsImg} alt="Niños beneficiarios de proyectos SED en África" loading="lazy" width={1280} height={960} className="w-full h-[480px] object-cover" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/90 backdrop-blur p-5">
              <p className="text-sm font-semibold text-primary">100% de lo recaudado</p>
              <p className="text-sm text-muted-foreground">va destinado a proyectos solidarios.</p>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Proyectos solidarios</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-balance">
              Tu participación llega más lejos de lo que imaginas.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              SED desarrolla proyectos en África y América Latina, financiando educación,
              cooperación y desarrollo comunitario.
            </p>
            <div className="mt-8 space-y-4">
              {projects.map((p) => (
                <div key={p.country} className="rounded-2xl border border-border bg-card p-5 flex gap-4 items-start">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sun/20 text-xl">📍</div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-primary">{p.country}</div>
                    <div className="font-display text-xl font-bold">{p.title}</div>
                    <div className="text-sm text-muted-foreground">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const sponsors = ["Harimsa", "Avanza Fibra", "Jimbee Cartagena", "GM Cash", "Game Padel", "Driver", "Flowbalance", "Casa Tomás", "Serunión"];

function Patrocinadores() {
  return (
    <section id="patrocinadores" className="py-28 sm:py-36 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Empresas colaboradoras</span>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-balance">
          Gracias por hacerlo posible.
        </h2>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {sponsors.map((s) => (
            <div key={s} className="rounded-2xl bg-card border border-border p-6 font-display text-lg font-bold text-foreground/80 hover:text-foreground hover:shadow-soft transition">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-hero p-10 sm:p-16 text-center shadow-soft">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sun/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl sm:text-6xl font-bold text-white text-balance">
              Juntos por una causa.
            </h2>
            <p className="mt-5 text-white/80 text-lg max-w-xl mx-auto">
              Voluntariado, donaciones, patrocinio o simplemente venir a disfrutar.
              Hay muchas formas de sumar.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#inscripciones" className="inline-flex items-center rounded-full bg-sun px-7 py-3.5 font-semibold text-sun-foreground hover:scale-[1.02] transition">
                Inscríbete
              </a>
              <a href="mailto:sed@maristascartagena.com" className="inline-flex items-center rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition">
                Quiero colaborar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-hero text-primary-foreground font-display font-bold">S</span>
            <span className="font-display text-lg font-bold">Jornada SED</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Solidaridad, Educación y Desarrollo. ONG vinculada a los colegios Maristas.
          </p>
        </div>
        <div>
          <h4 className="font-display text-base font-bold">Maristas Cartagena</h4>
          <address className="not-italic mt-3 text-sm text-muted-foreground leading-relaxed">
            C. Hermano Pedro Ignacio, 2<br />
            30203 Cartagena, Murcia
          </address>
        </div>
        <div>
          <h4 className="font-display text-base font-bold">Enlaces</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#sobre" className="hover:text-foreground">Sobre SED</a></li>
            <li><a href="#programa" className="hover:text-foreground">Programa</a></li>
            <li><a href="#inscripciones" className="hover:text-foreground">Inscripciones</a></li>
            <li><a href="#patrocinadores" className="hover:text-foreground">Patrocinadores</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Jornada SED · Maristas Cartagena
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <Sobre />
      <Actividades />
      <Programa />
      <Inscripciones />
      <Proyectos />
      <Patrocinadores />
      <CTA />
      <Footer />
    </main>
  );
}
