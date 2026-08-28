import { Link } from "@tanstack/react-router";
import { BarChart3, Calendar, Compass, Heart, Sparkles, Target } from "lucide-react";

const items = [
  { icon: Compass, label: "Descobrir", to: "/patrocinadores" },
  { icon: Heart, label: "Meus eventos", to: "/patrocinadores/eventos" },
  { icon: BarChart3, label: "ROI" },
  { icon: Calendar, label: "Calendário" },
  { icon: Target, label: "Audiência" },
];

export function SponsorSidebar({ active }: { active: "discover" | "events" }) {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border bg-surface/40 p-5 lg:block">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/src/components/img/Logo.svg"
          alt="Play Analytics"
          className="h-15"
          draggable={false}
        />
      </Link>
      <nav className="mt-8 space-y-1 text-sm">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive =
            (active === "discover" && index === 0) || (active === "events" && index === 1);
          const className = `flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${
            isActive
              ? "bg-lime/15 text-lime"
              : "text-muted-foreground hover:bg-surface hover:text-foreground"
          }`;

          return item.to ? (
            <Link key={item.label} to={item.to} className={className}>
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          ) : (
            <button key={item.label} type="button" className={`${className} w-full`}>
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </nav>
      <div className="mt-8 rounded-2xl border border-border bg-gradient-card p-4">
        <div className="flex items-center gap-2 text-lime">
          <Sparkles className="h-4 w-4" />
          <p className="text-xs uppercase tracking-widest">Brand match</p>
        </div>
        <p className="mt-2 text-sm font-semibold">3 novos eventos compatíveis</p>
        <Link
          to="/patrocinadores"
          className="mt-3 block w-full rounded-lg bg-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground"
        >
          Ver sugestões
        </Link>
      </div>
    </aside>
  );
}
