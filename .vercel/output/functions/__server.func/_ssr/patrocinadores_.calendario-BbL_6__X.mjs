import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SponsorShell } from "./patrocinadores-DfBWSE1N.mjs";
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
import "./CountUp-CtDXHY_F.mjs";
import "../_libs/lucide-react.mjs";
const days = [{
  day: "Seg",
  date: 8
}, {
  day: "Ter",
  date: 9
}, {
  day: "Qua",
  date: 10
}, {
  day: "Qui",
  date: 11
}, {
  day: "Sex",
  date: 12
}, {
  day: "Sáb",
  date: 13
}, {
  day: "Dom",
  date: 14
}];
const agenda = [{
  time: "08:00",
  label: "Maratona de Londrina",
  slot: "bg-lime/15 text-lime",
  day: 9
}, {
  time: "11:00",
  label: "Trail Serra do Mar",
  slot: "bg-primary/15 text-primary",
  day: 10
}, {
  time: "18:30",
  label: "Circuito de Curitiba",
  slot: "bg-orange/15 text-orange",
  day: 12
}, {
  time: "09:00",
  label: "Pedalada de Cascavel",
  slot: "bg-lime/15 text-lime",
  day: 13
}];
function CalendarPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SponsorShell, { active: "calendar", section: "Calendário", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-gradient-card p-6 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-end justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-lime", children: "Agenda esportiva" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl", children: "Calendário de eventos" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-5 xl:grid-cols-[1.4fr_0.9fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-7", children: days.map(({
          day,
          date
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl border p-3 text-center ${date === 10 ? "border-lime bg-lime/15 text-lime" : "border-border bg-background text-muted-foreground"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.2em]", children: day }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xl font-bold", children: date })
        ] }, day)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-3", children: agenda.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl border border-border bg-background p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-12 text-sm font-semibold text-muted-foreground", children: item.time }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex-1 rounded-full px-3 py-2 text-sm font-semibold ${item.slot}`, children: item.label })
        ] }, `${item.day}-${item.label}`)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Oportunidades" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-3xl font-bold text-lime", children: "12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "eventos com alto fit em sua janela" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Melhor janela" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg font-bold", children: "Junho · Curitiba" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Maior envolvimento em corrida e ciclismo urbano." })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  CalendarPage as component
};
