import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight, Bathtub, Cat, Check, Clock, Heart, InstagramLogo, List, MapPin, PawPrint,
  Scissors, Sparkle, Star, WhatsappLogo, X,
} from '@phosphor-icons/react';
import MapPanel from './MapPanel.jsx';
import {
  business, carePillars, experienceSteps, faqs, mapsUrl, plans, portfolio, reviews,
  reviewsProfileUrl, serviceCategories, specialties, trustItems, whatsappUrl,
} from './content.js';

const iconProps = { size: 22, weight: 'regular', 'aria-hidden': true };
const pillarIcons = { paw: PawPrint, heart: Heart, sparkle: Sparkle, clock: Clock };
const serviceIcons = { bath: Bathtub, scissors: Scissors, sparkle: Sparkle };

function WhatsAppButton({ intent = 'booking', className = '', placement = 'page' }) {
  const label = intent === 'plans' ? 'Quero conhecer os planos' : 'Consultar horário no WhatsApp';
  return <a className={`button whatsapp ${className}`} href={whatsappUrl(intent)} target="_blank" rel="noopener noreferrer" data-cta={placement}>
    <WhatsappLogo {...iconProps} /> <span>{label}</span><ArrowUpRight size={18} aria-hidden="true" />
  </a>;
}

function Brand() {
  return <a href="#inicio" className="brand" aria-label="Doggie Estética Animal, início">
    <img src="/images/brand-icon.webp" width="48" height="48" alt="" />
    <span><strong>doggie<span className="brand-period">.</span></strong><small>ESTÉTICA ANIMAL</small></span>
  </a>;
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = window.localStorage.getItem('doggie-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = stored ? stored === 'dark' : prefersDark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    window.localStorage.setItem('doggie-theme', next ? 'dark' : 'light');
  };
  return <button type="button" className={`theme-toggle ${dark ? 'is-dark' : ''}`} onClick={toggle} aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'} title={dark ? 'Modo claro' : 'Modo escuro'}>
    <span className="theme-toggle-icon" aria-hidden="true">{dark ? <Cat size={26} weight="regular" /> : <PawPrint size={26} weight="regular" />}</span>
    <span className="theme-toggle-copy"><strong>{dark ? 'Noite' : 'Dia'}</strong><small>{dark ? 'modo escuro' : 'modo claro'}</small></span>
    <span className="theme-toggle-track" aria-hidden="true"><span /></span>
  </button>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const close = (event) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  const links = [['Cuidado', 'cuidado'], ['Serviços', 'servicos'], ['Planos', 'planos'], ['A Tia Bia', 'sobre'], ['Dúvidas', 'duvidas']];
  return <header className="header"><div className="container header-inner"><Brand />
    <button ref={toggle} className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <X {...iconProps} /> : <List {...iconProps} />}</button>
    <nav id="navigation" className={open ? 'navigation open' : 'navigation'} aria-label="Navegação principal">
      {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <ThemeToggle />
      <WhatsAppButton placement="header" />
    </nav>
  </div></header>;
}

function PillarCard({ pillar }) {
  const Icon = pillarIcons[pillar.icon];
  return <article className="pillar-card"><Icon className="pillar-icon" size={30} weight="light" aria-hidden="true" /><h3>{pillar.title}</h3><p>{pillar.description}</p></article>;
}

function ServicesSection() {
  return <section id="servicos" className="section services-section"><div className="container" data-reveal>
    <p className="eyebrow">CUIDADOS PENSADOS PARA CADA PET</p><h2>O cuidado certo para<br /><em>cada necessidade.</em></h2>
    <p className="section-intro">Conhecimento técnico, tempo reservado e uma rotina de cuidados construída junto com você.</p>
    <div className="service-categories">{serviceCategories.map((category) => { const Icon = serviceIcons[category.icon]; return <article className="service-category" key={category.title}>
      <div className="service-category-head"><Icon className="service-icon" size={36} weight="light" aria-hidden="true" /><p className="service-eyebrow">{category.eyebrow}</p><h3>{category.title}</h3><p className="service-description">{category.description}</p></div>
      <ul>{category.items.map((item) => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul>
      {category.title.startsWith('Banho') && <p className="service-note"><strong>Banho terapêutico:</strong> realizado com produtos e protocolos específicos, quando indicados para as necessidades do pet e, quando necessário, sob orientação veterinária.</p>}
      <a className="service-link" href={whatsappUrl(category.title)} target="_blank" rel="noopener noreferrer">Consultar esse cuidado <ArrowUpRight size={18} aria-hidden="true" /></a>
    </article>; })}</div>
  </div></section>;
}

function PortfolioSection() {
  return <section id="portfolio" className="section portfolio-section"><div className="container" data-reveal>
    <p className="eyebrow">RESULTADOS REAIS</p><h2>Cuidado que <em>se vê.</em></h2>
    {portfolio.length > 0 ? <div className="portfolio-grid">{portfolio.map((item) => <figure key={item.src}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption>{item.caption}</figcaption></figure>)}</div> : <div className="portfolio-empty"><div className="portfolio-mark"><Sparkle size={34} weight="light" aria-hidden="true" /></div><div><h3>Um portfólio feito de cuidado.</h3><p>Estamos selecionando as fotos finais dos nossos trabalhos. Enquanto isso, conheça o dia a dia da Doggie no Instagram.</p><a className="text-link" href={business.instagram} target="_blank" rel="noopener noreferrer"><InstagramLogo size={19} aria-hidden="true" /> Ver mais trabalhos no Instagram <ArrowUpRight size={18} aria-hidden="true" /></a></div></div>}
  </div></section>;
}

function ReviewsSection() {
  return <section id="avaliacoes" className="section reviews-section"><div className="container" data-reveal>
    <p className="eyebrow">CONFIANÇA QUE SE CONSTRÓI</p><h2>Carinho que eles sentem.<br /><em>Confiança que você sente.</em></h2>
    {reviews.length > 0 ? <><div className="review-grid">{reviews.map((review) => <figure className="review" key={`${review.name}-${review.date}`}><div className="stars" aria-label={`${review.rating} de 5 estrelas`}>{Array.from({ length: review.rating }, (_, i) => <Star key={i} weight="fill" size={18} aria-hidden="true" />)}</div><blockquote>“{review.text}”</blockquote><figcaption><strong>{review.name}</strong><a href={review.url} target="_blank" rel="noopener noreferrer">Google · {review.date}<ArrowUpRight size={14} aria-hidden="true" /></a></figcaption></figure>)}</div>{reviewsProfileUrl && <a className="text-link" href={reviewsProfileUrl} target="_blank" rel="noopener noreferrer">Ver avaliações no Google <ArrowUpRight size={18} /></a>}</> : <div className="review-empty"><Heart size={34} weight="light" aria-hidden="true" /><div><h3>Avaliações reais em breve.</h3><p>Estamos reunindo os depoimentos dos tutores que já conhecem o cuidado da Doggie. Veja nosso dia a dia e fale com a gente enquanto isso.</p><a className="text-link" href={business.instagram} target="_blank" rel="noopener noreferrer"><InstagramLogo size={19} aria-hidden="true" /> Ver nosso Instagram <ArrowUpRight size={18} aria-hidden="true" /></a></div></div>}
  </div></section>;
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <Header />
    <main id="conteudo">
      <section id="inicio" className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">DOGGIE ESTÉTICA ANIMAL</p>
          <h1>cuidado <em>que encanta</em></h1>
          <p className="hero-description">Atendimento individual, técnica e tranquilidade para cuidar de cada pet de forma única.</p>
          <WhatsAppButton placement="hero" />
          <ul className="trust-list">{trustItems.map((item) => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul>
        </div>
        <div className="hero-visual"><figure className="hero-photo"><img src="/images/hero-960.webp" srcSet="/images/hero-640.webp 640w, /images/hero-960.webp 960w" sizes="(min-width: 1024px) 46vw, 90vw" width="960" height="1200" alt="Cão com bandana terracota; foto provisória enquanto a foto real da Tia Bia é produzida" fetchPriority="high" /><figcaption>Imagem provisória</figcaption></figure><div className="care-seal" aria-label="Um pet por horário"><PawPrint weight="light" size={31} aria-hidden="true" /><span>1 pet<br />por horário</span></div><p className="photo-note">tempo para cuidar bem.</p></div>
      </section>

      <div className="care-ribbon"><div className="container"><span><PawPrint {...iconProps} /> Técnica</span><span><Heart {...iconProps} /> Tranquilidade</span><span><Sparkle {...iconProps} /> Cuidado individual</span></div></div>

      <section id="cuidado" className="section care-section"><div className="container" data-reveal><p className="eyebrow">UM JEITO MAIS TRANQUILO DE CUIDAR</p><h2>Um novo padrão de cuidado<br /><em>para o seu pet.</em></h2><p className="section-intro">A experiência Doggie combina conhecimento técnico, avaliação individual e tempo para fazer cada atendimento com calma.</p><div className="pillars-grid">{carePillars.map((pillar) => <PillarCard key={pillar.title} pillar={pillar} />)}</div></div></section>

      <ServicesSection />

      <section className="section price-section"><div className="container price-card" data-reveal><div><p className="eyebrow">TRANSPARÊNCIA PARA DECIDIR</p><h2>Serviços a partir de<br /><em>R$ 65,00</em></h2></div><div className="price-side"><strong>Economize até 18%</strong><p>com nossos Planos de cuidados.</p><small>Os valores podem variar conforme porte, pelagem, serviço e necessidades do pet.</small></div></div></section>

      <section id="planos" className="section plans-section"><div className="container" data-reveal><p className="eyebrow">CUIDADO QUE VIRA ROTINA</p><h2>Plano de <em>cuidados.</em></h2><p className="section-intro">Mais constância nos cuidados, mais praticidade na rotina e até 18% de economia.</p><div className="plans-grid">{plans.map((plan) => <article className="plan-card" key={plan.name}><span className="plan-label">PLANO</span><h3>{plan.name}</h3><p>{plan.description}</p><strong>{plan.economy}</strong></article>)}</div><WhatsAppButton intent="plans" placement="plans" /></div></section>

      <PortfolioSection />

      <section id="sobre" className="section about-section"><div className="container about-grid" data-reveal><div className="about-visual"><img src="/images/care-960.webp" width="960" height="960" alt="Imagem provisória de um cão recebendo cuidado durante a escovação" loading="lazy" /><span className="image-caption">Foto da Tia Bia em produção</span></div><div className="about-copy"><p className="eyebrow">A PESSOA POR TRÁS DO CUIDADO</p><h2>Conheça <em>a Tia Bia.</em></h2><p>Com mais de 10 anos de experiência em estética animal, a Tia Bia une prática, conhecimento técnico e atualização constante para tomar decisões adequadas para cada pet.</p><p>Na Doggie, cada atendimento considera características da pelagem, comportamento, rotina e necessidades individuais, buscando sempre o melhor resultado com segurança e qualidade.</p><h3 className="specialties-title">Especializada em:</h3><ul className="specialties">{specialties.map((item) => <li key={item}><Check {...iconProps} />{item}</li>)}</ul></div></div></section>

      <section id="experiencia" className="section experience-section"><div className="container" data-reveal><p className="eyebrow">DO PRIMEIRO OI À FINALIZAÇÃO</p><h2>Sua experiência<br /><em>na Doggie.</em></h2><div className="steps">{experienceSteps.map((step) => <article key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3>{step.badge && <span className="step-badge">{step.badge}</span>}<p>{step.description}</p></article>)}</div></div></section>

      <ReviewsSection />

      <section id="duvidas" className="section faq-section"><div className="container faq-grid" data-reveal><div><p className="eyebrow">COMBINE TUDO COM TRANQUILIDADE</p><h2>O que você<br /><em>precisa saber.</em></h2></div><div className="faqs">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span className="faq-symbol" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>

      <section id="localizacao" className="section location-section"><div className="container location-grid" data-reveal><div className="location-copy"><p className="eyebrow">PERTINHO DE VOCÊ</p><h2>Onde <em>estamos.</em></h2><p className="location-place">Assunção — São Bernardo do Campo, SP</p><p className="location-note">Atendimento com horário agendado.</p><a className="button outline" href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin {...iconProps} /> Abrir no Google Maps <ArrowUpRight size={18} aria-hidden="true" /></a></div><MapPanel /></div></section>

      <section className="closing"><div className="container"><PawPrint size={44} weight="light" aria-hidden="true" /><h2>Pronto para proporcionar<br /><em>um novo padrão de cuidado?</em></h2><p>Fale com a Tia Bia e consulte um horário pelo WhatsApp.</p><WhatsAppButton placement="closing" /></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-top"><Brand /><p>Assunção — São Bernardo do Campo, SP</p><div className="footer-contact"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={19} aria-hidden="true" />{business.displayPhone}</a><a href={business.instagram} target="_blank" rel="noopener noreferrer"><InstagramLogo size={19} aria-hidden="true" />@doggie.esteticapet</a></div></div><div className="footer-bottom"><span>{business.name}</span><span>{business.slogan}</span></div></div></footer>
    <div className="mobile-cta"><WhatsAppButton placement="mobile-fixed" /></div>
  </>;
}
