import { createFileRoute } from "@tanstack/react-router";
import { Search, Filter, MapPin, Users, Sparkles, ArrowRight, TrendingUp, Calendar, BarChart3 } from "lucide-react";
import { AreaChart, BarChart, Donut } from "@/components/site/Chart";
import { CountUp } from "@/components/site/CountUp";
import { Topbar } from "./organizadores";
import { SponsorSidebar } from "@/components/site/SponsorSidebar";

export const Route = createFileRoute("/patrocinadores")({
  head: () => ({
    meta: [
      { title: "Painel do Patrocinador — Play Analytics" },
      { name: "description", content: "Encontre eventos, meça ROI e amplie sua marca no esporte do Paraná." },
    ],
  }),
  component: SponsorPage,
});

function SponsorPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <SponsorSidebar active="discover" />
        <main className="flex-1">
          <Topbar persona="Patrocinador" name="CEFE - UEL" />
          <div className="mx-auto max-w-7xl space-y-6 p-6 lg:p-8">
            <HeaderBar />
            <KpiRow />
            <RoiChart />
            <Filters />
            <EventsGrid />
            <Suggestions />
          </div>
        </main>
      </div>
    </div>
  );
}

function HeaderBar() {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-display text-3xl font-bold tracking-tight">Descubra eventos para a CEFE - UEL</h1>
        <p className="mt-1 text-sm text-muted-foreground">87 eventos no Paraná esta temporada — <span className="text-lime font-semibold">12 com alto fit</span> com sua marca.</p>
      </div>
      <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">
        <Sparkles className="h-4 w-4" /> Match inteligente
      </button>
    </div>
  );
}

function KpiRow() {
  const kpis = [
    { l: "Alcance estimado", v: 482, s: "K", d: "+18%", c: "primary" as const, icon: Users },
    { l: "Eventos ativos", v: 7, d: "+2", c: "lime" as const, icon: Calendar },
    { l: "ROI médio", v: 34, s: "x", d: "+0,4x", c: "orange" as const, icon: TrendingUp },
    { l: "Impressões", v: 2100, s: "K", d: "+24%", c: "primary" as const, icon: BarChart3 },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((k) => {
        const Icon = k.icon;
        const bg = k.c === "lime" ? "bg-lime/15 text-lime" : k.c === "orange" ? "bg-orange/15 text-orange" : "bg-primary/15 text-primary";
        return (
          <div key={k.l} className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
            <div className="flex items-center justify-between">
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${bg}`}><Icon className="h-4 w-4" /></div>
              <span className={`text-xs font-semibold ${k.c === "lime" ? "text-lime" : k.c === "orange" ? "text-orange" : "text-primary"}`}>{k.d}</span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{k.l}</p>
            <p className="mt-1 font-display text-3xl font-bold">{k.l === "ROI médio" ? "3,4x" : <><CountUp end={k.v} suffix={k.s} /></>}</p>
          </div>
        );
      })}
    </div>
  );
}

function RoiChart() {
  return (
    <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
      <div className="rounded-2xl border border-border bg-gradient-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-lg font-bold">ROI por evento</h3>
            <p className="text-xs text-muted-foreground">Retorno acumulado por investimento</p>
          </div>
          <span className="rounded-full bg-lime/15 px-3 py-1 text-xs font-semibold text-lime">3,4x médio</span>
        </div>
        <div className="mt-6">
          <BarChart data={[
            { label: "Maratona", value: 92 },
            { label: "MTB SM", value: 68 },
            { label: "Trail FI", value: 54 },
            { label: "Triatlo", value: 78 },
            { label: "Pedal MG", value: 41 },
            { label: "Run CWB", value: 86 },
          ]} color="primary" />
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-gradient-card p-6">
        <h3 className="font-display text-lg font-bold">Alcance por região</h3>
        <ul className="mt-4 space-y-3 text-sm">
          {[
            { r: "RMC", v: 42 },
            { r: "Norte PR", v: 28 },
            { r: "Oeste", v: 18 },
            { r: "Centro-Sul", v: 12 },
          ].map((x) => (
            <li key={x.r}>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{x.r}</span>
                <span className="font-semibold">{x.v}%</span>
              </div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-surface">
                <div className="h-full bg-gradient-lime" style={{ width: `${x.v * 2}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Filters() {
  const chips = ["Todas modalidades", "Corrida", "Ciclismo", "Trail", "Triatlo", "Curitiba", "Norte PR", "Público 25-44"];
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-1 items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Buscar evento, cidade ou modalidade…" className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground" />
        </div>
        <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm">
          <Filter className="h-4 w-4" /> Filtros
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {chips.map((c, i) => (
          <span key={c} className={`rounded-full border px-3 py-1 text-xs ${i === 0 ? "border-lime bg-lime/15 text-lime" : "border-border text-muted-foreground"}`}>{c}</span>
        ))}
      </div>
    </div>
  );
}

function EventsGrid() {
  const events = [
    { n: "Maratona de Curitiba", c: "Curitiba", d: "12 Jun", a: 12000, f: 94, t: "Corrida", roi: "4.2x" },
    { n: "GP MTB Serra do Mar", c: "Morretes", d: "19 Jun", a: 3800, f: 81, t: "Ciclismo", roi: "3.1x" },
    { n: "Trail Run Iguaçu", c: "Foz do Iguaçu", d: "02 Jul", a: 5400, f: 76, t: "Trail", roi: "2.8x" },
    { n: "Triatlo de Londrina", c: "Londrina", d: "14 Jul", a: 4200, f: 88, t: "Triatlo", roi: "3.6x" },
    { n: "Pedalada Maringá", c: "Maringá", d: "28 Jul", a: 2900, f: 72, t: "Ciclismo", roi: "2.4x" },
    { n: "Night Run Curitiba", c: "Curitiba", d: "10 Ago", a: 6800, f: 91, t: "Corrida", roi: "3.9x" },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {events.map((e) => (
        <div key={e.n} className="group rounded-2xl border border-border bg-gradient-card p-5 shadow-card transition-transform hover:-translate-y-1">
          <div className="flex items-start justify-between">
            <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary">{e.t}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-lime/15 px-2.5 py-1 text-[11px] font-semibold text-lime">
              <Sparkles className="h-3 w-3" /> {e.f}% fit
            </span>
          </div>
          <h4 className="mt-4 font-display text-lg font-bold">{e.n}</h4>
          <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {e.c} · {e.d}</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-muted-foreground">Audiência</p>
              <p className="font-display text-lg font-bold">{(e.a / 1000).toFixed(1)}K</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-muted-foreground">ROI estimado</p>
              <p className="font-display text-lg font-bold text-lime">{e.roi}</p>
            </div>
          </div>
          <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow">
            Patrocinar <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

function Suggestions() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-gradient-primary p-8 shadow-glow md:p-10">
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-background/20 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
            <Sparkles className="h-3 w-3" /> Inteligência da plataforma
          </span>
          <h3 className="mt-3 font-display text-2xl font-bold text-primary-foreground md:text-3xl">
            3 eventos com 90%+ de match esperam por você.
          </h3>
          <p className="mt-2 text-primary-foreground/80">Baseado no seu público-alvo, território e tickets anteriores.</p>
        </div>
        <button className="rounded-full bg-lime px-5 py-3 text-sm font-semibold text-lime-foreground shadow-lime">Ver sugestões</button>
      </div>
    </div>
  );
}
