"use client";
import { DownloadIcon } from "lucide-react"

export default function DownloadCVButton() {
  const handleDownload = () => {
    const fileUrl = "/Andig_2025_CV.pdf";; 
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "LesterAndig_CV.pdf"; 
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <button
      onClick={handleDownload}
      className="cursor-pointer font-medium bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 w-full md:w-auto inline-flex items-center gap-1.5 justify-center">
      Download CV
      <DownloadIcon className="w-4.5 h-4.5"/>
    </button>
  );
}
