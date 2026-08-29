import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { O as OrganizerLayout } from "./OrganizerLayout-0Y17bYY1.mjs";
import { p as Trophy, d as Award, b as ArrowUp, M as MapPin, i as ChevronUp, U as Users, m as Sparkles } from "../_libs/lucide-react.mjs";
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
const ranking = [{
  position: 1,
  name: "CEFE - UEL",
  city: "Londrina, PR",
  events: "24 eventos",
  points: "9.842",
  change: "+2",
  current: true
}, {
  position: 2,
  name: "Norte Parana Esportes",
  city: "Maringa, PR",
  events: "21 eventos",
  points: "9.216",
  change: "-1"
}, {
  position: 3,
  name: "Movimento Run",
  city: "Curitiba, PR",
  events: "27 eventos",
  points: "8.984",
  change: "+1"
}, {
  position: 4,
  name: "Parana Aventura",
  city: "Cascavel, PR",
  events: "16 eventos",
  points: "7.530",
  change: "+3"
}, {
  position: 5,
  name: "Equipe Vida Ativa",
  city: "Foz do Iguacu, PR",
  events: "14 eventos",
  points: "7.188",
  change: "-1"
}];
function RankingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OrganizerLayout, { active: "Ranking", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-lime", children: "Performance na rede" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl", children: "Ranking" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Veja como sua organizacao se destaca entre os eventos esportivos do Parana." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Score, { label: "Posicao atual", value: "#1", icon: Trophy }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Score, { label: "Pontuacao total", value: "9.842", icon: Award }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Score, { label: "Evolucao no mes", value: "+2", icon: ArrowUp })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-gradient-card p-5 shadow-card sm:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Organizadores em destaque" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Pontuacao calculada por alcance, consistencia e impacto." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-lime/15 px-3 py-1.5 text-xs font-semibold text-lime", children: "Temporada 2026" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: ranking.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-wrap items-center gap-3 rounded-xl border p-4 ${item.current ? "border-lime/50 bg-lime/10" : "border-border bg-background/30"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex h-9 w-9 items-center justify-center rounded-full font-display font-bold ${item.position === 1 ? "bg-lime text-lime-foreground" : item.position === 2 ? "bg-primary/20 text-primary" : item.position === 3 ? "bg-orange/20 text-orange" : "bg-surface text-muted-foreground"}`, children: item.position }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-40 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: item.name }),
            item.current ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-lime/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-lime", children: "Voce" }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
            item.city,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1", children: "·" }),
            item.events
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mr-2 text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold", children: item.points }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "pontos" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 text-xs font-semibold ${item.change.startsWith("+") ? "text-lime" : "text-orange"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-3.5 w-3.5" }),
          item.change
        ] })
      ] }, item.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-gradient-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold", children: "Sua comunidade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Participacao na rede" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 font-display text-3xl font-bold", children: "Top 4%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "entre 624 organizadores ativos" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-lime/30 bg-lime/10 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-lime" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold", children: "Proximo objetivo" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Alcance 10.000 pontos para desbloquear o selo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-2 overflow-hidden rounded-full bg-background/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-[84%] rounded-full bg-lime" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-right text-xs font-semibold text-lime", children: "9.842 / 10.000" })
      ] })
    ] })
  ] });
}
function Score({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-gradient-card p-5 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-lime/15 text-lime", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-3xl font-bold", children: value })
  ] });
}
export {
  RankingPage as component
};
