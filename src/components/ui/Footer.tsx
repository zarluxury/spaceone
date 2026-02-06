import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";

const navLinks = [
  "Products",
  "Projects",
  "Materioteca",
  "Cultura",
  "Be inspired",
  "About",
  "Dealers",
  "Agenda",
  "Designer",
]

const socialLinks = ["Facebook", "Instagram", "Vimeo", "Pinterest", "Linkedin"]

const certifications = [
  "UNI EN ISO 9001:2015",
  "UNI EN 1090:2009",
  "UNI EN ISO 14001:2015",
]

const legalLinks = [
  "Privacy Policy",
  "Cookie Policy",
  "Cookie preferences",
  "Whistleblowing",
  "Terms & Conditions",
]

export function Footer() {
  return (
    <footer className="bg-black text-footer-foreground text-white">
      <div className="mx-auto max-w-[1440px] px-8 pt-10 pb-8 lg:px-12 lg:pt-12">
        {/* Top section - 4 columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 - Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-1 leading-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-[17px] font-gramatika text-footer-muted transition-colors hover:text-footer-foreground"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 2 - Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base text-footer-muted">Newsletter</h3>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-base text-footer-muted transition-colors hover:text-footer-foreground"
            >
              Join our newsletter
              <FaArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Column 3 - Company Info */}
          <div className="flex flex-col gap-4 ">
            <h3 className="text-base text-footer-muted ">De Castelli Srl</h3>
            <div className="flex flex-col gap-0.5 text-sm leading-5 text-footer-dim text-gray-400 ">
              <p>{"SOCIET\u00C0 UNIPERSONALE"}</p>
              <p>Via delle Industrie 10</p>
              <p>Crocetta del Montello (TV), Italia</p>
              <p>Reg. Imp. di Treviso N. 302905</p>
              <p>C.S. Euro 119.000,00 i.v.</p>
              <p>P.Iva 03842970265</p>
              <p>SDI: T04ZHR3</p>
            </div>
          </div>

          {/* Column 4 - Certifications */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base text-footer-muted">Certifications</h3>
            <div className="flex flex-col gap-0.5 text-sm leading-5 text-footer-dim text-gray-400 ">
              {certifications.map((cert) => (
                <p key={cert} className="text-sm text-footer-dim">
                  {cert}
                </p>
              ))}
              <p className="mt-3 text-sm text-footer-dim">
                Environmental labeling of packaging
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-footer-border lg:my-12" />

        {/* Bottom section */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Social Links */}
          <div className="flex flex-col gap-1">
            <p className="text-sm text-footer-dim">Follow us on</p>
            <div className="flex flex-wrap gap-x-1">
              {socialLinks.map((social, i) => (
                <span key={social} className="text-sm text-footer-muted">
                  <Link
                    href="#"
                    className="transition-colors hover:text-footer-foreground"
                  >
                    {social}
                  </Link>
                  {i < socialLinks.length - 1 && ","}
                </span>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start gap-1 lg:items-end">
            <p className="text-sm text-footer-muted">Design Studio Nuvole</p>
            <div className="flex flex-wrap gap-x-1 lg:justify-end">
              {legalLinks.map((link, i) => (
                <span key={link} className="text-sm text-footer-dim">
                  <Link
                    href="#"
                    className="transition-colors hover:text-footer-muted"
                  >
                    {link}
                  </Link>
                  {i < legalLinks.length - 1 && ","}
                </span>
              ))}
              <span className="text-sm text-footer-dim">
                {"Copyright \u00A9 2025 De Castelli. All rights reserved."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
