"use client";
import { DownloadIcon } from "lucide-react"
import { Button } from "../button";

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
    <Button
      variant="outline"
      onClick={handleDownload}
      className="py-5"
      >
      Download CV
      <DownloadIcon className="w-4 h-4"/>
    </Button>
  );
}
