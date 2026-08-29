import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { useMockAuth } from "./router-7saMHySt.mjs";
import { l as Menu, L as LayoutDashboard, f as CalendarDays, U as Users, F as FileChartColumnIncreasing, p as Trophy, h as ChevronRight } from "../_libs/lucide-react.mjs";
const navItems = [
  { label: "Visao geral", icon: LayoutDashboard, to: "/organizadores" },
  { label: "Eventos", icon: CalendarDays, to: "/organizadores/eventos" },
  { label: "Patrocinadores", icon: Users, to: "/organizadores/patrocinadores" },
  { label: "Relatorios", icon: FileChartColumnIncreasing, to: "/organizadores/relatorios" },
  { label: "Ranking", icon: Trophy, to: "/organizadores/ranking" }
];
function OrganizerLayout({ active, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(OrganizerSidebar, { active }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Topbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8", children })
    ] })
  ] }) });
}
function OrganizerSidebar({ active }) {
  const { accountName, isAuthenticated } = useMockAuth();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border bg-surface/40 p-5 lg:block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/components/img/Logo.svg", alt: "Play Analytics", className: "h-15", draggable: false }) }),
    isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl border border-lime/20 bg-lime/10 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.24em] text-muted-foreground", children: "Conta ativa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-mono text-sm font-semibold", children: accountName })
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mt-8 space-y-1 text-sm", children: navItems.map(({ label, icon: Icon, to }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, activeOptions: { exact: to === "/organizadores" }, className: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground", activeProps: { className: "bg-lime/15 text-lime" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
      label
    ] }, label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-border bg-gradient-card p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-lime", children: "Visao rapida" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-semibold", children: "Sua proxima agenda esta 82% preenchida." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/organizadores/eventos", className: "mt-3 flex items-center gap-1 text-xs font-semibold text-primary", children: [
        "Abrir agenda ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
      ] })
    ] })
  ] });
}
function Topbar({
  persona = "Organizador",
  name = "CEFE - UEL",
  section = "Operação"
} = {}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "border-b border-border bg-background/90 px-4 py-3 backdrop-blur sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 lg:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5 text-lime" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold", children: "Play Analytics" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden text-sm text-muted-foreground lg:block", children: [
        persona,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-border", children: "/" }),
        section
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden text-right sm:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-muted-foreground", children: persona }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary", children: name.slice(0, 2).toUpperCase() })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mt-3 flex gap-2 overflow-x-auto lg:hidden", children: navItems.map(({ label, icon: Icon, to }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to,
        activeOptions: { exact: to === "/organizadores" },
        className: "flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-muted-foreground",
        activeProps: { className: "bg-lime/15 text-lime" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }),
          label
        ]
      },
      label
    )) })
  ] });
}
export {
  OrganizerLayout as O,
  Topbar as T
};
