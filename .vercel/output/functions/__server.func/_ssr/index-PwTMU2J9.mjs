import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { useMockAuth } from "./router-CZtRuKsu.mjs";
import { C as CountUp, A as AreaChart, B as BarChart, D as Donut } from "./CountUp-CtDXHY_F.mjs";
import { e as Building2, L as LayoutDashboard, a as ArrowRight, U as Users, M as MapPin, p as Trophy, Z as Zap, g as ChartColumn, T as Target, m as Sparkles, C as Calendar$1, k as Megaphone } from "../_libs/lucide-react.mjs";
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
function Nav() {
  const { accountName, isAuthenticated } = useMockAuth();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "/src/components/img/Logo.svg",
        alt: "Play Analytics",
        className: "h-15",
        draggable: false
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "transition-colors hover:text-foreground", children: "Plataforma" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/organizadores",
          className: "transition-colors hover:text-foreground",
          children: "Organizadores"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/patrocinadores",
          className: "transition-colors hover:text-foreground",
          children: "Patrocinadores"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#beneficios",
          className: "transition-colors hover:text-foreground",
          children: "Beneficios"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-2 rounded-full border border-lime/20 bg-lime/10 px-3 py-1.5 text-sm sm:flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-lime/15 text-lime", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: accountName })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/organizadores",
            className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground transition-transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "h-4 w-4" }),
              "Abrir painel"
            ]
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/organizadores",
          className: "hidden text-sm text-muted-foreground hover:text-foreground sm:block",
          children: "Entrar"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://forms.gle/m9ouyREaTTtG4Qzt9",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "rounded-full bg-lime px-4 py-2 text-sm font-semibold text-lime-foreground shadow-lime transition-transform hover:scale-105",
          children: "Responder pesquisa"
        }
      )
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/40 bg-background py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/components/img/Logo.svg", alt: "Play Analytics", className: "h-15", draggable: false }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Inteligência para o turismo esportivo regional do Paraná." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: "Produto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Organizadores" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Patrocinadores" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Cidades" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "API" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: "Empresa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sobre" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Imprensa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Carreiras" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Contato" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: "Londrina · Paraná" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Play Analytics. Todos os direitos reservados."
      ] })
    ] })
  ] }) });
}
const cities = [
  { name: "Curitiba", x: 78, y: 62, events: 24, big: true },
  { name: "Londrina", x: 38, y: 28, events: 12 },
  { name: "Maringá", x: 30, y: 36, events: 9 },
  { name: "Cascavel", x: 18, y: 52, events: 7 },
  { name: "Foz do Iguaçu", x: 8, y: 60, events: 11 },
  { name: "Ponta Grossa", x: 62, y: 60, events: 8 },
  { name: "Guarapuava", x: 44, y: 60, events: 5 },
  { name: "Paranaguá", x: 88, y: 70, events: 6 },
  { name: "Pato Branco", x: 22, y: 70, events: 4 },
  { name: "Apucarana", x: 42, y: 36, events: 5 }
];
function ParanaMap() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[5/3] w-full overflow-hidden rounded-3xl border border-border bg-gradient-card p-6 shadow-elevated", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 60", className: "absolute inset-0 h-full w-full p-6", preserveAspectRatio: "none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "prFill", x1: "0", y1: "0", x2: "1", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.62 0.20 255)", stopOpacity: "0.18" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.88 0.22 130)", stopOpacity: "0.10" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "prStroke", x1: "0", y1: "0", x2: "1", y2: "0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.62 0.20 255)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.88 0.22 130)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M5,55 L8,48 L14,42 L12,34 L18,26 L26,20 L36,16 L48,14 L58,15 L66,18 L74,16 L82,20 L88,28 L92,36 L94,46 L92,54 L86,58 L78,57 L70,55 L62,57 L54,56 L46,58 L38,57 L30,58 L22,57 L14,58 Z",
          fill: "url(#prFill)",
          stroke: "url(#prStroke)",
          strokeWidth: "0.4"
        }
      )
    ] }),
    cities.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -translate-x-1/2 -translate-y-1/2",
        style: { left: `${c.x}%`, top: `${c.y}%` },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute inset-0 rounded-full ${c.big ? "bg-lime" : "bg-primary"} animate-pulse-ring`, style: { width: c.big ? 16 : 10, height: c.big ? 16 : 10 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative rounded-full ${c.big ? "bg-lime shadow-lime" : "bg-primary shadow-glow"}`, style: { width: c.big ? 16 : 10, height: c.big ? 16 : 10 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-background/80 px-2 py-0.5 text-[10px] font-medium backdrop-blur", children: [
            c.name,
            " · ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: c.events })
          ] })
        ] })
      },
      c.name
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 right-4 flex items-center gap-3 rounded-full border border-border bg-background/70 px-4 py-2 text-xs backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-lime" }),
        "Hub principal"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-primary" }),
        "Cidades ativas"
      ] })
    ] })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LogosBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatsStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Benefits, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MapSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Personas, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-hero", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 noise opacity-[0.04]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-lime" }),
          "Plataforma oficial · Turismo Esportivo PR"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl", children: [
          "Inteligência de dados para o ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-lime", children: "esporte" }),
          " que move o ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Paraná" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Conectamos organizadores de eventos, patrocinadores, academias e cidades do interior com métricas em tempo real, impacto turístico e ROI mensurável." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/organizadores", className: "group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-lime-foreground shadow-lime transition-transform hover:scale-105", children: [
            "Sou Organizador",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/patrocinadores", className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-surface", children: "Sou Patrocinador" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex gap-8 border-t border-border/60 pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Eventos rastreados", value: 1248, suffix: "+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Cidades conectadas", value: 87 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Impacto gerado", value: 42, suffix: "M", prefix: "R$" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl border border-border bg-gradient-card p-5 shadow-elevated backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold tracking-tight text-gradient-lime sm:text-3xl md:text-4xl lg:text-5xl", children: "Pesquisa Plataforma Play Analytics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl text-base text-muted-foreground md:text-lg", children: "Ajude-nos a personalizar sua experiência respondendo a pesquisa abaixo:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://forms.gle/m9ouyREaTTtG4Qzt9", target: "_blank", rel: "noopener noreferrer", className: "rounded-full bg-lime px-6 py-4 text-sm font-semibold text-lime-foreground shadow-lime transition-transform hover:scale-105", children: "Responder pesquisa" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MiniCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }), label: "Atletas", value: "12.4K", tint: "primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MiniCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }), label: "Cidades", value: "87", tint: "lime" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MiniCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }), label: "Eventos", value: "148", tint: "orange" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-float absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-surface-elevated p-4 shadow-elevated md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Insight inteligente" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Maringá +47% em corridas" })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
function Stat({
  label,
  value,
  prefix,
  suffix
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl font-bold", children: [
      prefix,
      /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { end: value, suffix })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label })
  ] });
}
function MiniCard({
  icon,
  label,
  value,
  tint
}) {
  const bg = tint === "lime" ? "bg-lime/15 text-lime" : tint === "orange" ? "bg-orange/15 text-orange" : "bg-primary/15 text-primary";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-surface p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-7 w-7 items-center justify-center rounded-lg ${bg}`, children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[11px] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold", children: value })
  ] });
}
function LogosBar() {
  const items = ["Curitiba", "Londrina", "Maringá", "Cascavel", "Foz", "Ponta Grossa", "Paranaguá"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-border/40 bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-6 text-xs uppercase tracking-widest text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cidades parceiras" }),
    items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold tracking-tight text-foreground/70", children: i }, i))
  ] }) });
}
function StatsStrip() {
  const stats = [{
    v: 1248,
    s: "+",
    l: "Eventos rastreados",
    c: "primary"
  }, {
    v: 87,
    s: "",
    l: "Cidades conectadas",
    c: "lime"
  }, {
    v: 320,
    s: "K",
    l: "Atletas ativos",
    c: "orange"
  }, {
    v: 96,
    s: "%",
    l: "Satisfação dos parceiros",
    c: "primary"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 rounded-3xl border border-border bg-gradient-card p-8 md:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-display text-4xl font-bold ${s.c === "lime" ? "text-gradient-lime" : s.c === "orange" ? "text-orange" : "text-gradient-primary"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { end: s.v, suffix: s.s }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: s.l })
  ] }, i)) }) });
}
function Benefits() {
  const items = [{
    icon: ChartColumn,
    title: "Analytics em tempo real",
    desc: "Métricas de inscrição, check-ins, engajamento e impacto turístico de cada evento.",
    tint: "primary"
  }, {
    icon: Target,
    title: "ROI mensurável",
    desc: "Patrocinadores acompanham alcance, exposição de marca e retorno por investimento.",
    tint: "lime"
  }, {
    icon: MapPin,
    title: "Mapa do Paraná",
    desc: "Visualize cidades ativas, fluxo de atletas e oportunidades regionais.",
    tint: "orange"
  }, {
    icon: Sparkles,
    title: "Insights inteligentes",
    desc: "IA sugere eventos compatíveis, períodos quentes e parcerias estratégicas.",
    tint: "primary"
  }, {
    icon: Calendar$1,
    title: "Calendário regional",
    desc: "Agenda esportiva integrada para evitar conflitos e maximizar audiência.",
    tint: "lime"
  }, {
    icon: Megaphone,
    title: "Divulgação ativa",
    desc: "Vitrine para marcas, eventos e cidades alcançarem o público certo.",
    tint: "orange"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "beneficios", className: "mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-lime", children: "Plataforma completa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl", children: "Tudo o que move um evento esportivo, em um só lugar." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Da inscrição ao impacto na cidade — Arena.PR conecta dados, pessoas e marcas com aparência premium." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: items.map((it, i) => {
      const Icon = it.icon;
      const tint = it.tint === "lime" ? "bg-lime/15 text-lime" : it.tint === "orange" ? "bg-orange/15 text-orange" : "bg-primary/15 text-primary";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition-transform hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-11 w-11 items-center justify-center rounded-xl ${tint}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5", strokeWidth: 2.2 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-lg font-bold", children: it.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: it.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity group-hover:opacity-30" })
      ] }, i);
    }) })
  ] });
}
function MapSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-lime", children: "Mapa inteligente" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl", children: "O Paraná esportivo em tempo real." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "87 cidades conectadas, milhares de atletas em movimento. Acompanhe o pulso do turismo esportivo regional, com filtros por modalidade, público e impacto econômico." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: ["Heatmap de atletas por município", "Fluxo turístico entre regiões", "Densidade de eventos por modalidade", "Oportunidades para novos patrocinadores"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-5 w-5 items-center justify-center rounded-full bg-lime/20 text-lime", children: "✓" }),
        t
      ] }, t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParanaMap, {})
  ] }) });
}
function DashboardPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl border border-border bg-gradient-card p-2 shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[22px] border border-border bg-background p-6 md:p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-lime", children: "Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl font-bold md:text-4xl", children: "Painel do organizador" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 text-xs", children: ["7d", "30d", "90d", "Ano"].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full border px-3 py-1.5 ${i === 1 ? "border-lime bg-lime/15 text-lime" : "border-border text-muted-foreground"}`, children: t }, t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-4 md:grid-cols-4", children: [{
      l: "Inscrições",
      v: "8.241",
      d: "+12,4%",
      c: "primary"
    }, {
      l: "Check-ins",
      v: "6.913",
      d: "+8,1%",
      c: "lime"
    }, {
      l: "Receita",
      v: "R$ 1,2M",
      d: "+24,7%",
      c: "orange"
    }, {
      l: "NPS",
      v: "78",
      d: "+5",
      c: "primary"
    }].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: k.l }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-3xl font-bold", children: k.v }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-1 text-xs font-semibold ${k.c === "lime" ? "text-lime" : k.c === "orange" ? "text-orange" : "text-primary"}`, children: k.d })
    ] }, k.l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-[2fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: "Engajamento por evento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Últimos 12 meses" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AreaChart, { data: [30, 42, 38, 55, 48, 70, 65, 82, 78, 95, 88, 110] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: "Modalidades" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart, { data: [{
          label: "Corrida",
          value: 92
        }, {
          label: "Ciclismo",
          value: 68
        }, {
          label: "Trail",
          value: 54
        }, {
          label: "MTB",
          value: 41
        }, {
          label: "Triatlo",
          value: 28
        }] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold", children: "Meta de inscrições" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Donut, { value: 72, color: "lime" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Meta: 12.000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Atual: 8.641" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-6 md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold", children: "Patrocinadores ativos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: [{
          n: "Atlas Energy",
          c: "Bebidas",
          v: "R$ 240K"
        }, {
          n: "Vento Sul",
          c: "Vestuário",
          v: "R$ 180K"
        }, {
          n: "Banco PR+",
          c: "Financeiro",
          v: "R$ 320K"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between border-b border-border/50 pb-2 text-sm last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-xs font-bold text-primary-foreground", children: s.n[0] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-semibold", children: s.n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: s.c })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm font-semibold text-lime", children: s.v })
        ] }, s.n)) })
      ] })
    ] })
  ] }) }) });
}
function Personas() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Persona, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-6 w-6" }), tint: "primary", tag: "Para organizadores", title: "Gestão completa do seu evento esportivo.", bullets: ["Dashboard com métricas principais", "Check-ins e coleta de dados", "Painel de patrocinadores", "Insights e notificações"], to: "/organizadores" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Persona, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-6 w-6" }), tint: "lime", tag: "Para patrocinadores", title: "Encontre os eventos certos para sua marca.", bullets: ["Filtros por cidade e modalidade", "Dashboard de ROI e alcance", "Sugestões inteligentes", "Perfis detalhados de eventos"], to: "/patrocinadores" })
  ] }) });
}
function Persona({
  icon,
  tint,
  tag,
  title,
  bullets,
  to
}) {
  const bg = tint === "lime" ? "bg-lime/15 text-lime" : "bg-primary/15 text-primary";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-12 w-12 items-center justify-center rounded-xl ${bg}`, children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs uppercase tracking-widest text-muted-foreground", children: tag }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-3xl font-bold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2 text-sm", children: bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${tint === "lime" ? "bg-lime" : "bg-primary"}` }),
      b
    ] }, b)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: `mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${tint === "lime" ? "bg-lime text-lime-foreground shadow-lime" : "bg-primary text-primary-foreground shadow-glow"}`, children: [
      "Acessar painel ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-3xl ${tint === "lime" ? "bg-lime" : "bg-primary"}` })
  ] });
}
function Calendar() {
  const events = [{
    d: "12",
    m: "JUN",
    n: "Maratona de Curitiba",
    c: "Curitiba · Corrida",
    t: "lime"
  }, {
    d: "19",
    m: "JUN",
    n: "GP MTB Serra do Mar",
    c: "Morretes · Ciclismo",
    t: "primary"
  }, {
    d: "02",
    m: "JUL",
    n: "Trail Run Iguaçu",
    c: "Foz do Iguaçu · Trail",
    t: "orange"
  }, {
    d: "14",
    m: "JUL",
    n: "Triatlo de Londrina",
    c: "Londrina · Triatlo",
    t: "primary"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-lime", children: "Calendário esportivo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl font-bold", children: "Próximos eventos no Paraná" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/organizadores", className: "hidden text-sm text-muted-foreground hover:text-foreground md:block", children: "Ver tudo →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-gradient-card p-5 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex h-14 w-14 flex-col items-center justify-center rounded-xl ${e.t === "lime" ? "bg-lime text-lime-foreground" : e.t === "orange" ? "bg-orange text-orange-foreground" : "bg-primary text-primary-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold leading-none", children: e.d }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold", children: e.m })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 font-display text-lg font-bold", children: e.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: e.c })
    ] }, e.n)) })
  ] });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-gradient-primary p-10 text-center shadow-glow md:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 noise opacity-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "relative font-display text-4xl font-bold text-primary-foreground md:text-5xl", children: "Pronto para liderar o turismo esportivo do Paraná?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-4 text-primary-foreground/80", children: "Cadastre seu evento ou marca agora — leva menos de 2 minutos." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/organizadores", className: "rounded-full bg-lime px-6 py-3 text-sm font-semibold text-lime-foreground shadow-lime", children: "Sou Organizador" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/patrocinadores", className: "rounded-full bg-background/20 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-background/30", children: "Sou Patrocinador" })
    ] })
  ] }) });
}
export {
  Home as component
};
