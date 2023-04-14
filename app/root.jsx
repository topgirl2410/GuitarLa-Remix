import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload
} from "@remix-run/react";

import styles from '~/styles/index.css'
import Header from "~/components/header.jsx";




export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
    }
  ]
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}


export function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>GuitarLA - Remix</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
