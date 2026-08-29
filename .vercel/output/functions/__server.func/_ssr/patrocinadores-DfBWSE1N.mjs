import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as CountUp, B as BarChart } from "./CountUp-CtDXHY_F.mjs";
import { U as Users, C as Calendar, o as TrendingUp, g as ChartColumn, S as Search, m as Sparkles, M as MapPin, j as Compass, H as Heart, l as Menu } from "../_libs/lucide-react.mjs";
const nav = [
  { icon: Compass, label: "Descobrir", to: "/patrocinadores", key: "discover" },
  { icon: Heart, label: "Meus eventos", to: "/patrocinadores/eventos", key: "events" },
  { icon: ChartColumn, label: "ROI", to: "/patrocinadores/roi", key: "roi" },
  { icon: Calendar, label: "Calendário", to: "/patrocinadores/calendario", key: "calendar" }
];
function SponsorSidebar({ active }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border bg-surface/40 p-5 lg:block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "/src/components/img/Logo.svg",
        alt: "Play Analytics",
        className: "h-15",
        draggable: false
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mt-8 space-y-1 text-sm", children: nav.map(({ icon: Icon, label, to, key }) => {
      const isActive = key === active;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to,
          className: `flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${isActive ? "bg-lime/15 text-lime" : "text-muted-foreground hover:bg-surface hover:text-foreground"}`,
          activeProps: { className: "bg-lime/15 text-lime" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
            label
          ]
        },
        label
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-border bg-gradient-card p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-lime", children: "Brand match" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-semibold", children: "3 novos eventos compatíveis" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/patrocinadores",
          className: "mt-3 block w-full rounded-lg bg-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground",
          children: "Ver sugestões"
        }
      )
    ] })
  ] });
}
function SponsorShell({
  active,
  section,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SponsorSidebar, { active }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SponsorTopbar, { section }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8", children })
    ] })
  ] }) });
}
function SponsorTopbar({ section }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "border-b border-border bg-background/90 px-4 py-3 backdrop-blur sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 lg:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5 text-lime" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold", children: "Play Analytics" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden text-sm text-muted-foreground lg:block font-bold", children: [
        "Patrocinador",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-border", children: "/" }),
        section
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden text-right sm:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-muted-foreground font-bold", children: "Patrocinador" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "CEFE - UEL" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary", children: "CE" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden", children: nav.map(({ icon: Icon, label, to, key }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to,
        className: "flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-muted-foreground",
        activeProps: { className: "bg-lime/15 text-lime" },
        activeOptions: { exact: key === "discover" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }),
          label
        ]
      },
      label
    )) })
  ] });
}
function SponsorPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SponsorShell, { active: "discover", section: "Descobrir", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KpiRow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RoiChart, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Filters, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventsGrid, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Suggestions, {})
  ] });
}
function HeaderBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-3xl text-balance text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl", children: "Descubra eventos para a CEFE - UEL" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
      "87 eventos no Paraná esta temporada — ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-lime", children: "12 com alto fit" }),
      " com sua marca."
    ] })
  ] }) });
}
function KpiRow() {
  const kpis = [
    { l: "Alcance estimado", v: 482, s: "K", d: "+18%", c: "primary", icon: Users },
    { l: "Eventos ativos", v: 7, d: "+2", c: "lime", icon: Calendar },
    { l: "ROI médio", v: 34, s: "x", d: "+0,4x", c: "orange", icon: TrendingUp },
    { l: "Impressões", v: 2100, s: "K", d: "+24%", c: "primary", icon: ChartColumn }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: kpis.map((k) => {
    const Icon = k.icon;
    const bg = k.c === "lime" ? "bg-lime/15 text-lime" : k.c === "orange" ? "bg-orange/15 text-orange" : "bg-primary/15 text-primary";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-gradient-card p-5 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-9 w-9 items-center justify-center rounded-xl ${bg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-semibold ${k.c === "lime" ? "text-lime" : k.c === "orange" ? "text-orange" : "text-primary"}`, children: k.d })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: k.l }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-3xl font-bold", children: k.l === "ROI médio" ? "3,4x" : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { end: k.v, suffix: k.s }) }) })
    ] }, k.l);
  }) });
}
function RoiChart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-[2fr_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-gradient-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: "ROI por evento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Retorno acumulado por investimento" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-lime/15 px-3 py-1 text-xs font-semibold text-lime", children: "3,4x médio" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart, { data: [
        { label: "Maratona", value: 92 },
        { label: "MTB SM", value: 68 },
        { label: "Trail FI", value: 54 },
        { label: "Triatlo", value: 78 },
        { label: "Pedal MG", value: 41 },
        { label: "Run CWB", value: 86 }
      ], color: "primary" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-gradient-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: "Alcance por região" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3 text-sm", children: [
        { r: "RMC", v: 42 },
        { r: "Norte PR", v: 28 },
        { r: "Oeste", v: 18 },
        { r: "Centro-Sul", v: 12 }
      ].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: x.r }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
            x.v,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-2 overflow-hidden rounded-full bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-lime", style: { width: `${x.v * 2}%` } }) })
      ] }, x.r)) })
    ] })
  ] });
}
function Filters() {
  const chips = ["Todas modalidades", "Corrida", "Ciclismo", "Trail", "Triatlo", "Curitiba", "Norte PR", "Público 25-44"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          placeholder: "Buscar evento, cidade ou modalidade…",
          className: "w-full min-w-0 bg-transparent outline-none placeholder:text-muted-foreground"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: chips.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full border px-3 py-1 text-xs ${i === 0 ? "border-lime bg-lime/15 text-lime" : "border-border text-muted-foreground"}`, children: c }, c)) })
  ] });
}
function EventsGrid() {
  const events = [
    { n: "Maratona de Curitiba", c: "Curitiba", d: "12 Jun", a: 12e3, f: 94, t: "Corrida", roi: "4.2x" },
    { n: "GP MTB Serra do Mar", c: "Morretes", d: "19 Jun", a: 3800, f: 81, t: "Ciclismo", roi: "3.1x" },
    { n: "Trail Run Iguaçu", c: "Foz do Iguaçu", d: "02 Jul", a: 5400, f: 76, t: "Trail", roi: "2.8x" },
    { n: "Triatlo de Londrina", c: "Londrina", d: "14 Jul", a: 4200, f: 88, t: "Triatlo", roi: "3.6x" },
    { n: "Pedalada Maringá", c: "Maringá", d: "28 Jul", a: 2900, f: 72, t: "Ciclismo", roi: "2.4x" },
    { n: "Night Run Curitiba", c: "Curitiba", d: "10 Ago", a: 6800, f: 91, t: "Corrida", roi: "3.9x" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl border border-border bg-gradient-card p-5 shadow-card transition-transform hover:-translate-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary", children: e.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-lime/15 px-2.5 py-1 text-[11px] font-semibold text-lime", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
        " ",
        e.f,
        "% fit"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 font-display text-lg font-bold", children: e.n }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
      " ",
      e.c,
      " · ",
      e.d
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-surface p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Audiência" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-lg font-bold", children: [
          (e.a / 1e3).toFixed(1),
          "K"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-surface p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "ROI estimado" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold text-lime", children: e.roi })
      ] })
    ] })
  ] }, e.n)) });
}
function Suggestions() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-border bg-gradient-primary p-8 shadow-glow md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid items-center gap-6 md:grid-cols-[1fr_auto]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-background/20 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
      " Inteligência da plataforma"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-balance text-2xl font-bold text-primary-foreground md:text-3xl", children: "3 eventos com 90%+ de match esperam por você." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-primary-foreground/80", children: "Baseado no seu público-alvo, território e tickets anteriores." })
  ] }) }) });
}
export {
  SponsorPage as S,
  SponsorShell as a
};
