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
export default function NotFound({ title, subtitle, description, buttonText, buttonLink, backgroundColor, titleColor, subtitleColor, descriptionColor, buttonColor, buttonTextColor, borderRadius, maxWidth, fontFamily, showButton, icon, }: NotFoundProps): React.JSX.Element;
