import GlassMaterial from './GlassMaterial.jsx';
import { useEffect, useState } from 'react';
import { ArrowClockwise, Bone, Cat, Dog, House, PawPrint, TennisBall, WhatsappLogo } from '@phosphor-icons/react';
import { whatsappUrl } from './content.js';

const messages = {
  404: [
    { eyebrow: 'ESSA PÁGINA SAIU PARA PASSEAR', title: 'Perdemos o faro', emphasis: 'desse caminho.', description: 'O endereço pode ter mudado, mas a Doggie continua logo ali.' },
    { eyebrow: 'NENHUMA PISTA POR AQUI', title: 'Essa página brincou', emphasis: 'de se esconder.', description: 'Procuramos em cada cantinho e ela não apareceu.' },
    { eyebrow: 'CAMINHO NÃO ENCONTRADO', title: 'A coleira escapou', emphasis: 'desse endereço.', description: 'Vamos voltar para um lugar conhecido e tentar outro caminho.' },
    { eyebrow: 'OPS, RASTRO INTERROMPIDO', title: 'Seguimos as patinhas,', emphasis: 'mas elas sumiram.', description: 'Talvez o link tenha mudado ou essa página não exista mais.' },
    { eyebrow: 'PÁGINA FORA DO LUGAR', title: 'Até o melhor faro', emphasis: 'se confunde às vezes.', description: 'Volte ao início ou chame a Doggie para encontrar o que precisa.' },
  ],
  500: [
    { eyebrow: 'TIVEMOS UM PEQUENO IMPREVISTO', title: 'Ops, o sistema', emphasis: 'embaraçou os pelos.', description: 'Já estamos cuidando disso. Tente novamente ou fale com a Tia Bia.' },
    { eyebrow: 'UMA PAUSA PARA DESEMBARAÇAR', title: 'Deu um nozinho', emphasis: 'aqui no sistema.', description: 'Tente de novo em instantes ou fale com a Tia Bia pelo WhatsApp.' },
    { eyebrow: 'O SISTEMA PRECISA DE UM BANHO', title: 'Algo saiu', emphasis: 'um pouco do lugar.', description: 'Uma nova tentativa costuma resolver. Se precisar, a Tia Bia está por perto.' },
    { eyebrow: 'PEQUENO IMPREVISTO TÉCNICO', title: 'A máquina parou', emphasis: 'no meio da tosa.', description: 'Estamos ajeitando tudo. Você pode tentar novamente ou chamar no WhatsApp.' },
    { eyebrow: 'JÁ ESTAMOS CUIDANDO DISSO', title: 'Essa página precisa', emphasis: 'de um carinho extra.', description: 'Tente mais uma vez ou converse diretamente com a Tia Bia.' },
  ],
};

function pickNextMessage(code, total) {
  try {
    const key = `doggie-error-message-${code}`;
    const previous = Number(window.sessionStorage.getItem(key));
    const random = window.crypto?.getRandomValues ? window.crypto.getRandomValues(new Uint32Array(1))[0] : Date.now();
    const hasPrevious = window.sessionStorage.getItem(key) !== null && Number.isInteger(previous) && previous >= 0 && previous < total;
    const next = hasPrevious ? (previous + 1 + random % (total - 1)) % total : random % total;
    window.sessionStorage.setItem(key, String(next));
    return next;
  } catch {
    return Math.floor(Math.random() * total);
  }
}

export default function ErrorPage({ code }) {
  const missing = code === 404;
  const options = messages[code];
  const [messageIndex, setMessageIndex] = useState(0);
  useEffect(() => setMessageIndex(pickNextMessage(code, options.length)), [code, options.length]);
  const message = options[messageIndex];

  return <main className="error-page">
    <div className="pet-doodles" aria-hidden="true">
      <span className="pet-doodle pet-doodle-one"><PawPrint size={42} weight="duotone" /></span>
      <span className="pet-doodle pet-doodle-two"><Bone size={39} weight="duotone" /></span>
      <span className="pet-doodle pet-doodle-three"><TennisBall size={34} weight="duotone" /></span>
      <span className="pet-doodle pet-doodle-four"><Dog size={46} weight="duotone" /></span>
      <span className="pet-doodle pet-doodle-five"><Cat size={40} weight="duotone" /></span>
      <span className="pet-doodle pet-doodle-six"><PawPrint size={28} weight="fill" /></span>
    </div>
    <section className="error-card">
      <a href="/" className="error-brand"><img src="/images/brand-icon.webp" width="52" height="52" alt="" /><span>doggie<strong>.</strong></span></a>
      <div className="error-code" aria-label={`Erro ${code}`}><span>{code}</span></div>
      <p className="eyebrow">{message.eyebrow}</p>
      <h1>{message.title}<br /><em>{message.emphasis}</em></h1>
      <p className="error-description">{message.description}</p>
      <div className="error-actions">{missing ? <><a className="button cookie-primary" href="/"><House size={19} aria-hidden="true" />Voltar ao início</a><a className="button whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><GlassMaterial /><WhatsappLogo size={19} aria-hidden="true" /><span>Falar com a Doggie</span></a></> : <><button type="button" className="button cookie-primary" onClick={() => window.location.reload()}><ArrowClockwise size={19} aria-hidden="true" />Tentar novamente</button><a className="button whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><GlassMaterial /><WhatsappLogo size={19} aria-hidden="true" /><span>Falar com a Tia Bia</span></a><a className="error-home-link" href="/"><House size={16} aria-hidden="true" />Voltar ao início</a></>}</div>
      <p className="error-note"><PawPrint size={16} weight="fill" aria-hidden="true" /> cuidado que encanta, até quando algo sai do lugar.</p>
    </section>
  </main>;
}
