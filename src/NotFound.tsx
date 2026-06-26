import React from "react";

export interface NotFoundProps {
  title?: string;
  subtitle?: string;
  description?: string;

  buttonText?: string;
  buttonLink?: string;

  backgroundColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  descriptionColor?: string;

  buttonColor?: string;
  buttonTextColor?: string;

  borderRadius?: string;
  maxWidth?: string;

  fontFamily?: string;

  showButton?: boolean;

  icon?: React.ReactNode;
}

export default function NotFound({
  title = "404",
  subtitle = "Page Not Found",
  description = "Sorry, the page you are looking for doesn't exist or has been moved.",

  buttonText = "Go Home",
  buttonLink = "/",

  backgroundColor = "#ffffff",
  titleColor = "#111827",
  subtitleColor = "#374151",
  descriptionColor = "#6b7280",

  buttonColor = "#111827",
  buttonTextColor = "#ffffff",

  borderRadius = "10px",
  maxWidth = "600px",

  fontFamily = "system-ui, sans-serif",

  showButton = true,

  icon,
}: NotFoundProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: backgroundColor,
        padding: "20px",
        boxSizing: "border-box",
        fontFamily,
      }}
    >
      <div style={{ textAlign: "center", maxWidth }}>
        {icon && <div style={{ marginBottom: "20px" }}>{icon}</div>}

        <h1
          style={{
            fontSize: "120px",
            margin: 0,
            fontWeight: 800,
            color: titleColor,
            lineHeight: 1,
          }}
        >
          {title}
        </h1>

        <h2
          style={{
            marginTop: "16px",
            marginBottom: "12px",
            fontSize: "32px",
            color: subtitleColor,
            fontWeight: 700,
          }}
        >
          {subtitle}
        </h2>

        <p
          style={{
            color: descriptionColor,
            fontSize: "18px",
            lineHeight: 1.7,
            marginBottom: "32px",
          }}
        >
          {description}
        </p>

        {showButton && (
          <a
            href={buttonLink}
            style={{
              display: "inline-block",
              padding: "14px 30px",
              background: buttonColor,
              color: buttonTextColor,
              textDecoration: "none",
              borderRadius,
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}