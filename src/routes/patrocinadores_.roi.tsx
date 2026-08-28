import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarRange,
  CircleDollarSign,
  Download,
  Eye,
  Info,
  MousePointerClick,
  TrendingUp,
  Users,
} from "lucide-react";
import { AreaChart, BarChart, Donut } from "@/components/site/Chart";
import { SponsorSidebar } from "@/components/site/SponsorSidebar";
import { Topbar } from "./organizadores";

export const Route = createFileRoute("/patrocinadores_/roi")({
  head: () => ({
    meta: [
      { title: "ROI de patrocínios — Play Analytics" },
      {
        name: "description",
        content: "Acompanhe o retorno e o impacto dos seus patrocínios esportivos.",
      },
    ],
  }),
  component: SponsorRoiPage,
});

const eventPerformance = [
  {
    event: "Maratona de Curitiba",
    status: "Em andamento",
    invested: "R$ 85.000",
    returnValue: "R$ 357.000",
    reach: "128 mil",
    engagement: "8,7%",
    roi: "4,2x",
    score: 92,
  },
  {
    event: "Night Run Curitiba",
    status: "Pré-evento",
    invested: "R$ 48.000",
    returnValue: "R$ 187.200",
    reach: "91 mil",
    engagement: "7,9%",
    roi: "3,9x",
    score: 86,
  },
  {
    event: "Triatlo de Londrina",
    status: "Pré-evento",
    invested: "R$ 62.000",
    returnValue: "R$ 223.200",
    reach: "74 mil",
    engagement: "6,8%",
    roi: "3,6x",
    score: 81,
  },
  {
    event: "GP MTB Serra do Mar",
    status: "Encerrado",
    invested: "R$ 39.000",
    returnValue: "R$ 120.900",
    reach: "53 mil",
    engagement: "6,2%",
    roi: "3,1x",
    score: 74,
  },
];

function SponsorRoiPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <SponsorSidebar active="roi" />
        <main className="min-w-0 flex-1">
          <Topbar persona="Patrocinador" name="CEFE - UEL" section="ROI" />
          <div className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">
            <header className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                  Inteligência de investimento
                </p>
                <h1 className="font-display text-3xl font-bold tracking-tight">
                  Retorno dos patrocínios
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Entenda o impacto financeiro e de marca de cada evento patrocinado.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-semibold"
                >
                  <CalendarRange className="h-4 w-4" /> Últimos 12 meses
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-lime-foreground shadow-lime"
                >
                  <Download className="h-4 w-4" /> Exportar relatório
                </button>
              </div>
            </header>

            <KpiCards />
            <PerformanceCharts />
            <EventTable />
            <Insight />
          </div>
        </main>
      </div>
    </div>
  );
}

function KpiCards() {
  const cards = [
    {
      label: "ROI médio",
      value: "3,9x",
      change: "+14,7%",
      detail: "vs. período anterior",
      icon: TrendingUp,
      tone: "bg-lime/15 text-lime",
    },
    {
      label: "Valor gerado",
      value: "R$ 888 mil",
      change: "+R$ 112 mil",
      detail: "retorno estimado",
      icon: CircleDollarSign,
      tone: "bg-primary/15 text-primary",
    },
    {
      label: "Alcance total",
      value: "346 mil",
      change: "+22,4%",
      detail: "pessoas impactadas",
      icon: Users,
      tone: "bg-orange/15 text-orange",
    },
    {
      label: "Mídia espontânea",
      value: "R$ 214 mil",
      change: "+31,8%",
      detail: "valor equivalente",
      icon: Eye,
      tone: "bg-lime/15 text-lime",
    },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map(({ label, value, change, detail, icon: Icon, tone }) => (
        <article
          key={label}
          className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card"
        >
          <div className="flex items-center justify-between">
            <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${tone}`}>
              <Icon className="h-4 w-4" />
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-lime">
              <ArrowUpRight className="h-3.5 w-3.5" /> {change}
            </span>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{label}</p>
          <p className="mt-1 font-display text-2xl font-bold">{value}</p>
          <p className="mt-1 text-[11px] text-muted-foreground">{detail}</p>
        </article>
      ))}
    </section>
  );
}

function PerformanceCharts() {
  return (
    <section className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
      <article className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="font-display text-lg font-bold">Evolução do retorno</h2>
            <p className="text-xs text-muted-foreground">
              Valor acumulado gerado pelos patrocínios
            </p>
          </div>
          <div className="flex gap-4 text-xs">
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-lime" />
              Retorno
            </span>
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Investimento
            </span>
          </div>
        </div>
        <div className="relative mt-7 h-56">
          <div className="absolute inset-0 opacity-35">
            <AreaChart
              data={[18, 24, 31, 39, 51, 64, 78, 96, 113, 137, 162, 195]}
              color="primary"
            />
          </div>
          <div className="absolute inset-0">
            <AreaChart
              data={[32, 46, 71, 104, 159, 224, 318, 439, 562, 671, 774, 888]}
              color="lime"
            />
          </div>
        </div>
        <div className="mt-2 grid grid-cols-6 text-center text-[10px] text-muted-foreground sm:grid-cols-12">
          {["Set", "Out", "Nov", "Dez", "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago"].map(
            (month) => (
              <span key={month} className="even:hidden sm:inline">
                {month}
              </span>
            ),
          )}
        </div>
      </article>

      <article className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card sm:p-6">
        <div>
          <h2 className="font-display text-lg font-bold">Composição do retorno</h2>
          <p className="text-xs text-muted-foreground">Participação por fonte de valor</p>
        </div>
        <div className="mt-6 flex items-center gap-6">
          <Donut value={78} color="lime" />
          <div>
            <p className="font-display text-2xl font-bold">R$ 888 mil</p>
            <p className="text-xs text-muted-foreground">valor total gerado</p>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {[
            ["Exposição de marca", "48%", "bg-lime"],
            ["Mídia espontânea", "24%", "bg-primary"],
            ["Conversões", "18%", "bg-orange"],
            ["Relacionamento", "10%", "bg-muted-foreground"],
          ].map(([label, value, color]) => (
            <div key={label} className="flex items-center text-xs">
              <span className={`mr-2 h-2.5 w-2.5 rounded-sm ${color}`} />
              <span className="flex-1 text-muted-foreground">{label}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

function EventTable() {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-5 sm:p-6">
        <div>
          <h2 className="font-display text-lg font-bold">Desempenho por evento</h2>
          <p className="text-xs text-muted-foreground">Comparativo dos investimentos do período</p>
        </div>
        <button type="button" className="text-xs font-semibold text-primary hover:text-lime">
          Ver relatório completo →
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] text-left text-sm">
          <thead className="bg-surface/80 text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-6 py-3 font-medium">Evento</th>
              <th className="px-4 py-3 font-medium">Investimento</th>
              <th className="px-4 py-3 font-medium">Retorno</th>
              <th className="px-4 py-3 font-medium">Alcance</th>
              <th className="px-4 py-3 font-medium">Engajamento</th>
              <th className="px-4 py-3 font-medium">ROI</th>
              <th className="px-6 py-3 font-medium">Performance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {eventPerformance.map((event) => (
              <tr key={event.event} className="transition-colors hover:bg-surface/50">
                <td className="px-6 py-4">
                  <p className="font-semibold">{event.event}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{event.status}</p>
                </td>
                <td className="px-4 py-4 text-muted-foreground">{event.invested}</td>
                <td className="px-4 py-4 font-semibold">{event.returnValue}</td>
                <td className="px-4 py-4 text-muted-foreground">{event.reach}</td>
                <td className="px-4 py-4 text-muted-foreground">{event.engagement}</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-lime/15 px-2.5 py-1 font-bold text-lime">
                    {event.roi}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-surface">
                      <div
                        className="h-full rounded-full bg-gradient-lime"
                        style={{ width: `${event.score}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold">{event.score}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Insight() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-lime/30 bg-lime/10 p-5 sm:p-6">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-lime/15 blur-3xl" />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime text-lime-foreground shadow-lime">
          <BadgeCheck className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="font-display text-lg font-bold">Insight da Play Analytics</h2>
            <Info className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Eventos de corrida em Curitiba geram{" "}
            <span className="font-semibold text-foreground">27% mais retorno</span> para sua marca.
            A combinação entre alcance digital e ativações presenciais é o principal fator.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          <MousePointerClick className="h-4 w-4" />
          Explorar oportunidades
        </button>
      </div>
    </section>
  );
}
