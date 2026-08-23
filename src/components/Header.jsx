const links = [
  { href: "/", label: "Home" },
  { href: "/discussion", label: "Discussion" },
  // { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export const Header = () => {
  const path = window.location.pathname;

  return (
    <nav className="site-nav">
      {links.map(({ href, label }) => {
        const isActive = href === "/" ? path === "/" : path.startsWith(href);

        return (
          <a
            key={href}
            href={href}
            className={isActive ? "is-active" : undefined}
            aria-current={isActive ? "page" : undefined}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
};
