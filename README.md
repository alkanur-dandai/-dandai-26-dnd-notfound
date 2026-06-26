# @dandai-26/dnd-notfound

A customizable React 404 Not Found page component.

---

## 📦 Installation

```bash
npm install @dandai-26/dnd-notfound
```

or

```bash
yarn add @dandai-26/dnd-notfound
```

---

## 🚀 Basic Usage

### JavaScript / TypeScript

```tsx
import NotFound from "@dandai-26/dnd-notfound";

export default function App() {
  return <NotFound />;
}
```

---

## 🎨 Custom Usage

You can fully customize the 404 page:

```tsx
<NotFound
  title="404"
  subtitle="Page Not Found"
  description="The page you are looking for does not exist."

  buttonText="Go Home"
  buttonLink="/"

  backgroundColor="#f9fafb"
  titleColor="#111827"
  subtitleColor="#374151"
  descriptionColor="#6b7280"

  buttonColor="#111827"
  buttonTextColor="#ffffff"

  borderRadius="12px"
  maxWidth="600px"

  fontFamily="system-ui, sans-serif"

  showButton={true}
/>
```

---

## 🧩 Props

| Prop             | Type            | Default          | Description             |
| ---------------- | --------------- | ---------------- | ----------------------- |
| title            | string          | "404"            | Main heading text       |
| subtitle         | string          | "Page Not Found" | Subtitle text           |
| description      | string          | Default message  | Description text        |
| buttonText       | string          | "Go Home"        | Button label            |
| buttonLink       | string          | "/"              | Button redirect link    |
| backgroundColor  | string          | "#ffffff"        | Page background color   |
| titleColor       | string          | "#111827"        | Title color             |
| subtitleColor    | string          | "#374151"        | Subtitle color          |
| descriptionColor | string          | "#6b7280"        | Description color       |
| buttonColor      | string          | "#111827"        | Button background color |
| buttonTextColor  | string          | "#ffffff"        | Button text color       |
| borderRadius     | string          | "10px"           | Button border radius    |
| maxWidth         | string          | "600px"          | Content width           |
| fontFamily       | string          | "system-ui"      | Font family             |
| showButton       | boolean         | true             | Show/hide button        |
| icon             | React.ReactNode | none             | Optional icon           |

---

## 🎯 Example with Icon

```tsx
import NotFound from "@dandai-26/dnd-notfound";
import { FaExclamationTriangle } from "react-icons/fa";

export default function App() {
  return (
    <NotFound
      icon={<FaExclamationTriangle size={60} color="#f59e0b" />}
      title="404"
      subtitle="Oops!"
    />
  );
}
```

---

## ⚡ Features

* Fully customizable 404 page
* Supports React + TypeScript
* Easy styling via props
* Lightweight and dependency-free
* Works in Next.js, Vite, CRA

---

## 📄 License

ISC

made 26/06/2026
