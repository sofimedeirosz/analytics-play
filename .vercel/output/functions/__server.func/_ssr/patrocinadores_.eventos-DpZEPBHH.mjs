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
function EventsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SponsorShell, { active: "events", section: "Meus eventos", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-gradient-card p-6 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-end justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-lime", children: "Meus eventos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl", children: "Eventos ativos e em destaque" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: [{
      name: "Circuito do Interior",
      city: "Curitiba, PR",
      date: "12 Jun · 18:00",
      status: "Confirmado",
      fit: "92% fit"
    }, {
      name: "Maratona do Povo",
      city: "Londrina, PR",
      date: "26 Jun · 08:00",
      status: "Em revisão",
      fit: "88% fit"
    }, {
      name: "Trail Serra da Esperança",
      city: "Morretes, PR",
      date: "02 Jul · 07:30",
      status: "Aprovado",
      fit: "95% fit"
    }].map((event) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl border border-border bg-surface p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-lime/15 px-2.5 py-1 text-[11px] font-semibold text-lime", children: event.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary", children: event.fit })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-xl font-bold", children: event.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: event.city }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: event.date }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between border-t border-border pt-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "ROI esperado" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-lime", children: "3,8x" })
      ] })
    ] }, event.name)) })
  ] }) });
}
export {
  EventsPage as component
};
