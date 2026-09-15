import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb navigation"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 20,
      }}
    >
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          color: "var(--champagne, #B79A68)",
          textDecoration: "none",
          fontSize: 11,
          fontFamily: "var(--font-ui, sans-serif)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          padding: "5px 12px",
          borderRadius: 3,
          backgroundColor: "rgba(183, 154, 104, 0.1)",
          border: "1px solid rgba(183, 154, 104, 0.3)",
          transition: "all 0.2s ease",
        }}
        className="breadcrumb-home-badge"
      >
        <Home size={12} color="#D4BA8A" />
        <span>HOME</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span
            key={idx}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <ChevronRight size={12} color="rgba(183, 154, 104, 0.45)" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                style={{
                  color: "var(--champagne, #B79A68)",
                  textDecoration: "none",
                  fontSize: 11,
                  fontFamily: "var(--font-ui, sans-serif)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  transition: "color 0.2s ease",
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                style={{
                  color: "rgba(244, 240, 232, 0.7)",
                  fontSize: 11,
                  fontFamily: "var(--font-ui, sans-serif)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
