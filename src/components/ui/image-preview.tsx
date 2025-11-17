"use client"

import { useTheme } from "next-themes"
import React from "react";
import Image from "next/image";

export default function ImagePreviewContent() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="relative w-55 h-55 ml-5 group">

      {/* default image (light theme, hides on hover or dark mode) */}
      <Image
        className={`
          rounded-full object-cover
          ${theme === "dark" ? "hidden" : "block"} 
          group-hover:hidden
        `}
        src="/randall-qt.png"
        alt="profile-pic"
        fill
        sizes="360px"
      />

      {/* hover image (dark theme: always visible or light theme: visible on hover) */}
      <Image
        className={`
          rounded-full object-cover
          ${theme === "dark" ? "block" : "hidden"}
          group-hover:block
        `}
        src="/randall-qt-rayban.png"
        alt="profile-pic-hover"
        fill
        sizes="360px"
        priority
      />
    </div>
  );
}
