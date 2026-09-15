"use client";

import { useEffect } from "react";
import { X, Check, Minus } from "lucide-react";
import { comparisonMatrix } from "@/lib/data";

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompareModal({ isOpen, onClose }: CompareModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Compare OM Media Collections"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        backgroundColor: "rgba(3, 3, 3, 0.94)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(16px, 3vw, 40px)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1040,
          maxHeight: "88vh",
          backgroundColor: "rgba(12, 12, 14, 0.95)",
          border: "1px solid rgba(183, 154, 104, 0.3)",
          borderRadius: 6,
          boxShadow: "0 30px 90px rgba(0, 0, 0, 0.9)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            padding: "24px 32px",
            borderBottom: "1px solid rgba(183, 154, 104, 0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <span style={{ width: 16, height: 1, background: "var(--champagne)" }} />
              <span className="eyebrow" style={{ fontSize: 8 }}>
                SPECIFICATION MATRIX
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                fontSize: "clamp(24px, 2.5vw, 32px)",
                color: "var(--ivory)",
                margin: 0,
                fontWeight: 400,
              }}
            >
              Compare <i>Collections</i>
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "rgba(20, 20, 24, 0.6)",
              border: "1px solid rgba(183, 154, 104, 0.3)",
              color: "var(--ivory)",
              padding: "8px 14px",
              borderRadius: 2,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-ui, sans-serif)",
              fontSize: "9px",
              letterSpacing: "0.2em",
            }}
            aria-label="Close comparison matrix"
          >
            <span>CLOSE</span>
            <X size={14} />
          </button>
        </div>

        {/* Scrollable Table Content */}
        <div
          style={{
            padding: "20px clamp(16px, 3vw, 32px) 32px",
            overflowX: "auto",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <table
            style={{
              width: "100%",
              minWidth: 620,
              borderCollapse: "collapse",
              textAlign: "left",
              fontFamily: "var(--font-ui, sans-serif)",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(183, 154, 104, 0.25)" }}>
                <th
                  style={{
                    padding: "16px 12px",
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    width: "35%",
                  }}
                >
                  FEATURE / DELIVERABLE
                </th>
                <th
                  style={{
                    padding: "16px 12px",
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "var(--ivory)",
                    width: "21%",
                  }}
                >
                  Essential
                </th>
                <th
                  style={{
                    padding: "16px 12px",
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "var(--champagne-light)",
                    width: "23%",
                    backgroundColor: "rgba(183, 154, 104, 0.05)",
                    borderLeft: "1px solid rgba(183, 154, 104, 0.15)",
                    borderRight: "1px solid rgba(183, 154, 104, 0.15)",
                  }}
                >
                  Signature ★
                </th>
                <th
                  style={{
                    padding: "16px 12px",
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "var(--ivory)",
                    width: "21%",
                  }}
                >
                  Premium &amp; Luxe
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonMatrix.map((row, idx) => (
                <tr
                  key={row.feature}
                  style={{
                    borderBottom: "1px solid rgba(183, 154, 104, 0.1)",
                    backgroundColor: idx % 2 === 0 ? "transparent" : "rgba(255, 255, 255, 0.015)",
                  }}
                >
                  <td
                    style={{
                      padding: "14px 12px",
                      fontSize: "12.5px",
                      color: "var(--ivory)",
                      fontWeight: 500,
                    }}
                  >
                    {row.feature}
                  </td>
                  <td
                    style={{
                      padding: "14px 12px",
                      fontSize: "12px",
                      color: row.essential === "—" ? "rgba(141, 138, 132, 0.4)" : "var(--muted-light)",
                    }}
                  >
                    {row.essential}
                  </td>
                  <td
                    style={{
                      padding: "14px 12px",
                      fontSize: "12px",
                      color: "var(--ivory)",
                      fontWeight: 500,
                      backgroundColor: "rgba(183, 154, 104, 0.04)",
                      borderLeft: "1px solid rgba(183, 154, 104, 0.15)",
                      borderRight: "1px solid rgba(183, 154, 104, 0.15)",
                    }}
                  >
                    {row.signature}
                  </td>
                  <td
                    style={{
                      padding: "14px 12px",
                      fontSize: "12px",
                      color: "var(--muted-light)",
                    }}
                  >
                    {row.premium}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
