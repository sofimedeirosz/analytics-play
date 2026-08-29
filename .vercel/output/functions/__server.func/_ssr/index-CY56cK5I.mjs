import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { O as OrganizerLayout } from "./OrganizerLayout-C4U6MqcP.mjs";
import { T } from "./OrganizerLayout-C4U6MqcP.mjs";
import { P as Plus, f as CalendarDays, U as Users, p as Trophy, M as MapPin, c as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
import "./router-CZtRuKsu.mjs";
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
const upcomingEvents = [{
  name: "Circuito das Araucarias",
  city: "Londrina, PR",
  date: "18 mai",
  entries: "842 inscritos",
  color: "bg-lime"
}, {
  name: "Maratona de Inverno",
  city: "Curitiba, PR",
  date: "02 jun",
  entries: "1.240 inscritos",
  color: "bg-primary"
}, {
  name: "Desafio Costa Oeste",
  city: "Foz do Iguacu, PR",
  date: "15 jun",
  entries: "516 inscritos",
  color: "bg-orange"
}];
function OrganizerOverview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OrganizerLayout, { active: "Visao geral", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-lime", children: "Central do organizador" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl", children: "Bom dia, equipe CEFE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Acompanhe sua operacao e mantenha cada evento em movimento." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/organizadores/eventos", className: "inline-flex items-center gap-2 rounded-xl bg-lime px-4 py-2.5 text-sm font-bold text-lime-foreground shadow-lime transition-transform hover:-translate-y-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Meus evento"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: CalendarDays, label: "Eventos ativos", value: "12", detail: "+3 este mes", tint: "lime" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: Users, label: "Participantes", value: "8.492", detail: "+18,4% vs. anterior", tint: "primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: Trophy, label: "Inscricoes confirmadas", value: "6.278", detail: "74% da capacidade", tint: "orange" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: MapPin, label: "Cidades alcancadas", value: "28", detail: "Em 4 regioes", tint: "primary" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-gradient-card p-5 shadow-card sm:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Proximos eventos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "A agenda dos seus eventos em destaque." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/organizadores/eventos", className: "inline-flex items-center gap-1 text-sm font-semibold text-lime hover:underline", children: [
          "Ver todos ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 divide-y divide-border", children: upcomingEvents.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 py-4 first:pt-0 last:pb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-10 w-1.5 rounded-full ${event.color}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-44 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: event.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: event.city })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: event.entries }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-14 text-right font-mono text-sm font-semibold", children: event.date })
      ] }, event.name)) })
    ] })
  ] });
}
function Metric({
  icon: Icon,
  label,
  value,
  detail,
  tint
}) {
  const styles = {
    lime: "bg-lime/15 text-lime",
    primary: "bg-primary/15 text-primary",
    orange: "bg-orange/15 text-orange"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-gradient-card p-5 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-9 w-9 items-center justify-center rounded-xl ${styles[tint]}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-3xl font-bold", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-semibold text-lime", children: detail })
  ] });
}
export {
  T as Topbar,
  OrganizerOverview as component
};
