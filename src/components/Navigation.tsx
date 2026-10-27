"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

function IconDownload() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`} id="main-navigation">
      <div className="nav__inner">
        <a href="#about" className="nav__logo" aria-label="Prajwala U Home">
          <span className="nav__logo-mark">PU</span>
          <span className="nav__logo-name">Prajwala U</span>
        </a>

        <nav className={`nav__links-wrapper ${mobileOpen ? "nav__links-wrapper--open" : ""}`} aria-label="Primary navigation">
          <ul className="nav__links" id="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav__link"
                  onClick={handleLinkClick}
                  id={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__actions-mobile">
            <a
              href="/Prajwala_Shetty_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--sm"
              download="Prajwala_Shetty_Resume.pdf"
            >
              <IconDownload />
              Resume PDF
            </a>
          </div>
        </nav>

        <div className="nav__actions-desktop">
          <a
            href="/Prajwala_Shetty_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm nav__resume-btn"
            download="Prajwala_Shetty_Resume.pdf"
          >
            <IconDownload />
            Resume PDF
          </a>
        </div>

        <button
          className={`nav__mobile-toggle ${
            mobileOpen ? "nav__mobile-toggle--open" : ""
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          id="mobile-menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
