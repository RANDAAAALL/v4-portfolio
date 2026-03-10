import CertificatesContainer from "@/components/ui/certificates-content/certificates-container";
import { metadataInfos } from "@/lib/values/metadata";
import { Metadata } from "next";

export const metadata: Metadata = metadataInfos.titles.pages.certificates;

export default function Certificates() {
  return <CertificatesContainer />;
}
