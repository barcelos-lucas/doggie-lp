// Business details confirmed by the owner on 2026-09-12.
export const business = {
  name: 'Doggie Estética Animal',
  phone: '5511925850201',
  displayPhone: '(11) 92585-0201',
  street: 'R. Heitor de Souza, 190',
  district: 'Assunção',
  city: 'São Bernardo do Campo',
  state: 'SP',
  postalCode: '09811-300',
  instagram: 'https://www.instagram.com/doggie.esteticapet/',
  // Opening hours carried over from the previous website; confirm before launch.
  hours: 'Segunda a sexta',
  hoursDetail: '7h às 12h · 13h às 18h',
};

export const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${business.street}, ${business.district}, ${business.city} - ${business.state}, ${business.postalCode}`)}`;

export function whatsappUrl(service = '') {
  const message = service
    ? `Olá, tia Bia! Conheci a Doggie pelo site e gostaria de saber mais sobre ${service.toLowerCase()} para o meu cão.`
    : 'Olá, tia Bia! Conheci a Doggie pelo site e quero saber mais sobre banho e tosa para o meu cão.';
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}

// Only publish verified reviews with permission/source; never seed fictitious reviews.
// Format: { name, text, rating (1–5), date (display text), url (public source) }.
export const reviews = [];
export const reviewsProfileUrl = '';

export const services = [
  { name: 'Banho & cuidado', description: 'Limpeza e carinho para deixar a pelagem cheirosa e o abraço ainda melhor.', icon: 'bath', detail: 'Banho avulso ou pacotes' },
  { name: 'Tosa do seu jeito', description: 'Um visual caprichado, considerando a pelagem e as necessidades do seu cão.', icon: 'scissors', detail: 'Estética e tosa higiênica' },
  { name: 'Um cuidado a mais', description: 'Hidratação, remoção de pelos mortos e desembolo para completar a rotina.', icon: 'sparkle', detail: 'Cuidados complementares' },
];

export const faqs = [
  { question: 'Como agendo o primeiro atendimento?', answer: 'É só chamar no WhatsApp! Conte o nome, o porte e a raça do seu cão, o cuidado que procura e sua preferência de dia. A gente conversa sobre as necessidades dele e confirma a disponibilidade com você.' },
  { question: 'Quanto custa o banho e a tosa?', answer: 'O valor depende do porte, da pelagem e do serviço escolhido. Envie uma foto recente do seu cão pelo WhatsApp para conversarmos sobre o cuidado indicado e o orçamento.' },
  { question: 'Meu cão tem alguma necessidade especial. Posso levar?', answer: 'Conte para a gente antes de agendar se ele tem pele sensível, alguma condição de saúde ou fica ansioso no banho. Assim podemos conversar sobre suas necessidades e avaliar o atendimento.' },
  { question: 'Vocês têm pacotes de banho?', answer: 'Sim! Temos opções de banho avulso e pacotes semanais e quinzenais. Chame no WhatsApp para consultar as condições e encontrar uma rotina que faça sentido para o seu cão.' },
];
