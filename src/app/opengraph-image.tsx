import { ImageResponse } from "next/og";

export const alt = "Denzel Marani Photography — Selected Works";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#090b0d",
          color: "#f3f0e9",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "62px 70px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 600,
            justifyContent: "space-between",
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
          }}
        >
          <span>Denzel Marani</span>
          <span style={{ fontSize: 13, letterSpacing: "0.22em" }}>Singapore / 2026</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#9a9b98",
              fontSize: 15,
              letterSpacing: "0.28em",
              marginBottom: 24,
              textTransform: "uppercase",
            }}
          >
            Selected photography
          </span>
          <span
            style={{
              fontSize: 92,
              letterSpacing: "-0.07em",
              lineHeight: 0.92,
              maxWidth: 900,
            }}
          >
            Moments in life,
            <br />
            through my eyes.
          </span>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <span style={{ background: "#6c8cff", borderRadius: 99, height: 10, width: 10 }} />
          <span style={{ background: "#e47757", borderRadius: 99, height: 10, width: 10 }} />
        </div>
      </div>
    ),
    size,
  );
}
