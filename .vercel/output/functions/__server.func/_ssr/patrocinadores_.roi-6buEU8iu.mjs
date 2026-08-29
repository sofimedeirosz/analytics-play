import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SponsorShell } from "./patrocinadores-xC1RmaK8.mjs";
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
function RoiPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SponsorShell, { active: "roi", section: "ROI", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-gradient-card p-6 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-lime", children: "Performance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl", children: "Retorno por investimento" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-lime/15 px-3 py-1 text-sm font-semibold text-lime", children: "3,4x médio" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 xl:grid-cols-[1.5fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold", children: "ROI por evento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-5", children: [{
          name: "Circuito do Interior",
          value: 96,
          color: "bg-lime"
        }, {
          name: "Trail de Morretes",
          value: 82,
          color: "bg-primary"
        }, {
          name: "Maratona de Londrina",
          value: 76,
          color: "bg-orange"
        }, {
          name: "Volta do Povo",
          value: 68,
          color: "bg-lime"
        }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              item.value,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 overflow-hidden rounded-full bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${item.color}`, style: {
            width: `${item.value}%`
          } }) })
        ] }, item.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [{
        label: "Investimento total",
        value: "R$ 142K"
      }, {
        label: "Receita gerada",
        value: "R$ 488K"
      }, {
        label: "Conversão",
        value: "18,3%"
      }, {
        label: "CPM eficiente",
        value: "R$ 2,74"
      }].map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: metric.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-2xl font-bold", children: metric.value })
      ] }, metric.label)) })
    ] })
  ] }) });
}
export {
  RoiPage as component
};
