import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, Bell, Search, Plus, Calendar, MapPin, Users, TrendingUp, Trophy, Sparkles, BarChart3, Target, Megaphone, ArrowRight, Settings, Home as HomeIcon } from "lucide-react";
import { AreaChart, BarChart, Donut } from "@/components/site/Chart";
import { CountUp } from "@/components/site/CountUp";
import { ParanaMap } from "@/components/site/ParanaMap";

export const Route = createFileRoute("/organizadores")({
  head: () => ({
    meta: [
      { title: "Painel do Organizador — Play Analytics" },
      { name: "description", content: "Dashboard, métricas e gestão de eventos esportivos no Paraná." },
    ],
  }),
  component: OrganizerPage,
});

const nav = [
  { icon: HomeIcon, label: "Visão geral", active: true },
  { icon: Calendar, label: "Eventos" },
  { icon: Users, label: "Inscritos" },
  { icon: Megaphone, label: "Patrocinadores" },
  { icon: BarChart3, label: "Relatórios" },
  { icon: Trophy, label: "Ranking" },
  { icon: Settings, label: "Configurações" },
];

function OrganizerPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar tint="primary" />
        <main className="flex-1">
          <Topbar persona="Organizador" name="Thiago Spiri Ferrei" />
          <div className="mx-auto max-w-7xl space-y-6 p-6 lg:p-8">
            <Header />
            <KpiRow />
            <ChartsRow />
            <MapAndSponsors />
            <EventsTable />
            <Insights />
          </div>
        </main>
      </div>
    </div>
  );
}

export function Sidebar({ tint }: { tint: "primary" | "lime" }) {
  const accent = tint === "lime" ? "bg-lime/15 text-lime" : "bg-primary/15 text-primary";
  const dot = tint === "lime" ? "bg-lime shadow-lime" : "bg-primary shadow-glow";
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border bg-surface/40 p-5 lg:block">
       <Link to="/" className="flex items-center gap-2">
          <img src="/src/components/img/Logo.svg" alt="Play Analytics" className="h-15" draggable={false}/>
        </Link>
      <nav className="mt-8 space-y-1 text-sm">
        {nav.map((n) => {
          const Icon = n.icon;
          return (
            <a key={n.label} className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${n.active ? accent : "text-muted-foreground hover:bg-surface hover:text-foreground"}`}>
              <Icon className="h-4 w-4" />
              {n.label}
            </a>
          );
        })}
      </nav>
      <div className="mt-8 rounded-2xl border border-border bg-gradient-card p-4">
        <Sparkles className="h-5 w-5 text-lime" />
        <p className="mt-2 text-sm font-semibold">Upgrade Pro</p>
        <p className="mt-1 text-xs text-muted-foreground">Acesse insights ilimitados e relatórios premium.</p>
        <button className="mt-3 w-full rounded-lg bg-lime px-3 py-2 text-xs font-semibold text-lime-foreground">Conhecer</button>
      </div>
    </aside>
  );
}

export function Topbar({ persona, name, section = "Visão geral" }: { persona: string; name: string; section?: string }) {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border/60 bg-background/80 px-6 backdrop-blur-xl lg:px-8">
      <div className="flex items-center gap-3 text-sm">
        <span className="text-muted-foreground">{persona}</span>
        <span className="text-muted-foreground">/</span>
        <span className="font-semibold">{section}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm md:flex">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Buscar evento, cidade, atleta…" className="w-64 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </div>
        <button className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-lime" />
        </button>
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface py-1 pl-1 pr-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground">{name[0]}</div>
          <span className="text-sm font-semibold">{name}</span>
        </div>
      </div>
    </header>
  );
}

function Header() {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-display text-3xl font-bold tracking-tight">Olá, Thiago 👋</h1>
        <p className="mt-1 text-sm text-muted-foreground">Seu evento "Maratona de Londrina" está com <span className="text-lime font-semibold">+32% de inscrições</span> esta semana.</p>
      </div>
      <button className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-lime-foreground shadow-lime">
        <Plus className="h-4 w-4" /> Novo evento
      </button>
    </div>
  );
}

function KpiRow() {
  const kpis = [
    { l: "Inscritos totais", v: 8241, d: "+12,4%", icon: Users, c: "primary" as const },
    { l: "Check-ins", v: 6913, d: "+8,1%", icon: Activity, c: "lime" as const },
    { l: "Receita (R$)", v: 1200, s: "K", d: "+24,7%", icon: TrendingUp, c: "orange" as const },
    { l: "NPS", v: 78, d: "+5 pts", icon: Trophy, c: "primary" as const },
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
            <p className="mt-1 font-display text-3xl font-bold"><CountUp end={k.v} suffix={k.s} /></p>
          </div>
        );
      })}
    </div>
  );
}

function ChartsRow() {
  return (
    <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
      <div className="rounded-2xl border border-border bg-gradient-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-lg font-bold">Inscrições por semana</h3>
            <p className="text-xs text-muted-foreground">Tendência últimos 3 meses</p>
          </div>
          <div className="flex gap-2 text-xs">
            <span className="rounded-full border border-lime bg-lime/15 px-3 py-1 text-lime">Inscrições</span>
            <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">Check-ins</span>
          </div>
        </div>
        <div className="mt-4"><AreaChart data={[20, 32, 28, 45, 38, 60, 55, 72, 68, 88, 82, 105]} color="lime" /></div>
      </div>
      <div className="rounded-2xl border border-border bg-gradient-card p-6">
        <h3 className="font-display text-lg font-bold">Meta do mês</h3>
        <div className="mt-4 flex items-center justify-between">
          <Donut value={72} color="lime" />
          <div className="text-right text-xs text-muted-foreground">
            <p>Meta: 12.000</p>
            <p className="text-foreground font-semibold">8.641 atual</p>
            <p className="mt-2 text-lime">+2.1k esta semana</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapAndSponsors() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
      <div className="rounded-2xl border border-border bg-gradient-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-lg font-bold">Mapa de participantes</h3>
            <p className="text-xs text-muted-foreground">Origem dos atletas inscritos</p>
          </div>
          <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">Junho 2025</span>
        </div>
        <div className="mt-4"><ParanaMap /></div>
      </div>
      <div className="rounded-2xl border border-border bg-gradient-card p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-bold">Patrocinadores</h3>
          <a className="text-xs text-lime">Ver todos →</a>
        </div>
        <ul className="mt-4 space-y-3">
          {[
            { n: "CEFE - UEL", c: "Espaço", v: "R$ 240K", s: "Confirmado" },
            { n: "Vento Sul", c: "Vestuário", v: "R$ 180K", s: "Confirmado" },
            { n: "Banco PR+", c: "Financeiro", v: "R$ 320K", s: "Negociando" },
            { n: "Move Fit", c: "Academia", v: "R$ 95K", s: "Confirmado" },
          ].map((s) => (
            <li key={s.n} className="flex items-center justify-between rounded-xl border border-border bg-surface p-3">
              <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">{s.n[0]}</span>
                <span>
                  <span className="block text-sm font-semibold">{s.n}</span>
                  <span className="text-[11px] text-muted-foreground">{s.c}</span>
                </span>
              </span>
              <span className="text-right">
                <span className="block font-mono text-sm font-semibold text-lime">{s.v}</span>
                <span className="text-[10px] text-muted-foreground">{s.s}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EventsTable() {
  const rows = [
    { n: "Maratona de Curitiba", c: "Curitiba", d: "12 Jun", i: 4200, st: "Aberto", t: "lime" },
    { n: "GP MTB Serra do Mar", c: "Morretes", d: "19 Jun", i: 1240, st: "Aberto", t: "primary" },
    { n: "Trail Run Iguaçu", c: "Foz do Iguaçu", d: "02 Jul", i: 980, st: "Em breve", t: "orange" },
    { n: "Triatlo de Londrina", c: "Londrina", d: "14 Jul", i: 1821, st: "Aberto", t: "primary" },
    { n: "Pedalada Maringá", c: "Maringá", d: "28 Jul", i: 612, st: "Rascunho", t: "lime" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-gradient-card p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-bold">Seus eventos</h3>
        <a className="text-xs text-lime">Ver tudo →</a>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-xs uppercase text-muted-foreground">
            <tr className="border-b border-border">
              <th className="py-3 text-left">Evento</th>
              <th className="py-3 text-left">Cidade</th>
              <th className="py-3 text-left">Data</th>
              <th className="py-3 text-right">Inscritos</th>
              <th className="py-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.n} className="border-b border-border/40 last:border-0">
                <td className="py-3 font-semibold">{r.n}</td>
                <td className="py-3 text-muted-foreground"><span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{r.c}</span></td>
                <td className="py-3 text-muted-foreground">{r.d}</td>
                <td className="py-3 text-right font-mono">{r.i.toLocaleString("pt-BR")}</td>
                <td className="py-3 text-right">
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${r.t === "lime" ? "bg-lime/15 text-lime" : r.t === "orange" ? "bg-orange/15 text-orange" : "bg-primary/15 text-primary"}`}>{r.st}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Insights() {
  const items = [
    { icon: Sparkles, t: "Tendência detectada", d: "Corridas noturnas crescem 47% em Maringá. Considere abrir uma 5K." },
    { icon: Target, t: "Match de patrocinador", d: "Banco PR+ tem alto fit com seu público. ROI estimado: 3,4x." },
    { icon: BarChart3, t: "Pico de inscrições", d: "Terças-feiras às 19h concentram 28% das conversões." },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <div key={it.t} className="rounded-2xl border border-border bg-gradient-card p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime/15 text-lime"><Icon className="h-4 w-4" /></div>
            <p className="mt-3 font-display text-base font-bold">{it.t}</p>
            <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
            <button className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-lime">Explorar <ArrowRight className="h-3 w-3" /></button>
          </div>
        );
      })}
    </div>
  );
}
