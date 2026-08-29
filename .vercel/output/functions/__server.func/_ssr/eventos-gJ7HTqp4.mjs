import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { O as OrganizerLayout } from "./OrganizerLayout-0Y17bYY1.mjs";
import { S as Search, f as CalendarDays, U as Users, h as ChevronRight } from "../_libs/lucide-react.mjs";
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
const events = [{
  name: "Circuito das Araucarias",
  type: "Corrida de rua",
  city: "Londrina, PR",
  date: "18 mai 2026",
  people: "842",
  status: "Inscricoes abertas",
  tone: "lime"
}, {
  name: "Maratona de Inverno",
  type: "Maratona",
  city: "Curitiba, PR",
  date: "02 jun 2026",
  people: "1.240",
  status: "Em destaque",
  tone: "primary"
}, {
  name: "Desafio Costa Oeste",
  type: "Ciclismo",
  city: "Foz do Iguacu, PR",
  date: "15 jun 2026",
  people: "516",
  status: "Inscricoes abertas",
  tone: "lime"
}, {
  name: "Travessia Ilha do Mel",
  type: "Natacao",
  city: "Pontal do Parana, PR",
  date: "29 jun 2026",
  people: "280",
  status: "Planejamento",
  tone: "orange"
}, {
  name: "Festival de Volei de Areia",
  type: "Volei",
  city: "Maringa, PR",
  date: "12 jul 2026",
  people: "96",
  status: "Planejamento",
  tone: "orange"
}];
function EventsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OrganizerLayout, { active: "Eventos", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-end justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-lime", children: "Gestao de eventos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl", children: "Eventos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Organize sua agenda, acompanhe inscricoes e ative novas oportunidades." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Total de eventos", value: "24" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Eventos ativos", value: "12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Inscricoes no mes", value: "2.698" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-gradient-card p-5 shadow-card sm:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Sua agenda" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "5 eventos encontrados" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex min-w-52 flex-1 items-center gap-2 rounded-xl border border-input bg-background/60 px-3 py-2 text-sm text-muted-foreground sm:max-w-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground", placeholder: "Buscar evento" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-3", children: events.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 rounded-xl border border-border bg-background/30 p-4 transition-colors hover:border-primary/50 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${event.tone === "lime" ? "bg-lime/15 text-lime" : event.tone === "orange" ? "bg-orange/15 text-orange" : "bg-primary/15 text-primary"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-semibold", children: event.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
            event.type,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1", children: "·" }),
            " ",
            event.city
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:block sm:w-32", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Data" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: event.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:block sm:w-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Participantes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-1 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5 text-lime" }),
            event.people
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${event.tone === "orange" ? "bg-orange/15 text-orange" : event.tone === "primary" ? "bg-primary/15 text-primary" : "bg-lime/15 text-lime"}`, children: event.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/organizadores/eventos", className: "text-muted-foreground hover:text-foreground", "aria-label": `Abrir ${event.name}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" }) })
      ] }, event.name)) })
    ] })
  ] });
}
function Summary({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-gradient-card p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-3xl font-bold", children: value })
  ] });
}
export {
  EventsPage as component
};
