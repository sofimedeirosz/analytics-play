import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { O as OrganizerLayout } from "./OrganizerLayout-0Y17bYY1.mjs";
import { E as Eye, U as Users, g as ChartColumn, f as CalendarDays, F as FileChartColumnIncreasing, c as ArrowUpRight, A as ArrowDownRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./router-7saMHySt.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-alert-dialog.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
const months = [{
  month: "Jan",
  value: 58
}, {
  month: "Fev",
  value: 64
}, {
  month: "Mar",
  value: 72
}, {
  month: "Abr",
  value: 68
}, {
  month: "Mai",
  value: 86
}, {
  month: "Jun",
  value: 94
}];
const reports = [{
  title: "Impacto do Circuito das Araucarias",
  type: "Performance do evento",
  date: "18 mai 2026",
  views: "1.842"
}, {
  title: "Resumo mensal de inscricoes",
  type: "Operacao",
  date: "30 abr 2026",
  views: "928"
}, {
  title: "Mapa de alcance regional",
  type: "Audiencia",
  date: "22 abr 2026",
  views: "614"
}];
function ReportsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OrganizerLayout, { active: "Relatorios", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-end justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-lime", children: "Inteligencia operacional" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl", children: "Relatorios" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Transforme os resultados dos seus eventos em decisoes mais inteligentes." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: Eye, label: "Alcance total", value: "482,6 mil", change: "+18,2%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: Users, label: "Participantes", value: "8.492", change: "+12,8%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: ChartColumn, label: "Taxa de ocupacao", value: "74%", change: "+6,4%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: CalendarDays, label: "Eventos realizados", value: "18", change: "+4" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-[1.6fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-gradient-card p-5 shadow-card sm:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Alcance por mes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Pessoas impactadas pelos seus eventos" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-lime/15 px-2.5 py-1 text-xs font-semibold text-lime", children: "Ultimos 6 meses" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex h-48 items-end gap-3 sm:gap-5", children: months.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-1 flex-col justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-x-0 bottom-0 rounded-t-lg ${index === months.length - 1 ? "bg-lime" : "bg-primary/60"}`, style: {
            height: `${item.value}%`
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center text-xs text-muted-foreground", children: item.month })
        ] }, item.month)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-gradient-card p-5 shadow-card sm:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Resumo de impacto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Comparativo com o periodo anterior" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Impact, { label: "Engajamento", value: "82%", change: "+11,4%", up: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Impact, { label: "Retencao", value: "68%", change: "+4,2%", up: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Impact, { label: "Custo por participante", value: "R$ 14,80", change: "-8,1%", up: false })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-gradient-card p-5 shadow-card sm:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Relatorios recentes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Analises prontas para sua equipe." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-2", children: reports.map((report) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 rounded-xl border border-border bg-background/30 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileChartColumnIncreasing, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-48 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: report.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
            report.type,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1", children: "·" }),
            " ",
            report.date
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          report.views,
          " visualizacoes"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-lg p-2 text-muted-foreground hover:bg-surface hover:text-foreground", "aria-label": `Abrir ${report.title}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" }) })
      ] }, report.title)) })
    ] })
  ] });
}
function Metric({
  icon: Icon,
  label,
  value,
  change
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-gradient-card p-5 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-2xl font-bold sm:text-3xl", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs font-semibold text-lime", children: [
      change,
      " no periodo"
    ] })
  ] });
}
function Impact({
  label,
  value,
  change,
  up
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xl font-bold", children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 text-xs font-semibold ${up ? "text-lime" : "text-orange"}`, children: [
      up ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { className: "h-3.5 w-3.5" }),
      change
    ] })
  ] });
}
export {
  ReportsPage as component
};
