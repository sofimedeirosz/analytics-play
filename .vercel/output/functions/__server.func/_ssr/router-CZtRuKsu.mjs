import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { R as Root2, P as Portal2, C as Content2, T as Title2, D as Description2, A as Action, O as Overlay2 } from "../_libs/radix-ui__react-alert-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { B as BadgeCheck, e as Building2 } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
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
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const WelcomeDialog = Root2;
const WelcomeDialogPortal = Portal2;
const WelcomeDialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay2,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-[#020b16]/75 backdrop-blur-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
WelcomeDialogOverlay.displayName = Overlay2.displayName;
const WelcomeDialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(WelcomeDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(WelcomeDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content2,
    {
      ref,
      className: cn(
        "relative",
        "fixed left-[50%] top-[50%] z-50",
        "w-[calc(100%-2rem)] max-w-md",
        "translate-x-[-50%] translate-y-[-50%]",
        "overflow-hidden rounded-3xl",
        "border border-white/10",
        "bg-[#081827]",
        "p-8",
        "shadow-[0_25px_80px_rgba(0,0,0,0.55)]",
        "duration-200",
        "data-[state=open]:animate-in",
        "data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0",
        "data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95",
        "data-[state=open]:zoom-in-95",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#8cff24]/10 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#1677ff]/10 blur-3xl" }),
        children
      ]
    }
  )
] }));
WelcomeDialogContent.displayName = Content2.displayName;
const WelcomeDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn(
      "relative flex flex-col items-center space-y-3 text-center",
      className
    ),
    ...props
  }
);
WelcomeDialogHeader.displayName = "WelcomeDialogHeader";
const WelcomeDialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title2,
  {
    ref,
    className: cn(
      "text-2xl font-bold tracking-tight text-white",
      className
    ),
    ...props
  }
));
WelcomeDialogTitle.displayName = Title2.displayName;
const WelcomeDialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description2,
  {
    ref,
    className: cn(
      "max-w-sm text-sm leading-6 text-gray-400",
      className
    ),
    ...props
  }
));
WelcomeDialogDescription.displayName = Description2.displayName;
const WelcomeDialogBadge = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn(
      "inline-flex w-fit items-center gap-2 rounded-full",
      "border border-[#8cff24]/20 bg-[#8cff24]/10 px-3 py-1",
      "text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d7ffb1]",
      className
    ),
    ...props
  }
);
WelcomeDialogBadge.displayName = "WelcomeDialogBadge";
const WelcomeDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn(
      "relative mt-8 flex items-center justify-center",
      className
    ),
    ...props
  }
);
WelcomeDialogFooter.displayName = "WelcomeDialogFooter";
const WelcomeDialogAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Action,
  {
    ref,
    className: cn(
      buttonVariants(),
      "min-w-35 w-full rounded-full border-0 sm:w-auto",
      "bg-[#8cff24] px-8 py-3",
      "font-semibold text-[#07120a]",
      "shadow-[0_0_25px_rgba(140,255,36,0.25)]",
      "transition-all",
      "hover:scale-105 hover:bg-[#9cff3d]",
      "hover:shadow-[0_0_35px_rgba(140,255,36,0.4)]",
      "active:scale-95",
      className
    ),
    ...props
  }
));
WelcomeDialogAction.displayName = Action.displayName;
const appCss = "/assets/styles-B8w5Zaf5.css";
const MOCK_ACCOUNT_NAME = "empresa_teste";
const MockAuthContext = reactExports.createContext(null);
function useMockAuth() {
  const context = reactExports.useContext(MockAuthContext);
  if (context === null) {
    throw new Error("useMockAuth must be used within MockAuthContext.");
  }
  return context;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({
  error,
  reset
}) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        name: "title",
        content: "Play Analytics - Inteligencia para o Turismo Esportivo do Parana"
      },
      {
        name: "description",
        content: "Plataforma SaaS que conecta organizadores, patrocinadores, academias e cidades com dados inteligentes."
      },
      {
        property: "og:title",
        content: "Play Analytics - Turismo Esportivo Inteligente"
      },
      {
        property: "og:description",
        content: "Dados, ROI e impacto turistico para eventos esportivos regionais."
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  const [showWelcome, setShowWelcome] = reactExports.useState(true);
  const signIn = () => {
    setIsAuthenticated(true);
    setShowWelcome(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    MockAuthContext.Provider,
    {
      value: {
        accountName: MOCK_ACCOUNT_NAME,
        isAuthenticated,
        signIn
      },
      children: [
        isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(MockSessionBanner, {}) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          WelcomeDialog,
          {
            open: !isAuthenticated && showWelcome,
            onOpenChange: (open) => {
              if (isAuthenticated) {
                setShowWelcome(open);
              }
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(WelcomeDialogContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(WelcomeDialogHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(WelcomeDialogBadge, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-3.5 w-3.5" }),
                  "Conta demo do MVP"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(WelcomeDialogTitle, { children: "Entre com a sessao simulada" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(WelcomeDialogDescription, { children: "Esta demonstracao usa uma autenticacao mock apenas para apresentar o fluxo do produto." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-6 rounded-2xl border border-white/10 bg-white/5 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-2xl bg-[#8cff24]/15 text-[#8cff24]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.24em] text-gray-400", children: "Conta ativa" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-lg font-semibold text-white", children: MOCK_ACCOUNT_NAME }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-6 text-gray-400", children: "Clique em Entrar para alternar o app para o estado logado." })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(WelcomeDialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(WelcomeDialogAction, { onClick: signIn, children: "Entrar" }) })
            ] })
          }
        )
      ]
    }
  ) });
}
function MockSessionBanner() {
  const { accountName } = useMockAuth();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-lime/20 bg-lime/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col gap-2 px-6 py-3 text-sm text-foreground sm:flex-row sm:items-center sm:justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime text-lime-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4" }) }),
      "Sessao mock ativa para a conta ",
      accountName
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.24em] text-muted-foreground", children: "Prototype" })
  ] }) });
}
const $$splitComponentImporter$9 = () => import("./patrocinadores-C3DWEuW0.mjs");
const Route$9 = createFileRoute("/patrocinadores")({
  head: () => ({
    meta: [{
      title: "Painel do Patrocinador — Play Analytics"
    }, {
      name: "description",
      content: "Encontre eventos, meça ROI e amplie sua marca no esporte do Paraná."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./index-PwTMU2J9.mjs");
const Route$8 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Play Analytics — Inteligência para o Turismo Esportivo do Paraná"
    }, {
      name: "description",
      content: "SaaS de dados, ROI e impacto regional para eventos esportivos, patrocinadores e cidades do interior do Paraná."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./index-CY56cK5I.mjs");
const Route$7 = createFileRoute("/organizadores/")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./patrocinadores_.roi-D0YgNw8m.mjs");
const Route$6 = createFileRoute("/patrocinadores_/roi")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./patrocinadores_.eventos-DpZEPBHH.mjs");
const Route$5 = createFileRoute("/patrocinadores_/eventos")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./patrocinadores_.calendario-BbL_6__X.mjs");
const Route$4 = createFileRoute("/patrocinadores_/calendario")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./relatorios-BhtaZxe6.mjs");
const Route$3 = createFileRoute("/organizadores/relatorios")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./ranking-FA_Tj2ws.mjs");
const Route$2 = createFileRoute("/organizadores/ranking")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./patrocinadores-BNTGcEd1.mjs");
const Route$1 = createFileRoute("/organizadores/patrocinadores")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./eventos-BrJoj3I9.mjs");
const Route = createFileRoute("/organizadores/eventos")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const PatrocinadoresRoute = Route$9.update({
  id: "/patrocinadores",
  path: "/patrocinadores",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const OrganizadoresIndexRoute = Route$7.update({
  id: "/organizadores/",
  path: "/organizadores/",
  getParentRoute: () => Route$a
});
const PatrocinadoresRoiRoute = Route$6.update({
  id: "/patrocinadores_/roi",
  path: "/patrocinadores/roi",
  getParentRoute: () => Route$a
});
const PatrocinadoresEventosRoute = Route$5.update({
  id: "/patrocinadores_/eventos",
  path: "/patrocinadores/eventos",
  getParentRoute: () => Route$a
});
const PatrocinadoresCalendarioRoute = Route$4.update({
  id: "/patrocinadores_/calendario",
  path: "/patrocinadores/calendario",
  getParentRoute: () => Route$a
});
const OrganizadoresRelatoriosRoute = Route$3.update({
  id: "/organizadores/relatorios",
  path: "/organizadores/relatorios",
  getParentRoute: () => Route$a
});
const OrganizadoresRankingRoute = Route$2.update({
  id: "/organizadores/ranking",
  path: "/organizadores/ranking",
  getParentRoute: () => Route$a
});
const OrganizadoresPatrocinadoresRoute = Route$1.update({
  id: "/organizadores/patrocinadores",
  path: "/organizadores/patrocinadores",
  getParentRoute: () => Route$a
});
const OrganizadoresEventosRoute = Route.update({
  id: "/organizadores/eventos",
  path: "/organizadores/eventos",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  PatrocinadoresRoute,
  OrganizadoresEventosRoute,
  OrganizadoresPatrocinadoresRoute,
  OrganizadoresRankingRoute,
  OrganizadoresRelatoriosRoute,
  PatrocinadoresCalendarioRoute,
  PatrocinadoresEventosRoute,
  PatrocinadoresRoiRoute,
  OrganizadoresIndexRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  router,
  useMockAuth
};
