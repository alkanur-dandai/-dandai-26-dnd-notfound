import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function NotFound({ title = "404", subtitle = "Page Not Found", description = "Sorry, the page you are looking for doesn't exist or has been moved.", buttonText = "Go Home", buttonLink = "/", backgroundColor = "#ffffff", titleColor = "#111827", subtitleColor = "#374151", descriptionColor = "#6b7280", buttonColor = "#111827", buttonTextColor = "#ffffff", borderRadius = "10px", maxWidth = "600px", fontFamily = "system-ui, sans-serif", showButton = true, icon, }) {
    return (_jsx("div", { style: {
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: backgroundColor,
            padding: "20px",
            boxSizing: "border-box",
            fontFamily,
        }, children: _jsxs("div", { style: { textAlign: "center", maxWidth }, children: [icon && _jsx("div", { style: { marginBottom: "20px" }, children: icon }), _jsx("h1", { style: {
                        fontSize: "120px",
                        margin: 0,
                        fontWeight: 800,
                        color: titleColor,
                        lineHeight: 1,
                    }, children: title }), _jsx("h2", { style: {
                        marginTop: "16px",
                        marginBottom: "12px",
                        fontSize: "32px",
                        color: subtitleColor,
                        fontWeight: 700,
                    }, children: subtitle }), _jsx("p", { style: {
                        color: descriptionColor,
                        fontSize: "18px",
                        lineHeight: 1.7,
                        marginBottom: "32px",
                    }, children: description }), showButton && (_jsx("a", { href: buttonLink, style: {
                        display: "inline-block",
                        padding: "14px 30px",
                        background: buttonColor,
                        color: buttonTextColor,
                        textDecoration: "none",
                        borderRadius,
                        fontWeight: 600,
                        fontSize: "16px",
                    }, children: buttonText }))] }) }));
}
