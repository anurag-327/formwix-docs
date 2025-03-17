"use client";
type ThemeOption = "light" | "dark" | "blue";
type PositionOption = "bottom-right" | "bottom-left" | "top-right" | "top-left";
import { Waveform } from "@phosphor-icons/react/dist/ssr";
export default function FormWizBadge({
  position = "bottom-right",
  theme = "light",
}: {
  position?: PositionOption;
  theme?: ThemeOption;
}) {
  const themes = {
    light: {
      background: "#ffffff",
      text: "#333333",
      border: "#e0e0e0",
    },
    dark: {
      background: "#222222",
      text: "#ffffff",
      border: "#444444",
    },
    blue: {
      background: "#1e40af",
      text: "#ffffff",
      border: "#1e3a8a",
    },
  };

  const currentTheme = themes[theme] || themes.light;

  const positions = {
    "bottom-right": { bottom: "10px", right: "10px" },
    "bottom-left": { bottom: "10px", left: "10px" },
    "top-right": { top: "10px", right: "10px" },
    "top-left": { top: "10px", left: "10px" },
  };

  const positionStyle = positions["top-right"];

  return (
    <div
      style={{
        position: "absolute",
        ...positionStyle,
        padding: "4px 8px",
        fontSize: "12px",
        fontFamily: "system-ui, sans-serif",
        borderRadius: "0.5rem",
        backgroundColor: currentTheme.background,
        color: currentTheme.text,
        border: `1px solid ${currentTheme.border}`,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        zIndex: 999,
        cursor: "pointer",
        transition: "opacity 0.2s ease",
        opacity: 0.8,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "0.8";
      }}
      onClick={() => window.open("/", "_blank")}
    >
      <Waveform size={22} />
      <span>Made with FormWiz</span>
    </div>
  );
}
