"use client"

import { Toaster, ToastBar } from "react-hot-toast"

export default function ToasterClient() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "var(--card)",
          color: "var(--foreground)",
          border: "1px solid var(--border)",
          borderRadius: "0.5rem",
          padding: "1rem",
          fontSize: "13px"
        },
      }}
    >
      {(t) => (
        <ToastBar
          toast={t}
          style={{
            animation: t.visible
              ? "toast-in 0.4s ease forwards"
              : "toast-out 0.4s ease forwards",
          }}
        />
      )}
    </Toaster>
  )
}
