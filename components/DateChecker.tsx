"use client";

import React, { useState } from "react";
import { Calendar, MapPin, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { upPriorityCities, getWhatsAppLink } from "@/lib/data";

export default function DateChecker() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCity, setSelectedCity] = useState("Varanasi");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate) {
      setChecked(true);
    }
  };

  const whatsappUrl = getWhatsAppLink({
    page: "date_checker",
    city: selectedCity,
    date: selectedDate
  });

  return (
    <section
      className="date-checker-section"
      style={{
        padding: "clamp(60px, 8vw, 100px) 24px",
        backgroundColor: "var(--bg-black, #080808)",
        position: "relative",
        overflow: "hidden"
      }}
      aria-label="Check celebration date availability"
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(600px, 90vw)",
          height: 350,
          background: "radial-gradient(ellipse, rgba(183, 154, 104, 0.08) 0%, transparent 70%)",
          pointerEvents: "none"
        }}
      />

      <div
        style={{
          maxWidth: 920,
          margin: "0 auto",
          position: "relative",
          zIndex: 2
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(20, 20, 22, 0.8)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(183, 154, 104, 0.25)",
            borderRadius: 8,
            padding: "clamp(32px, 5vw, 64px)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.6)"
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: 10,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--champagne-gold, #B79A68)",
                display: "inline-block",
                marginBottom: 10
              }}
            >
              LIMITED COMMISSIONS PER SEASON · सीमित बुकिंग प्रति सीजन
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
                fontWeight: 400,
                color: "#FAF9F6",
                letterSpacing: "-0.01em",
                margin: "0 0 12px 0"
              }}
            >
              Check Your Celebration Date ·{" "}
              <span
                className="hindi-text"
                style={{
                  color: "#D4BA8A",
                  fontFamily: "var(--font-hindi, 'Nirmala UI', 'Mangal', sans-serif)",
                  letterSpacing: "0.03em",
                  wordSpacing: "0.2em",
                }}
              >
                शुभ विवाह तिथि जांचें
              </span>
            </h2>
          </div>

          {!checked ? (
            /* Inquiry Form */
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: 16
                }}
              >
                {/* Date Input */}
                <div>
                  <label
                    htmlFor="celebration-date"
                    style={{
                      display: "block",
                      fontSize: 11,
                      fontFamily: "var(--font-ui, sans-serif)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(244, 240, 232, 0.6)",
                      marginBottom: 8
                    }}
                  >
                    Wedding Date · विवाह तिथि
                  </label>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Calendar
                      size={16}
                      color="#B79A68"
                      style={{ position: "absolute", left: 16, pointerEvents: "none" }}
                    />
                    <input
                      id="celebration-date"
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "14px 16px 14px 44px",
                        backgroundColor: "#0C0C0E",
                        border: "1px solid rgba(183, 154, 104, 0.2)",
                        borderRadius: 4,
                        color: "#FAF9F6",
                        fontFamily: "var(--font-ui, sans-serif)",
                        fontSize: 14,
                        outline: "none"
                      }}
                    />
                  </div>
                </div>

                {/* City Selector */}
                <div>
                  <label
                    htmlFor="celebration-city"
                    style={{
                      display: "block",
                      fontSize: 11,
                      fontFamily: "var(--font-ui, sans-serif)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(244, 240, 232, 0.6)",
                      marginBottom: 8
                    }}
                  >
                    Destination / City · शहर चुनें
                  </label>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <MapPin
                      size={16}
                      color="#B79A68"
                      style={{ position: "absolute", left: 16, pointerEvents: "none" }}
                    />
                    <select
                      id="celebration-city"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "14px 16px 14px 44px",
                        backgroundColor: "#0C0C0E",
                        border: "1px solid rgba(183, 154, 104, 0.2)",
                        borderRadius: 4,
                        color: "#FAF9F6",
                        fontFamily: "var(--font-ui, sans-serif)",
                        fontSize: 14,
                        outline: "none",
                        cursor: "pointer",
                        appearance: "none"
                      }}
                    >
                      {upPriorityCities.map((city) => (
                        <option key={city.name} value={city.name} style={{ backgroundColor: "#141416" }}>
                          {city.name} ({city.region})
                        </option>
                      ))}
                      <option value="Pan-India Destination" style={{ backgroundColor: "#141416" }}>
                        Other Destination in India (अन्य शहर)
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn gold"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "16px 28px",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  marginTop: 8,
                  cursor: "pointer"
                }}
              >
                CHECK DATES FOR {selectedCity.toUpperCase()} · तारीख उपलब्ध है या नहीं जांचें
                <ArrowRight size={14} />
              </button>
            </form>
          ) : (
            /* Result Screen */
            <div
              style={{
                textAlign: "center",
                padding: "24px 0 8px 0"
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  backgroundColor: "rgba(183, 154, 104, 0.15)",
                  border: "1px solid rgba(183, 154, 104, 0.4)",
                  color: "#D4BA8A",
                  marginBottom: 20
                }}
              >
                <CheckCircle2 size={26} />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display, Georgia, serif)",
                  fontSize: 22,
                  color: "#FAF9F6",
                  marginBottom: 8
                }}
              >
                Availability Inquiry Received · शुभ लग्न तिथि दर्ज
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body, Georgia, serif)",
                  fontSize: 15,
                  color: "rgba(244, 240, 232, 0.8)",
                  maxWidth: 540,
                  margin: "0 auto 28px auto",
                  lineHeight: 1.6
                }}
              >
                We have recorded your celebration in <strong>{selectedCity}</strong> for{" "}
                <strong>{selectedDate}</strong>. Connect directly on WhatsApp for immediate priority confirmation.
                <span style={{ display: "block", marginTop: 6, color: "var(--champagne)" }}>
                  आपकी शादी की तारीख दर्ज कर ली गई है। तुरंत पुष्टि के लिए व्हाट्सएप पर संपर्क करें।
                </span>
              </p>

              {/* Dual Action Buttons */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 16
                }}
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn gold"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 28px",
                    textDecoration: "none",
                    fontSize: 12,
                    letterSpacing: "0.14em"
                  }}
                >
                  <MessageCircle size={16} />
                  <span>व्हाट्सएप पर तुरंत पुष्टि करें · CONFIRM ON WHATSAPP</span>
                </a>

                <button
                  type="button"
                  onClick={() => setChecked(false)}
                  className="btn outline"
                  style={{
                    padding: "14px 24px",
                    fontSize: 12,
                    letterSpacing: "0.14em",
                    cursor: "pointer"
                  }}
                >
                  दूसरी तारीख देखें · CHECK ANOTHER
                </button>
              </div>
            </div>
          )}

          {/* Micro trust note */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              flexWrap: "wrap",
              marginTop: 28,
              paddingTop: 24,
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              fontSize: 11,
              fontFamily: "var(--font-ui, sans-serif)",
              letterSpacing: "0.08em",
              color: "rgba(244, 240, 232, 0.5)"
            }}
          >
            <span>स्टूडियो से सीधा संपर्क · Direct Response</span>
            <span>•</span>
            <span>कोई बिचौलिया नहीं · Zero Intermediaries</span>
            <span>•</span>
            <span>पूर्ण गोपनीयता · Confidential Inquiries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
