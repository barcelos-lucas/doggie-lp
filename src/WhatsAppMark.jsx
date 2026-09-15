import { PawPrint, WhatsappLogo } from '@phosphor-icons/react';

export default function WhatsAppMark() {
  return <span className="whatsapp-mark" aria-hidden="true">
    <WhatsappLogo className="whatsapp-mark-logo" size={22} />
    <PawPrint className="whatsapp-mark-paw" size={22} weight="fill" />
  </span>;
}
