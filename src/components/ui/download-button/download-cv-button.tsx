"use client";
import { DownloadIcon } from "lucide-react"
// import { Button } from "../button";

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
    // <Button
    //   variant="outline"
    //   onClick={handleDownload}
    //   className="py-5 w-59 md:w-53 "
    //   >
    //   Download CV
      <DownloadIcon onClick={handleDownload} className="cursor-pointer w-5 h-5 text-muted-foreground hover:text-foreground transition-colors"/>
    // </Button>
  );
}
