import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight, Bathtub, Cat, CaretLeft, CaretRight, Check, Clock, Heart, InstagramLogo, List, MapPin, PawPrint,
  Scissors, Sparkle, Star, WhatsappLogo, X,
} from '@phosphor-icons/react';
import MapPanel from './MapPanel.jsx';
import {
  business, carePillars, experienceSteps, faqs, mapsUrl, plans, portfolio, reviewExamples, reviews,
  reviewsProfileUrl, serviceCategories, specialties, whatsappUrl,
} from './content.js';

const iconProps = { size: 22, weight: 'regular', 'aria-hidden': true };
const pillarIcons = { paw: PawPrint, heart: Heart, sparkle: Sparkle, clock: Clock };
const serviceIcons = { bath: Bathtub, scissors: Scissors, sparkle: Sparkle };
const careHighlights = [
  { label: '1 pet por horário', icon: Clock },
  { label: 'Técnica para cada pelagem', icon: Scissors },
  { label: 'Banho com tempo e calma', icon: Heart },
  { label: 'Avaliação individual', icon: PawPrint },
  { label: '10+ anos de experiência', icon: Sparkle },
  { label: 'Orientação para a rotina', icon: Check },
];

function CareRibbon() {
  const renderItems = (hidden = false) => careHighlights.map(({ label, icon: Icon }) => <span className="care-ribbon-item" key={`${hidden ? 'hidden-' : ''}${label}`} aria-hidden={hidden}>
    <Icon size={20} weight="duotone" aria-hidden="true" /><strong>{label}</strong>
  </span>);
  return <div className="care-ribbon" aria-label="Diferenciais da Doggie">
    <div className="care-ribbon-viewport" tabIndex={0}>
      <div className="care-ribbon-track"><div className="care-ribbon-group">{renderItems()}</div><div className="care-ribbon-group" aria-hidden="true">{renderItems(true)}</div></div>
    </div>
    <p className="sr-only">Diferenciais: {careHighlights.map(({ label }) => label).join(', ')}.</p>
  </div>;
}

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
    let stored;
    try { stored = window.localStorage.getItem('doggie-theme'); } catch { /* Storage can be disabled. */ }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = stored ? stored === 'dark' : prefersDark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    try { window.localStorage.setItem('doggie-theme', next ? 'dark' : 'light'); } catch { /* Keep the theme usable without persistence. */ }
  };
  return <button type="button" role="switch" aria-checked={dark} className={`theme-toggle ${dark ? 'is-dark' : ''}`} onClick={toggle} aria-label="Modo escuro" title={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}>
    <span className="theme-option theme-day" aria-hidden="true"><PawPrint size={19} weight="regular" /><span>Dia</span></span>
    <span className="theme-option theme-night" aria-hidden="true"><Cat size={19} weight="regular" /><span>Noite</span></span>
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
    <div className="header-actions"><ThemeToggle /><button ref={toggle} className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <X {...iconProps} /> : <List {...iconProps} />}</button></div>
    <nav id="navigation" className={open ? 'navigation open' : 'navigation'} aria-label="Navegação principal">
      {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <WhatsAppButton placement="header" />
    </nav>
  </div></header>;
}

function PillarCard({ pillar }) {
  const Icon = pillarIcons[pillar.icon];
  return <article className="pillar-card"><Icon className="pillar-icon" size={30} weight="light" aria-hidden="true" /><h3>{pillar.title}</h3><p>{pillar.description}</p></article>;
}

function ServicesSection() {
  const [selected, setSelected] = useState(serviceCategories[0].title);
  const selectedCategory = serviceCategories.find((category) => category.title === selected) ?? serviceCategories[0];
  return <section id="servicos" className="section services-section"><div className="container" data-reveal>
    <p className="eyebrow">CUIDADOS PENSADOS PARA CADA PET</p><h2>O cuidado certo para<br /><em>cada necessidade.</em></h2>
    <p className="section-intro">Conhecimento técnico, tempo reservado e uma rotina de cuidados construída junto com você.</p>
    <fieldset className="service-picker"><legend>Escolha uma frente de cuidado para conhecer</legend><div className="service-categories">{serviceCategories.map((category) => { const Icon = serviceIcons[category.icon]; return <label className={`service-category service-choice ${selected === category.title ? 'is-selected' : ''}`} key={category.title}>
      <input type="radio" name="service-category" value={category.title} checked={selected === category.title} onChange={() => setSelected(category.title)} aria-label={category.title} />
      <span className="service-choice-top"><Icon className="service-icon" size={36} weight="light" aria-hidden="true" /><span className="service-choice-status">{selected === category.title ? 'Selecionado' : 'Conhecer'}<span className="service-radio-mark"><Check size={13} aria-hidden="true" /></span></span></span>
      <div className="service-category-head"><p className="service-eyebrow">{category.eyebrow}</p><h3>{category.title}</h3><p className="service-description">{category.description}</p></div>
      <ul>{category.items.map((item) => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul>
      {category.title.startsWith('Banho') && <p className="service-note"><strong>Banho terapêutico:</strong> realizado com produtos e protocolos específicos, quando indicados para as necessidades do pet e, quando necessário, sob orientação veterinária.</p>}
      <span className="service-link">Consultar esse cuidado <ArrowUpRight size={18} aria-hidden="true" /></span>
    </label>; })}</div></fieldset>
    <div className="service-action"><p aria-live="polite">Vamos conversar sobre <strong>{selectedCategory.title.toLowerCase()}</strong>?</p><a className="button whatsapp" href={whatsappUrl(selectedCategory.title)} target="_blank" rel="noopener noreferrer" data-cta="services"><WhatsappLogo {...iconProps} /><span>Consultar este cuidado no WhatsApp</span><ArrowUpRight size={18} aria-hidden="true" /></a><small>A Tia Bia te ajuda a escolher o cuidado ideal para o seu pet.</small></div>
  </div></section>;
}

function PlansSection() {
  const [selected, setSelected] = useState(plans[0].name);
  return <section id="planos" className="section plans-section"><div className="container plans-container" data-reveal>
    <p className="eyebrow">CUIDADO QUE VIRA ROTINA</p><h2>Plano de <em>cuidados.</em></h2>
    <p className="section-intro">Mais constância nos cuidados, mais praticidade na rotina e até 18% de economia.</p>
    <fieldset className="plan-picker"><legend>Qual rotina combina com seu pet?</legend><div className="plans-grid">
      {plans.map((plan) => <label className={`plan-card plan-choice ${selected === plan.name ? 'is-selected' : ''}`} key={plan.name}>
        <input type="radio" name="care-plan" value={plan.name} checked={selected === plan.name} onChange={() => setSelected(plan.name)} aria-label={`Plano ${plan.name}`} />
        <span className="plan-choice-top"><PawPrint size={26} weight="duotone" aria-hidden="true" /><span className="plan-choice-status">{selected === plan.name ? 'Selecionado' : 'Selecionar'}<span className="plan-radio-mark"><Check size={13} aria-hidden="true" /></span></span></span>
        <span className="plan-label">PLANO DE CUIDADOS</span><span className="plan-name">{plan.name}</span><span className="plan-description">{plan.description}</span>
        <span className="plan-benefits">{plan.includes.map((item) => <span key={item}><Check size={18} aria-hidden="true" />{item}</span>)}</span>
        <span className="plan-frequency">{plan.frequency}</span><strong>{plan.economy}</strong>
      </label>)}
    </div></fieldset>
    <div className="plan-action"><p aria-live="polite">Vamos conversar sobre o plano <strong>{selected.toLowerCase()}</strong>?</p>
      <a className="button whatsapp" href={whatsappUrl(`Plano de cuidados ${selected}`)} target="_blank" rel="noopener noreferrer" data-cta="plans"><WhatsappLogo {...iconProps} /><span>Quero conhecer o plano {selected.toLowerCase()}</span><ArrowUpRight size={18} aria-hidden="true" /></a>
      <small>A escolha é um primeiro passo. A Tia Bia te ajuda a definir o cuidado ideal.</small>
    </div>
  </div></section>;
}
function PortfolioCarousel({ items }) {
  const track = useRef(null);
  const move = (direction) => {
    const el = track.current;
    if (!el?.firstElementChild) return;
    const gap = parseFloat(getComputedStyle(el).gap || '16') || 16;
    const step = el.firstElementChild.getBoundingClientRect().width + gap;
    const cycle = el.children[items.length]?.offsetLeft ?? 0;
    let next = el.scrollLeft + direction * step;
    if (cycle > 0 && next >= cycle) next -= cycle;
    if (cycle > 0 && next < 0) next += cycle;
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    el.scrollTo({ left: next, behavior });
  };
  const renderCard = (item, index, clone = false) => <figure className="comparison-card" key={`${item.url}-${clone ? 'loop-' : ''}${index}`} role="group" aria-hidden={clone || undefined} aria-label={clone ? undefined : `${index + 1} de ${items.length}: ${item.caption}`}>
    <div className="comparison-pair">
      <div className="comparison-frame"><span className="comparison-label">Antes</span><img src={item.before} alt={clone ? '' : item.beforeAlt} width="900" height="900" loading="lazy" /></div>
      <div className="comparison-frame is-after"><span className="comparison-label">Depois</span><img src={item.after} alt={clone ? '' : item.afterAlt} width="900" height="900" loading="lazy" /></div>
    </div>
    <figcaption><span>{item.caption}</span><a href={item.url} tabIndex={clone ? -1 : undefined} target="_blank" rel="noopener noreferrer" aria-label={`Ver publicação original: ${item.caption}`}><InstagramLogo size={18} aria-hidden="true" /><ArrowUpRight size={16} aria-hidden="true" /></a></figcaption>
  </figure>;
  return <div className="portfolio-carousel" role="region" aria-roledescription="carrossel" aria-label="Trabalhos da Tia Bia">
    <div className="carousel-controls"><span>Feitos com cuidado pela Tia Bia</span><div><button type="button" onClick={() => move(-1)} aria-label="Foto anterior"><CaretLeft size={19} weight="bold" aria-hidden="true" /></button><button type="button" onClick={() => move(1)} aria-label="Próxima foto"><CaretRight size={19} weight="bold" aria-hidden="true" /></button></div></div>
    <div ref={track} className="carousel-track" tabIndex={0} aria-label="Fotos dos trabalhos; arraste para navegar" onKeyDown={(event) => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); } }}>
      {[...items, ...items].map((item, index) => renderCard(item, index % items.length, index >= items.length))}
    </div>
    <a className="text-link" href={business.biaInstagram} target="_blank" rel="noopener noreferrer"><InstagramLogo size={19} aria-hidden="true" />Mais trabalhos da Tia Bia<ArrowUpRight size={18} aria-hidden="true" /></a>
  </div>;
}
function PortfolioSection() {
  return <section id="portfolio" className="section portfolio-section"><div className="container" data-reveal>
    <p className="eyebrow">RESULTADOS REAIS</p><h2>Cuidado que <em>se vê.</em></h2>
    {portfolio.length > 0 ? <PortfolioCarousel items={portfolio} /> : <div className="portfolio-empty"><div className="portfolio-mark"><Sparkle size={34} weight="light" aria-hidden="true" /></div><div><h3>Um portfólio feito de cuidado.</h3><p>Estamos selecionando as fotos finais dos nossos trabalhos. Enquanto isso, conheça o dia a dia da Doggie no Instagram.</p><a className="text-link" href={business.instagram} target="_blank" rel="noopener noreferrer"><InstagramLogo size={19} aria-hidden="true" /> Ver mais trabalhos no Instagram <ArrowUpRight size={18} aria-hidden="true" /></a></div></div>}
  </div></section>;
}

function ReviewCard({ review, preview, hidden = false }) {
  return <figure className="review" aria-hidden={hidden || undefined}>
    <div className="stars" aria-label={`${review.rating} de 5 estrelas`}>{Array.from({ length: review.rating }, (_, i) => <Star key={i} weight="fill" size={18} aria-hidden="true" />)}</div>
    <blockquote>“{review.text}”</blockquote>
    <figcaption><strong>{review.name}</strong><span>{preview ? review.pet : `${review.pet} · Google · ${review.date}`}</span></figcaption>
  </figure>;
}

function ReviewsCarousel({ items, preview }) {
  const track = useRef(null);
  const move = (direction) => {
    const el = track.current;
    if (!el?.firstElementChild) return;
    const gap = parseFloat(getComputedStyle(el).gap || '16') || 16;
    const step = el.firstElementChild.getBoundingClientRect().width + gap;
    const cycle = el.children[items.length]?.offsetLeft ?? 0;
    let next = el.scrollLeft + direction * step;
    if (cycle > 0 && next >= cycle) next -= cycle;
    if (cycle > 0 && next < 0) next += cycle;
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    el.scrollTo({ left: next, behavior });
  };
  return <div className="review-carousel" role="region" aria-roledescription="carrossel" aria-label="Avaliações dos tutores">
    <div className="carousel-controls"><span>{preview ? 'Comentários para conhecer a experiência' : 'O que os tutores comentam'}</span><div><button type="button" onClick={() => move(-1)} aria-label="Comentário anterior"><CaretLeft size={19} weight="bold" aria-hidden="true" /></button><button type="button" onClick={() => move(1)} aria-label="Próximo comentário"><CaretRight size={19} weight="bold" aria-hidden="true" /></button></div></div>
    <div ref={track} className="carousel-track review-track" tabIndex={0} aria-label="Comentários; arraste para navegar" onKeyDown={(event) => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); } }}>
      {[...items, ...items].map((review, index) => <ReviewCard key={`${review.name}-${review.pet ?? review.date}-${index}`} review={review} preview={preview} hidden={index >= items.length} />)}
    </div>
  </div>;
}

function ReviewsSection() {
  const preview = reviews.length === 0;
  const reviewItems = preview ? reviewExamples : reviews;
  return <section id="avaliacoes" className="section reviews-section"><div className="container" data-reveal>
    <p className="eyebrow">CONFIANÇA QUE SE CONSTRÓI</p><h2>Carinho que eles sentem.<br /><em>Confiança que você sente.</em></h2>
    <ReviewsCarousel items={reviewItems} preview={preview} />
    {preview ? <a className="text-link" href={business.instagram} target="_blank" rel="noopener noreferrer"><InstagramLogo size={19} aria-hidden="true" /> Ver nosso dia a dia no Instagram <ArrowUpRight size={18} aria-hidden="true" /></a> : reviewsProfileUrl && <a className="text-link" href={reviewsProfileUrl} target="_blank" rel="noopener noreferrer">Ver avaliações no Google <ArrowUpRight size={18} /></a>}
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
        </div>
        <div className="hero-visual"><figure className="hero-photo"><img src="/images/hero-960.webp" srcSet="/images/hero-640.webp 640w, /images/hero-960.webp 960w" sizes="(min-width: 1024px) 46vw, 90vw" width="960" height="1200" alt="Cão com bandana terracota; foto provisória enquanto a foto real da Tia Bia é produzida" fetchPriority="high" /><figcaption>Imagem provisória</figcaption></figure><div className="care-seal" aria-label="Um pet por horário"><PawPrint weight="light" size={31} aria-hidden="true" /><span>1 pet<br />por horário</span></div><p className="photo-note">tempo para cuidar bem.</p></div>
      </section>

      <CareRibbon />

      <section id="cuidado" className="section care-section"><div className="container" data-reveal><p className="eyebrow">UM JEITO MAIS TRANQUILO DE CUIDAR</p><h2>Um novo padrão de cuidado<br /><em>para o seu pet.</em></h2><p className="section-intro">A experiência Doggie combina conhecimento técnico, avaliação individual e tempo para fazer cada atendimento com calma.</p><div className="pillars-grid">{carePillars.map((pillar) => <PillarCard key={pillar.title} pillar={pillar} />)}</div></div></section>

      <ServicesSection />

      <section className="section price-section"><div className="container price-card" data-reveal><div><p className="eyebrow">TRANSPARÊNCIA PARA DECIDIR</p><h2>Serviços a partir de<br /><em>R$ 65,00</em></h2></div><div className="price-side"><strong>Economize até 18%</strong><p>com nossos Planos de cuidados.</p><small>Os valores podem variar conforme porte, pelagem, serviço e necessidades do pet.</small></div></div></section>

      <PlansSection />

      <PortfolioSection />

      <section id="sobre" className="section about-section"><div className="container about-grid" data-reveal><div className="about-visual"><img src="/images/tia-bia-profile.webp" width="1200" height="1200" alt="Tia Bia, groomer da Doggie Estética Animal" loading="lazy" /><span className="image-caption">Tia Bia · @tiabiatosadora</span></div><div className="about-copy"><p className="eyebrow">A PESSOA POR TRÁS DO CUIDADO</p><h2>Conheça <em>a Tia Bia.</em></h2><p>Com mais de 10 anos de experiência em estética animal, a Tia Bia une prática, conhecimento técnico e atualização constante para tomar decisões adequadas para cada pet.</p><p>Na Doggie, cada atendimento considera características da pelagem, comportamento, rotina e necessidades individuais, buscando sempre o melhor resultado com segurança e qualidade.</p><h3 className="specialties-title">Especializada em:</h3><ul className="specialties">{specialties.map((item) => <li key={item}><Check {...iconProps} />{item}</li>)}</ul><a className="text-link bia-instagram" href={business.biaInstagram} target="_blank" rel="noopener noreferrer"><InstagramLogo size={20} aria-hidden="true" />Tia Bia · @tiabiatosadora<ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>

      <section id="experiencia" className="section experience-section"><div className="container" data-reveal><p className="eyebrow">DO PRIMEIRO OI À FINALIZAÇÃO</p><h2>Sua experiência<br /><em>na Doggie.</em></h2><div className="steps">{experienceSteps.map((step) => <article key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3>{step.badge && <span className="step-badge">{step.badge}</span>}<p>{step.description}</p></article>)}</div></div></section>

      <ReviewsSection />

      <section id="duvidas" className="section faq-section"><div className="container faq-grid" data-reveal><div><p className="eyebrow">COMBINE TUDO COM TRANQUILIDADE</p><h2>O que você<br /><em>precisa saber.</em></h2></div><div className="faqs">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span className="faq-symbol" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>

      <section id="localizacao" className="section location-section"><div className="container location-grid" data-reveal><div className="location-copy"><p className="eyebrow"><MapPin size={15} weight="duotone" aria-hidden="true" /> PERTINHO DE VOCÊ</p><h2>Onde <em>estamos.</em></h2><div className="location-address-block"><span className="location-pin"><MapPin size={24} weight="duotone" aria-hidden="true" /></span><div><span className="location-label">Endereço</span><strong>R. Heitor de Souza, 190</strong><p>Assunção · São Bernardo do Campo, SP</p></div></div><p className="location-note"><Clock size={18} weight="duotone" aria-hidden="true" /> Atendimento com horário agendado</p><div className="location-directions"><a className="button outline" href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin {...iconProps} /> Abrir no Google Maps <ArrowUpRight size={18} aria-hidden="true" /></a><a className="button outline" href={business.wazeUrl} target="_blank" rel="noopener noreferrer"><MapPin {...iconProps} /> Abrir no Waze <ArrowUpRight size={18} aria-hidden="true" /></a></div></div><MapPanel /></div></section>

      <section className="closing"><div className="container"><PawPrint size={44} weight="light" aria-hidden="true" /><h2>Pronto para proporcionar<br /><em>um novo padrão de cuidado ao seu pet?</em></h2><p>Fale com a Tia Bia e consulte um horário pelo WhatsApp.</p><WhatsAppButton placement="closing" /></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-main">
      <div className="footer-brand"><Brand /><p>Cuidado que encanta, com tempo e atenção para cada pet.</p><a className="footer-address" href="#localizacao">{business.street}<br />{business.district} · {business.city}, {business.state}</a></div>
      <nav className="footer-nav" aria-label="Links do rodapé"><strong>Explore</strong><a href="#cuidado">Nosso cuidado</a><a href="#servicos">Serviços</a><a href="#planos">Planos</a><a href="#sobre">A Tia Bia</a><a href="#duvidas">Dúvidas</a></nav>
      <div className="footer-contact"><strong>Fale com a gente</strong><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={19} aria-hidden="true" />{business.displayPhone}</a><a href="#localizacao">Como chegar <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      <div className="footer-social"><strong>Siga de perto</strong><a href={business.instagram} target="_blank" rel="noopener noreferrer"><InstagramLogo size={19} aria-hidden="true" />@doggie.esteticapet</a><a href={business.biaInstagram} target="_blank" rel="noopener noreferrer"><InstagramLogo size={19} aria-hidden="true" />@tiabiatosadora</a></div>
    </div><div className="footer-bottom"><span>© 2026 Doggie Estética Animal. Todos os direitos reservados.</span><span>{business.slogan}</span></div></div></footer>
    <div className="mobile-cta"><WhatsAppButton placement="mobile-fixed" /></div>
  </>;
}
