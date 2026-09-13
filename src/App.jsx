import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, Bathtub, Check, Heart, InstagramLogo, MapPin, List, X, PawPrint, Scissors, Sparkle, Star, WhatsappLogo } from '@phosphor-icons/react';
import MapPanel from './MapPanel.jsx';
import { business, mapsUrl, whatsappUrl, services, reviews, reviewsProfileUrl, faqs } from './content.js';

const iconProps = { size: 22, weight: 'regular', 'aria-hidden': true };
const serviceIcons = { bath: Bathtub, scissors: Scissors, sparkle: Sparkle };

function WhatsAppButton({ service, className = '', placement = 'page' }) {
  return <a className={`button whatsapp ${className}`} href={whatsappUrl(service)} target="_blank" rel="noopener noreferrer" data-cta={placement}>
    <WhatsappLogo {...iconProps} /> <span>Chamar no WhatsApp</span><ArrowUpRight size={18} aria-hidden="true" />
  </a>;
}

function Brand() {
  return <a href="#inicio" className="brand" aria-label="Doggie Estética Animal, início"><img src="/images/brand-icon.webp" width="48" height="48" alt="" /><span><strong>doggie<span className="brand-period">.</span></strong><small>ESTÉTICA ANIMAL</small></span></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    if (!open) return;
    const close = (event) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  return <header className="header"><div className="container header-inner"><Brand />
    <button ref={toggle} className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <X {...iconProps} /> : <List {...iconProps} />}</button>
    <nav id="navigation" className={open ? 'navigation open' : 'navigation'} aria-label="Navegação principal">
      {[['Cuidados', 'cuidados'], ['A Doggie', 'sobre'], ['Avaliações', 'avaliacoes'], ['Onde estamos', 'localizacao']].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <WhatsAppButton placement="header" />
    </nav>
  </div></header>;
}

function ReviewSection() {
  return <section id="avaliacoes" className="section reviews-section"><div className="container">
    <p className="eyebrow">CONFIANÇA QUE SE CONSTRÓI</p><h2>Carinho que eles sentem.<br /><em>Confiança que você sente.</em></h2>
    {reviews.length > 0 ? <><div className="review-grid">{reviews.map((review) => <figure className="review" key={`${review.name}-${review.date}`}><div className="stars" aria-label={`${review.rating} de 5 estrelas`}>{Array.from({ length: review.rating }, (_, i) => <Star key={i} weight="fill" size={18} aria-hidden="true" />)}</div><blockquote>“{review.text}”</blockquote><figcaption><strong>{review.name}</strong><a href={review.url} target="_blank" rel="noopener noreferrer">Google · {review.date}<ArrowUpRight size={14} aria-hidden="true" /></a></figcaption></figure>)}</div>{reviewsProfileUrl && <a className="text-link" href={reviewsProfileUrl} target="_blank" rel="noopener noreferrer">Ver avaliações no Google <ArrowUpRight size={18} /></a>}</> : <div className="review-empty"><Heart size={34} weight="light" aria-hidden="true" /><div><h3>Conheça a Doggie mais de perto.</h3><p>Um bom cuidado começa com confiança. Veja nosso dia a dia e converse com a gente antes de agendar.</p><a className="text-link" href={business.instagram} target="_blank" rel="noopener noreferrer"><InstagramLogo size={19} aria-hidden="true" /> Ver nosso Instagram <ArrowUpRight size={18} aria-hidden="true" /></a></div></div>}
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
          <p className="eyebrow"><MapPin size={15} aria-hidden="true" /> ASSUNÇÃO · SÃO BERNARDO DO CAMPO</p>
          <h1>Bom pra ele.<br /><em>Bom pro seu coração.</em></h1>
          <p className="hero-description">Banho, tosa e um cuidado cheio de carinho.<br className="desktop-break" /> Porque ele é parte da sua família. E da nossa também.</p>
          <WhatsAppButton placement="hero" />
          <a className="hero-secondary" href="#cuidados">Conheça nossos cuidados <ArrowRight size={17} aria-hidden="true" /></a>
          <div className="hero-note"><Heart weight="light" size={21} aria-hidden="true" /><span>Pequenos detalhes. Muito amor envolvido.</span></div>
        </div>
        <div className="hero-visual">
          <figure className="hero-photo"><img src="/images/hero-960.webp" srcSet="/images/hero-640.webp 640w, /images/hero-960.webp 960w" sizes="(min-width: 1024px) 46vw, 90vw" width="960" height="1200" alt="Shih-tzu de pelagem macia com bandana terracota; imagem ilustrativa" fetchPriority="high" /><figcaption>Imagem ilustrativa</figcaption></figure>
          <div className="care-seal" aria-label="Cuidado de verdade"><PawPrint weight="light" size={35} aria-hidden="true" /><span>cuidado<br />de verdade</span></div>
          <p className="photo-note">O melhor look é estar bem.</p>
        </div>
      </section>

      <div className="care-ribbon"><div className="container"><span><PawPrint {...iconProps} /> Banho & tosa</span><span><Heart {...iconProps} /> Carinho em cada detalhe</span><span><Sparkle {...iconProps} /> Bem-estar em primeiro lugar</span></div></div>

      <section id="cuidados" className="section services-section"><div className="container" data-reveal>
        <p className="eyebrow">DO BANHO AO ÚLTIMO LACINHO</p><h2>Ele merece esse cuidado.<br /><em>E um pouquinho de mimo.</em></h2>
        <p className="section-intro">Uma rotina de higiene e beleza pensada para o seu melhor amigo.</p>
        <div className="services">{services.map((service) => { const Icon = serviceIcons[service.icon]; return <article className="service" key={service.name}><Icon className="service-icon" size={36} weight="light" aria-hidden="true" /><h3>{service.name}</h3><p>{service.description}</p><span className="service-detail">{service.detail}</span><a href={whatsappUrl(service.name)} target="_blank" rel="noopener noreferrer" aria-label={`Consultar ${service.name} pelo WhatsApp`} className="service-link">Consultar esse cuidado <ArrowUpRight size={19} aria-hidden="true" /></a></article>; })}</div>
        <p className="service-bottom"><Check size={18} aria-hidden="true" /> Orçamento de acordo com o porte, a pelagem e o cuidado que ele precisa.</p>
      </div></section>

      <section id="sobre" className="section about-section"><div className="container about-grid" data-reveal>
        <div className="about-visual"><img src="/images/care-960.webp" width="960" height="960" alt="Detalhe ilustrativo de um cão recebendo carinho durante a escovação" loading="lazy" /><span className="image-caption">Imagem ilustrativa</span></div>
        <div className="about-copy"><p className="eyebrow">PODE CHAMAR DE TIA BIA</p><h2>Pra você, ele é família.<br /><em>Pra gente, também.</em></h2><p>A Doggie é um espaço de banho, tosa e estética para cães no bairro Assunção. Aqui, o cuidado vai além de deixar a pelagem bonita.</p><p>A gente quer conhecer o seu cão, entender suas necessidades e cuidar de cada detalhe com atenção, respeito e carinho.</p><ul className="values"><li><Check {...iconProps} /> Atenção às necessidades de cada cão</li><li><Check {...iconProps} /> Cuidado com higiene e conforto</li><li><Check {...iconProps} /> Uma conversa próxima com você</li></ul><a className="text-link" href={business.instagram} target="_blank" rel="noopener noreferrer">Conheça nosso dia a dia <ArrowUpRight size={20} aria-hidden="true" /></a></div>
      </div></section>

      <ReviewSection />

      <section className="section first-visit"><div className="container" data-reveal><h2>O primeiro encontro<br /><em>começa com um oi.</em></h2><div className="steps"><div><span className="step-number">01</span><h3>Conte sobre seu cão</h3><p>O nome, o porte, a pelagem e tudo que precisamos saber para recebê-lo.</p></div><div><span className="step-number">02</span><h3>Combine o cuidado</h3><p>A gente conversa sobre o serviço, o valor e o melhor horário para vocês.</p></div><div><span className="step-number">03</span><h3>Venha conhecer a Doggie</h3><p>O próximo passo é aqui, com cuidado e atenção para o seu melhor amigo.</p></div></div><WhatsAppButton placement="first-visit" /></div></section>

      <section id="localizacao" className="section location-section"><div className="container location-grid" data-reveal><div className="location-copy"><p className="eyebrow">PERTINHO DE VOCÊ</p><h2>Nosso endereço.<br /><em>O próximo passeio dele.</em></h2><address><strong>{business.street}</strong><br />{business.district} · {business.city}, {business.state}<br />CEP {business.postalCode}</address><div className="hours"><span>{business.hours}</span><strong>{business.hoursDetail}</strong><small>Atendimento com agendamento.</small></div><a className="button outline" href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin {...iconProps} /> Como chegar <ArrowUpRight size={18} aria-hidden="true" /></a></div><MapPanel /></div></section>

      <section className="section faq-section"><div className="container faq-grid"><h2>Antes de vir,<br /><em>tire suas dúvidas.</em></h2><div className="faqs">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span className="faq-symbol" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>

      <section className="closing"><div className="container"><PawPrint size={44} weight="light" aria-hidden="true" /><h2>Um banho de carinho.<br /><em>Um abraço mais gostoso.</em></h2><p>Seu melhor amigo merece. Vamos marcar?</p><WhatsAppButton placement="closing" /></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-top"><Brand /><p>Banho, tosa e carinho.<br />Assunção, São Bernardo do Campo.</p><div className="footer-contact"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={19} aria-hidden="true" />{business.displayPhone}</a><a href={business.instagram} target="_blank" rel="noopener noreferrer"><InstagramLogo size={19} aria-hidden="true" />@doggie.esteticapet</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Doggie Estética Animal</span><span>Feito para quem ama de quatro patas.</span></div></div></footer>
    <div className="mobile-cta"><WhatsAppButton placement="mobile-fixed" /></div>
  </>;
}

