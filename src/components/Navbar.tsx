import React, { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Anggota", href: "#anggota" },
  { label: "Prestasi", href: "#prestasi" },
  { label: "Kenangan", href: "#kenangan" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav("#home")} className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0a1628] flex items-center justify-center">
            <span className="text-white font-bold text-xs font-mono">TM</span>
          </div>
          <span className={`font-semibold text-sm tracking-widest uppercase transition-colors ${scrolled ? "text-[#0a1628]" : "text-white"}`}>
            TM2B
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className={`text-sm tracking-widest uppercase transition-all duration-300 relative pb-0.5 ${
                scrolled ? "text-[#0a1628]/70 hover:text-[#0a1628]" : "text-white/70 hover:text-white"
              } ${active === l.href.replace("#", "") ? (scrolled ? "text-[#0a1628]" : "text-white") : ""}`}
            >
              {l.label}
              {active === l.href.replace("#", "") && (
                <span className={`absolute bottom-0 left-0 right-0 h-px ${scrolled ? "bg-[#0a1628]" : "bg-white"}`} />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-px w-6 transition-all duration-300 ${scrolled ? "bg-[#0a1628]" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 transition-all duration-300 ${scrolled ? "bg-[#0a1628]" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 transition-all duration-300 ${scrolled ? "bg-[#0a1628]" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#0a1628]/10 px-6 py-4 space-y-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="block w-full text-left text-sm tracking-widest uppercase text-[#0a1628]/70 hover:text-[#0a1628] transition-colors py-1"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
