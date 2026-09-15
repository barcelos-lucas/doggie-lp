import { useEffect, useRef, useState } from 'react';
import { Bone, Check, Cookie, GearSix, Heart, PawPrint, ShieldCheck, X } from '@phosphor-icons/react';

const STORAGE_KEY = 'doggie-cookie-consent';

function readConsent() {
  if (typeof window === 'undefined') return { decided: true, preferences: false };
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    return saved?.version === 1 ? { decided: true, preferences: Boolean(saved.preferences) } : { decided: false, preferences: true };
  } catch {
    return { decided: false, preferences: true };
  }
}

function persistConsent(preferences) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, necessary: true, preferences, updatedAt: new Date().toISOString() }));
    if (preferences) {
      window.localStorage.setItem('doggie-theme', document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
    } else {
      window.localStorage.removeItem('doggie-theme');
      document.documentElement.dataset.theme = 'light';
    }
  } catch { /* The choice still applies to the current visit when storage is unavailable. */ }
  window.dispatchEvent(new CustomEvent('doggie:theme-change', { detail: document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light' }));
}

export function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent('doggie:open-cookie-preferences'));
}

export default function CookieConsent() {
  const [consent, setConsent] = useState({ decided: true, preferences: false });
  const [view, setView] = useState('banner');
  const [preferences, setPreferences] = useState(true);
  const closeButton = useRef(null);

  useEffect(() => {
    const saved = readConsent();
    setConsent(saved);
    setPreferences(saved.preferences);
    const open = () => { setView('preferences'); setConsent((current) => ({ ...current, decided: false })); };
    window.addEventListener('doggie:open-cookie-preferences', open);
    return () => window.removeEventListener('doggie:open-cookie-preferences', open);
  }, []);

  useEffect(() => {
    if (!consent.decided && view !== 'banner') closeButton.current?.focus();
  }, [consent.decided, view]);

  const choose = (allowPreferences) => {
    persistConsent(allowPreferences);
    setPreferences(allowPreferences);
    setConsent({ decided: true, preferences: allowPreferences });
  };

  if (consent.decided) return null;

  if (view === 'banner') return <div className="cookie-welcome-backdrop"><aside className="cookie-banner" aria-labelledby="cookie-welcome-title">
    <div className="cookie-pet-details" aria-hidden="true"><PawPrint size={34} weight="duotone" /><Bone size={31} weight="duotone" /><Heart size={25} weight="fill" /></div>
    <div className="cookie-mark"><Cookie size={28} weight="duotone" aria-hidden="true" /></div>
    <div className="cookie-copy"><span className="cookie-kicker">UMA PAUSA PARA O PETISCO</span><strong id="cookie-welcome-title">Cuidado com seu pet.<br /> <em>Respeito pelos seus dados.</em></strong><p>Usamos o armazenamento necessário para o site funcionar e, com sua escolha, para lembrar suas preferências.</p><button type="button" className="cookie-text-button" onClick={() => setView('terms')}>Termos e privacidade</button></div>
    <div className="cookie-actions"><button type="button" className="button cookie-primary" onClick={() => choose(true)}>Aceitar todos</button><button type="button" className="button cookie-secondary" onClick={() => choose(false)}>Somente necessários</button><button type="button" className="cookie-configure" onClick={() => setView('preferences')}><GearSix size={18} aria-hidden="true" />Configurar preferências</button></div>
  </aside></div>;

  return <div className="cookie-backdrop">
    <section className="cookie-dialog" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <header><div className="cookie-dialog-icon"><ShieldCheck size={28} weight="duotone" aria-hidden="true" /></div><div><span>Privacidade Doggie</span><h2 id="cookie-title">{view === 'terms' ? 'Termos e privacidade' : 'Escolha suas preferências'}</h2></div><button ref={closeButton} type="button" className="cookie-close" aria-label="Fechar" onClick={() => { const saved = readConsent(); if (saved.decided) setConsent(saved); else setView('banner'); }}><X size={20} aria-hidden="true" /></button></header>
      {view === 'terms' ? <div className="cookie-legal">
        <p><strong>Como usamos seus dados</strong> A LP não solicita cadastro. Ao tocar em WhatsApp, Maps, Waze ou Instagram, você segue para serviços externos, sujeitos às políticas dessas plataformas.</p>
        <p><strong>Armazenamento local</strong> Guardamos sua escolha de privacidade e, se autorizado, sua preferência de tema. Esses dados ficam no seu navegador.</p>
        <p><strong>Contato</strong> As informações enviadas pelo WhatsApp são usadas para responder dúvidas e organizar o atendimento solicitado.</p>
        <button type="button" className="cookie-back" onClick={() => setView('preferences')}>Voltar às preferências</button>
      </div> : <div className="cookie-options">
        <div className="cookie-option"><span><Check size={18} weight="bold" aria-hidden="true" /></span><div><strong>Necessários</strong><p>Registram sua escolha de privacidade e mantêm recursos básicos do site.</p></div><small>Sempre ativos</small></div>
        <label className="cookie-option"><span><GearSix size={18} aria-hidden="true" /></span><div><strong>Preferências</strong><p>Permitem lembrar o modo claro ou escuro escolhido por você.</p></div><input type="checkbox" checked={preferences} onChange={(event) => setPreferences(event.target.checked)} aria-label="Permitir cookies de preferências" /></label>
      </div>}
      <footer><button type="button" className="button cookie-secondary" onClick={() => choose(false)}>Somente necessários</button><button type="button" className="button cookie-primary" onClick={() => choose(view === 'terms' ? true : preferences)}>Salvar escolha</button></footer>
    </section>
  </div>;
}
