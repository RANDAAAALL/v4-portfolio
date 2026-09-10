import { ImageGallery } from "@/components/ui/gallery/image-gallery";
import { CertificatesProps } from "@/lib/interface/certificate-props";

export function CertificateModal({ certificates }: { certificates: CertificatesProps[] }) {
  return <ImageGallery contain items={certificates.map(cert => ({ src: cert.img, alt: cert.title, title: cert.title, subtitle: cert.provider }))} />;
}
