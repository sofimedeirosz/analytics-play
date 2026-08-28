import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/components/img/Logo.svg" alt="Play Analytics" className="h-15" draggable={false}/>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/" className="hover:text-foreground transition-colors">Plataforma</Link>
          <Link to="/organizadores" className="hover:text-foreground transition-colors">Organizadores</Link>
          <Link to="/patrocinadores" className="hover:text-foreground transition-colors">Patrocinadores</Link>
          <a href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/organizadores" className="hidden text-sm text-muted-foreground hover:text-foreground sm:block">Entrar</Link>
          <a
            href="https://forms.gle/m9ouyREaTTtG4Qzt9"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-lime px-4 py-2 text-sm font-semibold text-lime-foreground shadow-lime transition-transform hover:scale-105"
          >
            Responder pesquisa
          </a>
        </div>
      </div>
    </header>
  );
}
