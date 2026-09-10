import { CertificateModal } from "@/components/ui/modal/certificate-modal";
import { certificates } from "@/lib/values/certificates";

export default function CertificatesContainer() {
  return (
    <section aria-labelledby="page-title">
      <CertificateModal certificates={certificates} />
    </section>
  );
}
