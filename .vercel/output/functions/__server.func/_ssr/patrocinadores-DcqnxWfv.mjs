import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { O as OrganizerLayout } from "./OrganizerLayout-0Y17bYY1.mjs";
import { e as Building2, T as Target, n as Star, S as Search, c as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
const sponsors = [{
  name: "Cooperativa Aurora",
  category: "Alimentacao e bebidas",
  city: "Cascavel, PR",
  investment: "R$ 180 mil",
  score: "96%",
  color: "bg-lime"
}, {
  name: "Muffato Supermercados",
  category: "Varejo",
  city: "Londrina, PR",
  investment: "R$ 120 mil",
  score: "91%",
  color: "bg-primary"
}, {
  name: "Unimed Parana",
  category: "Saude",
  city: "Curitiba, PR",
  investment: "R$ 95 mil",
  score: "88%",
  color: "bg-orange"
}, {
  name: "Sicredi Uniao",
  category: "Servicos financeiros",
  city: "Maringa, PR",
  investment: "R$ 75 mil",
  score: "84%",
  color: "bg-lime"
}, {
  name: "O Boticario",
  category: "Beleza e bem-estar",
  city: "Sao Jose dos Pinhais, PR",
  investment: "R$ 60 mil",
  score: "79%",
  color: "bg-primary"
}];
function SponsorsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OrganizerLayout, { active: "Patrocinadores", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-end justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-lime", children: "Parcerias estrategicas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl", children: "Patrocinadores" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Encontre marcas alinhadas ao publico e ao impacto dos seus eventos." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { icon: Building2, label: "Marcas conectadas", value: "38" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { icon: Target, label: "Oportunidades abertas", value: "14" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { icon: Star, label: "Fit medio", value: "87%" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-gradient-card p-5 shadow-card sm:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Marcas recomendadas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Ordenadas por compatibilidade com seus eventos." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex min-w-52 flex-1 items-center gap-2 rounded-xl border border-input bg-background/60 px-3 py-2 text-sm text-muted-foreground sm:max-w-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground", placeholder: "Buscar patrocinador" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-3 md:grid-cols-2", children: sponsors.map((sponsor) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex gap-4 rounded-xl border border-border bg-background/30 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${sponsor.color}/15`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-lime" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: sponsor.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
                sponsor.category,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1", children: "·" }),
                " ",
                sponsor.city
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-lime/15 px-2 py-1 text-xs font-bold text-lime", children: [
              sponsor.score,
              " fit"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Investimento estimado" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: sponsor.investment })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline", children: [
            "Ver perfil ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ] }, sponsor.name)) })
    ] })
  ] });
}
function Summary({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-gradient-card p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-3xl font-bold", children: value })
  ] });
}
export {
  SponsorsPage as component
};
