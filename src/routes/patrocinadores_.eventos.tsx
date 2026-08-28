import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Eye,
  MapPin,
  MoreHorizontal,
  Plus,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";
import { SponsorSidebar } from "@/components/site/SponsorSidebar";
import { Topbar } from "./organizadores";

export const Route = createFileRoute("/patrocinadores_/eventos")({
  head: () => ({
    meta: [
      { title: "Meus eventos — Play Analytics" },
      {
        name: "description",
        content: "Acompanhe eventos patrocinados, entregas e resultados da sua marca.",
      },
    ],
  }),
  component: SponsorEventsPage,
});

const events = [
  {
    name: "Maratona de Curitiba",
    category: "Corrida",
    location: "Curitiba, PR",
    date: "12 Jun 2026",
    status: "Em andamento",
    statusStyle: "bg-lime/15 text-lime",
    investment: "R$ 85.000",
    reach: "128 mil",
    roi: "4,2x",
    progress: 72,
    next: "Aprovar peças de mídia",
    nextDate: "Hoje, 17h",
  },
  {
    name: "Triatlo de Londrina",
    category: "Triatlo",
    location: "Londrina, PR",
    date: "14 Jul 2026",
    status: "Pré-evento",
    statusStyle: "bg-primary/15 text-primary",
    investment: "R$ 62.000",
    reach: "74 mil",
    roi: "3,6x",
    progress: 48,
    next: "Enviar material da marca",
    nextDate: "30 Mai",
  },
  {
    name: "Night Run Curitiba",
    category: "Corrida",
    location: "Curitiba, PR",
    date: "10 Ago 2026",
    status: "Contrato assinado",
    statusStyle: "bg-orange/15 text-orange",
    investment: "R$ 48.000",
    reach: "91 mil",
    roi: "3,9x",
    progress: 25,
    next: "Reunião de kick-off",
    nextDate: "03 Jun",
  },
];

function SponsorEventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <SponsorSidebar active="events" />
        <main className="min-w-0 flex-1">
          <Topbar persona="Patrocinador" name="CEFE - UEL" section="Meus eventos" />
          <div className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">
            <header className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                  Portfólio de patrocínios
                </p>
                <h1 className="font-display text-3xl font-bold tracking-tight">Meus eventos</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Acompanhe ativações, entregas e resultados em um só lugar.
                </p>
              </div>
              <Link
                to="/patrocinadores"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-lime-foreground shadow-lime transition-transform hover:scale-[1.02]"
              >
                <Plus className="h-4 w-4" /> Encontrar novo evento
              </Link>
            </header>

            <Kpis />

            <section className="rounded-2xl border border-border bg-surface/70 p-3 sm:p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
                  {["Todos (7)", "Ativos (3)", "Próximos (2)", "Encerrados (2)"].map(
                    (tab, index) => (
                      <button
                        key={tab}
                        type="button"
                        className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors ${index === 0 ? "bg-lime text-lime-foreground" : "border border-border text-muted-foreground hover:text-foreground"}`}
                      >
                        {tab}
                      </button>
                    ),
                  )}
                </div>
                <label className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm lg:w-72">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    aria-label="Buscar meus eventos"
                    placeholder="Buscar meus eventos…"
                    className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                  />
                </label>
              </div>
            </section>

            <div className="grid gap-4 xl:grid-cols-3">
              {events.map((event) => (
                <EventCard key={event.name} event={event} />
              ))}
            </div>

            <section className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
              <UpcomingActions />
              <PortfolioSummary />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function Kpis() {
  const items = [
    {
      label: "Investimento ativo",
      value: "R$ 195 mil",
      detail: "em 3 eventos",
      icon: CircleDollarSign,
      color: "text-primary bg-primary/15",
    },
    {
      label: "Alcance contratado",
      value: "293 mil",
      detail: "+18% vs. previsto",
      icon: Users,
      color: "text-lime bg-lime/15",
    },
    {
      label: "ROI médio estimado",
      value: "3,9x",
      detail: "+0,5x no trimestre",
      icon: TrendingUp,
      color: "text-orange bg-orange/15",
    },
    {
      label: "Entregas concluídas",
      value: "28 de 36",
      detail: "78% do total",
      icon: CheckCircle2,
      color: "text-lime bg-lime/15",
    },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map(({ label, value, detail, icon: Icon, color }) => (
        <article
          key={label}
          className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card"
        >
          <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${color}`}>
            <Icon className="h-4 w-4" />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{label}</p>
          <p className="mt-1 font-display text-2xl font-bold">{value}</p>
          <p className="mt-1 text-xs text-lime">{detail}</p>
        </article>
      ))}
    </div>
  );
}

function EventCard({ event }: { event: (typeof events)[number] }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-gradient-card p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-lime/40">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span
            className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${event.statusStyle}`}
          >
            {event.status}
          </span>
          <h2 className="mt-3 font-display text-xl font-bold">{event.name}</h2>
          <p className="mt-1 text-xs text-muted-foreground">{event.category}</p>
        </div>
        <button
          type="button"
          aria-label={`Mais opções para ${event.name}`}
          className="rounded-full p-2 text-muted-foreground hover:bg-surface hover:text-foreground"
        >
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-y border-border py-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5" />
          {event.date}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          {event.location}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["Investimento", event.investment],
          ["Alcance", event.reach],
          ["ROI", event.roi],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl bg-surface/80 p-3">
            <p className="text-[10px] text-muted-foreground">{label}</p>
            <p className={`mt-1 text-sm font-bold ${label === "ROI" ? "text-lime" : ""}`}>
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Entregas do patrocínio</span>
          <span className="font-semibold">{event.progress}%</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface">
          <div
            className="h-full rounded-full bg-gradient-lime"
            style={{ width: `${event.progress}%` }}
          />
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-border bg-background/40 p-3">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Próxima ação</p>
          <p className="truncate text-xs font-semibold">{event.next}</p>
        </div>
        <span className="whitespace-nowrap text-[11px] text-orange">{event.nextDate}</span>
      </div>
      <button
        type="button"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
      >
        Ver detalhes <ArrowRight className="h-4 w-4" />
      </button>
    </article>
  );
}

function UpcomingActions() {
  const actions = [
    {
      title: "Aprovar peças de mídia",
      event: "Maratona de Curitiba",
      date: "Hoje, 17h",
      urgent: true,
    },
    {
      title: "Enviar manual da marca",
      event: "Triatlo de Londrina",
      date: "30 Mai",
      urgent: false,
    },
    { title: "Reunião de kick-off", event: "Night Run Curitiba", date: "03 Jun", urgent: false },
  ];
  return (
    <div className="rounded-2xl border border-border bg-gradient-card p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-lg font-bold">Próximas ações</h2>
          <p className="text-xs text-muted-foreground">
            Pendências para manter suas ativações em dia
          </p>
        </div>
        <Clock3 className="h-5 w-5 text-orange" />
      </div>
      <div className="mt-4 divide-y divide-border">
        {actions.map((action) => (
          <div key={action.title} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <button
              type="button"
              aria-label={`Concluir ${action.title}`}
              className="h-5 w-5 shrink-0 rounded-full border-2 border-muted-foreground transition-colors hover:border-lime"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{action.title}</p>
              <p className="text-xs text-muted-foreground">{action.event}</p>
            </div>
            <span
              className={`whitespace-nowrap text-xs ${action.urgent ? "font-semibold text-orange" : "text-muted-foreground"}`}
            >
              {action.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioSummary() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-primary p-6 shadow-glow">
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-lime/20 blur-2xl" />
      <Eye className="h-6 w-6 text-primary-foreground" />
      <h2 className="mt-4 font-display text-xl font-bold text-primary-foreground">
        Sua marca está ganhando espaço
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
        O alcance acumulado dos eventos ativos já atingiu 68% da meta trimestral.
      </p>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-background/20">
        <div className="h-full w-[68%] rounded-full bg-lime" />
      </div>
      <div className="mt-2 flex justify-between text-xs text-primary-foreground/75">
        <span>199 mil alcançados</span>
        <span>Meta: 293 mil</span>
      </div>
    </div>
  );
}
