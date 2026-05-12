import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const runtime = "edge";
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(circle at 20% 20%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 80% 30%, #ec4899 0%, transparent 50%), radial-gradient(circle at 50% 90%, #fb923c 0%, transparent 55%), #07060c",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background:
                "linear-gradient(135deg,#8b5cf6,#ec4899,#fb923c)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            R
          </div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 86,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            Building AI products from Mexico City.
          </div>
          <div style={{ fontSize: 30, opacity: 0.7, maxWidth: 900 }}>
            {site.description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            opacity: 0.6,
          }}
        >
          <div>{site.url.replace(/^https?:\/\//, "")}</div>
          <div>{site.location}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
