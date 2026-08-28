import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Clock3,
  MapPin,
  Plus,
  Sparkles,
  Users,
} from "lucide-react";
import { SponsorSidebar } from "@/components/site/SponsorSidebar";
import { Topbar } from "./organizadores";

export const Route = createFileRoute("/patrocinadores_/calendario")({
  head: () => ({
    meta: [
      { title: "Calendário de patrocínios — Play Analytics" },
      {
        name: "description",
        content: "Acompanhe eventos, ativações e entregas do seu calendário de patrocínios.",
      },
    ],
  }),
  component: SponsorCalendarPage,
});

type CalendarItem = {
  day: number;
  title: string;
  type: "Evento" | "Entrega" | "Reunião";
  time: string;
  location?: string;
  event?: string;
};

const calendarItems: CalendarItem[] = [
  {
    day: 3,
    title: "Reunião de kick-off",
    type: "Reunião",
    time: "10:00",
    event: "Night Run Curitiba",
  },
  {
    day: 6,
    title: "Aprovar mídia digital",
    type: "Entrega",
    time: "Até 18:00",
    event: "Triatlo de Londrina",
  },
  {
    day: 10,
    title: "Night Run Curitiba",
    type: "Evento",
    time: "19:30",
    location: "Praça Afonso Botelho",
  },
  {
    day: 14,
    title: "Relatório pós-evento",
    type: "Entrega",
    time: "Até 17:00",
    event: "Maratona de Curitiba",
  },
  {
    day: 18,
    title: "Revisão das ativações",
    type: "Reunião",
    time: "14:00",
    event: "Triatlo de Londrina",
  },
  {
    day: 22,
    title: "Circuito Sesc de Corridas",
    type: "Evento",
    time: "07:00",
    location: "Maringá, PR",
  },
  {
    day: 28,
    title: "Enviar kit de marca",
    type: "Entrega",
    time: "Até 12:00",
    event: "GP MTB Serra do Mar",
  },
];

const typeStyles = {
  Evento: { dot: "bg-lime", chip: "bg-lime/15 text-lime", border: "border-lime/40" },
  Entrega: { dot: "bg-orange", chip: "bg-orange/15 text-orange", border: "border-orange/40" },
  Reunião: { dot: "bg-primary", chip: "bg-primary/15 text-primary", border: "border-primary/40" },
};

function SponsorCalendarPage() {
  const [selectedDay, setSelectedDay] = useState(10);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const days = [...Array(5).fill(null), ...Array.from({ length: 31 }, (_, index) => index + 1)];
  const visibleItems = calendarItems.filter(
    (item) => activeFilter === "Todos" || item.type === activeFilter,
  );
  const selectedItems = visibleItems.filter((item) => item.day === selectedDay);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <SponsorSidebar active="calendar" />
        <main className="min-w-0 flex-1">
          <Topbar persona="Patrocinador" name="CEFE - UEL" section="Calendário" />
          <div className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">
            <header className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                  Agenda de patrocínios
                </p>
                <h1 className="font-display text-3xl font-bold tracking-tight">Calendário</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Organize eventos, entregas e compromissos da sua marca.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-lime-foreground shadow-lime transition-transform hover:scale-[1.02]"
              >
                <Plus className="h-4 w-4" /> Novo compromisso
              </button>
            </header>

            <CalendarSummary />

            <section className="grid gap-4 xl:grid-cols-[minmax(0,1.65fr)_360px]">
              <div className="overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card">
                <div className="flex flex-col gap-4 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Mês anterior"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <h2 className="min-w-36 text-center font-display text-xl font-bold">
                      Agosto 2026
                    </h2>
                    <button
                      type="button"
                      aria-label="Próximo mês"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex gap-2 overflow-x-auto">
                    {["Todos", "Evento", "Entrega", "Reunião"].map((filter) => (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                        className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${activeFilter === filter ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground"}`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-7 border-b border-border bg-surface/50 px-2 sm:px-4">
                  {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day) => (
                    <div
                      key={day}
                      className="py-3 text-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs"
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 p-2 sm:p-4">
                  {days.map((day, index) => {
                    if (!day)
                      return (
                        <div
                          key={`empty-${index}`}
                          className="min-h-20 border-b border-r border-border/50 sm:min-h-28"
                        />
                      );
                    const dayItems = visibleItems.filter((item) => item.day === day);
                    const isSelected = day === selectedDay;
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDay(day)}
                        className={`min-h-20 border-b border-r border-border/50 p-1.5 text-left transition-colors hover:bg-surface/70 sm:min-h-28 sm:p-2 ${isSelected ? "bg-primary/10 ring-1 ring-inset ring-primary/50" : ""}`}
                      >
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${isSelected ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                        >
                          {day}
                        </span>
                        <div className="mt-1 space-y-1">
                          {dayItems.slice(0, 2).map((item) => (
                            <div
                              key={item.title}
                              className={`overflow-hidden rounded-md border-l-2 bg-surface px-1.5 py-1 ${typeStyles[item.type].border}`}
                            >
                              <p className="truncate text-[9px] font-semibold sm:text-[10px]">
                                {item.title}
                              </p>
                              <p className="hidden text-[9px] text-muted-foreground sm:block">
                                {item.time}
                              </p>
                            </div>
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="flex flex-wrap items-center gap-4 border-t border-border px-5 py-3 text-[11px] text-muted-foreground">
                  {Object.entries(typeStyles).map(([type, styles]) => (
                    <span key={type} className="inline-flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${styles.dot}`} />
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <aside className="space-y-4">
                <DayDetails day={selectedDay} items={selectedItems} />
                <NextEvent />
              </aside>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function CalendarSummary() {
  const items = [
    {
      label: "Eventos no mês",
      value: "2",
      detail: "346 mil de alcance",
      icon: CalendarDays,
      tone: "bg-lime/15 text-lime",
    },
    {
      label: "Entregas pendentes",
      value: "3",
      detail: "1 vence esta semana",
      icon: CircleCheck,
      tone: "bg-orange/15 text-orange",
    },
    {
      label: "Reuniões",
      value: "2",
      detail: "Próxima em 3 dias",
      icon: Users,
      tone: "bg-primary/15 text-primary",
    },
    {
      label: "Agenda em dia",
      value: "86%",
      detail: "+12% vs. julho",
      icon: CalendarCheck,
      tone: "bg-lime/15 text-lime",
    },
  ];
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map(({ label, value, detail, icon: Icon, tone }) => (
        <article
          key={label}
          className="flex items-center gap-4 rounded-2xl border border-border bg-gradient-card p-4 shadow-card"
        >
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tone}`}>
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="mt-0.5 font-display text-xl font-bold">{value}</p>
            <p className="text-[10px] text-muted-foreground">{detail}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

function DayDetails({ day, items }: { day: number; items: CalendarItem[] }) {
  return (
    <section className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-lime">
            Dia selecionado
          </p>
          <h2 className="mt-1 font-display text-xl font-bold">{day} de agosto</h2>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 font-display text-lg font-bold text-primary">
          {day}
        </div>
      </div>
      <div className="mt-5 space-y-3">
        {items.length ? (
          items.map((item) => (
            <article key={item.title} className="rounded-xl border border-border bg-surface/70 p-4">
              <div className="flex items-start justify-between gap-2">
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${typeStyles[item.type].chip}`}
                >
                  {item.type}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Clock3 className="h-3 w-3" />
                  {item.time}
                </span>
              </div>
              <h3 className="mt-3 text-sm font-bold">{item.title}</h3>
              {(item.location || item.event) && (
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {item.location || item.event}
                </p>
              )}
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-lime"
              >
                Ver detalhes <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </article>
          ))
        ) : (
          <div className="rounded-xl border border-dashed border-border py-8 text-center">
            <CalendarDays className="mx-auto h-6 w-6 text-muted-foreground" />
            <p className="mt-2 text-sm font-semibold">Agenda livre</p>
            <p className="mt-1 text-xs text-muted-foreground">Nenhum compromisso para este dia.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function NextEvent() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-primary p-5 shadow-glow">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-lime/20 blur-2xl" />
      <span className="inline-flex items-center gap-1.5 rounded-full bg-background/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
        <Sparkles className="h-3 w-3" />
        Próximo evento
      </span>
      <p className="mt-4 text-xs text-primary-foreground/70">10 de agosto · 19:30</p>
      <h2 className="mt-1 font-display text-xl font-bold text-primary-foreground">
        Night Run Curitiba
      </h2>
      <p className="mt-2 flex items-center gap-1.5 text-xs text-primary-foreground/75">
        <MapPin className="h-3.5 w-3.5" />
        Praça Afonso Botelho
      </p>
      <Link
        to="/patrocinadores/eventos"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-lime-foreground"
      >
        Abrir evento <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
