// Conteúdo centralizado da LP. Atualize este arquivo quando a Doggie enviar
// fotos reais, avaliações ou novos detalhes comerciais.
export const business = {
  name: 'Doggie Estética Animal',
  slogan: 'cuidado que encanta',
  phone: '5511925850201',
  displayPhone: '(11) 92585-0201',
  district: 'Assunção',
  city: 'São Bernardo do Campo',
  state: 'SP',
  street: 'R. Heitor de Souza, 190',
  postalCode: '09811-300',
  instagram: 'https://www.instagram.com/doggie.esteticapet/',
  biaInstagram: 'https://www.instagram.com/tiabiatosadora/',
  wazeUrl: 'https://ul.waze.com/ul?from=place.ChIJJxPEsHVBzpQRcRdsyUdStsY&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
};

export const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${business.street}, ${business.district}, ${business.city} - ${business.state}, ${business.postalCode}`)}`;

const messages = {
  booking: 'Oi, Tia Bia! Gostaria de agendar um horário pro meu pet.',
  plans: 'Oi, Tia Bia! Gostaria de conhecer melhor os Planos de cuidados da Doggie.',
};

export function whatsappUrl(intent = 'booking') {
  const message = intent === 'plans' ? messages.plans : intent === 'booking' ? messages.booking : `Oi, Tia Bia! Gostaria de saber mais sobre ${intent}.`;
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}


export const carePillars = [
  { title: 'Atendimento personalizado', description: 'Cada pet é avaliado de forma individual, considerando pelagem, comportamento, rotina e necessidades específicas.', icon: 'paw' },
  { title: 'Mais tranquilidade, menos estresse', description: 'Atendimento com tempo reservado, respeitando o comportamento e os limites de cada pet.', icon: 'heart' },
  { title: 'Conhecimento técnico que faz diferença', description: 'As técnicas são escolhidas com critério, respeitando as características do pelo e as necessidades de cada pet.', icon: 'sparkle' },
  { title: 'Tempo e atenção para cada pet', description: 'Sem atendimento apressado. Cada horário permite um cuidado mais calmo, atento e bem executado.', icon: 'clock' },
];

export const serviceCategories = [
  {
    eyebrow: '01 · PELE E BEM-ESTAR', title: 'Banho e rotina de cuidados', icon: 'bath',
    description: 'Uma rotina de cuidados que vai além do banho, com atenção à pele e ao bem-estar.',
    items: ['Banho', 'Escovação', 'Manutenção periódica', 'Banho terapêutico', 'Cuidados para pele sensível', 'Cuidados para oleosidade', 'Cuidados para ressecamento', 'Protocolos específicos', 'Escovação de dentes'],
  },
  {
    eyebrow: '02 · TÉCNICA E PELO', title: 'Técnica & pelagem', icon: 'sparkle',
    description: 'Cada pelagem exige um olhar específico, com técnicas e cuidados adequados para cada necessidade.',
    items: ['Hidratação', 'Cronograma de pelagem', 'Desembolo', 'Carding', 'Remoção de pelos mortos'],
  },
  {
    eyebrow: '03 · ESTILO E ACABAMENTO', title: 'Tosas especializadas', icon: 'scissors',
    description: 'Cada tosa é adaptada ao estilo desejado, à rotina do pet e ao que a pelagem permite com segurança e qualidade.',
    items: ['Tosa na máquina', 'Tosa na tesoura', 'Tosa bebê', 'Tosa da raça', 'Trimming', 'Tosa higiênica'],
  },
];

export const plans = [
  { name: 'Semanal', description: 'Para pets que precisam de manutenção mais frequente.', includes: ['4 banhos', '1 tosa higiênica inclusa'], frequency: '1 vez por semana, durante 4 semanas consecutivas, mantendo uma rotina contínua de cuidados.', economy: 'Até 18% de economia' },
  { name: 'Quinzenal', description: 'Para quem quer manter os cuidados em dia com uma rotina quinzenal.', includes: ['2 banhos', '1 tosa higiênica inclusa'], frequency: 'Uma semana com atendimento e a semana seguinte sem, repetindo esse ciclo em frequência quinzenal.', economy: 'Cerca de 15% de economia' },
];

// Pares selecionados dos seis posts mais recentes do Instagram da Tia Bia.
export const portfolio = [
  {
    "after": "/images/portfolio/DcR_3ayjRfB-after.webp",
    "before": "/images/portfolio/DcR_3ayjRfB-before.webp",
    "afterAlt": "Cão branco finalizado com laços vermelhos",
    "beforeAlt": "Cão branco antes da finalização",
    "caption": "Celeste · tosa bebê",
    "url": "https://www.instagram.com/tiabiatosadora/p/DcR_3ayjRfB/"
  },
  {
    "after": "/images/portfolio/DcR_uAFDSed-after.webp",
    "before": "/images/portfolio/DcR_uAFDSed-before.webp",
    "afterAlt": "Cão marrom e branco finalizado com gravata verde",
    "beforeAlt": "Cão marrom e branco antes da finalização",
    "caption": "Primeira tosa · carinho desde o início",
    "url": "https://www.instagram.com/tiabiatosadora/p/DcR_uAFDSed/"
  },
  {
    "after": "/images/portfolio/DcR-7JgjWhz-before.webp",
    "before": "/images/portfolio/DcR-7JgjWhz-after.webp",
    "afterAlt": "Cão de pelagem preta e dourada finalizado",
    "beforeAlt": "Cão de pelagem preta e dourada antes da finalização",
    "caption": "Técnica para cada pelagem",
    "url": "https://www.instagram.com/tiabiatosadora/p/DcR-7JgjWhz/"
  },
  {
    "after": "/images/portfolio/DcR-HVmDYhQ-after.webp",
    "before": "/images/portfolio/DcR-HVmDYhQ-before.webp",
    "afterAlt": "Spitz finalizado com pelagem volumosa",
    "beforeAlt": "Spitz antes da finalização",
    "caption": "Spitz · acabamento com personalidade",
    "url": "https://www.instagram.com/tiabiatosadora/p/DcR-HVmDYhQ/"
  },
  {
    "after": "/images/portfolio/DbMSwt_iVEP-before.webp",
    "before": "/images/portfolio/DbMSwt_iVEP-after.webp",
    "afterAlt": "Cão de pelagem alaranjada finalizado",
    "beforeAlt": "Cão de pelagem alaranjada antes da finalização",
    "caption": "Kiara · resultado que se vê",
    "url": "https://www.instagram.com/tiabiatosadora/p/DbMSwt_iVEP/"
  },
  {
    "after": "/images/portfolio/DbMSgaFiScR-before.webp",
    "before": "/images/portfolio/DbMSgaFiScR-after.webp",
    "afterAlt": "Cão de pelagem creme finalizado",
    "beforeAlt": "Cão de pelagem creme antes da finalização",
    "caption": "Miss simpatia · cuidado em cada detalhe",
    "url": "https://www.instagram.com/tiabiatosadora/p/DbMSgaFiScR/"
  }
];

export const specialties = ['Tosa bebê', 'Tosa na tesoura em pelagem lisa', 'Trimming de Golden Retriever', 'Trimming de Spitz Alemão'];

export const experienceSteps = [
  { number: '01', title: 'Primeiro contato', description: 'Você conta um pouco sobre o seu pet, o que procura e tudo o que gostaria de incluir no atendimento. A partir disso, orientamos sobre o serviço mais adequado.' },
  { number: '02', title: 'Avaliação e definição do cuidado', description: 'Antes do atendimento, avaliamos pelagem, condição do pelo, rotina e particularidades do pet. A partir disso, explicamos o que ele precisa naquele momento e alinhamos com você os cuidados e adicionais que farão parte do atendimento.' },
  { number: '03', title: 'Atendimento com tempo e atenção', description: 'O pet é atendido com calma, respeitando seu comportamento, seus limites e o tempo necessário para cada cuidado.', badge: '1 pet por horário' },
  { number: '04', title: 'Finalização e orientação', description: 'Ao final, você recebe as orientações necessárias para manter os cuidados em casa e ajudar a prolongar o resultado do atendimento.' },
];

// Depoimentos só entram quando houver avaliações reais disponíveis.
export const reviews = [];
export const reviewsProfileUrl = '';

export const faqs = [
  { question: 'Meu pet pode ficar esperando depois do atendimento?', answer: 'Para manter o ambiente tranquilo e respeitar o atendimento individualizado, pedimos que a retirada seja feita em até 30 minutos após o aviso de finalização. Após esse período, poderá ser cobrada uma taxa de permanência.' },
  { question: 'E se eu me atrasar?', answer: 'Cada pet tem um horário reservado exclusivamente para ele. Temos uma tolerância de até 10 minutos. Após esse período, o atendimento poderá precisar ser reagendado para não comprometer a qualidade do serviço e os horários seguintes.' },
  { question: 'E se eu precisar cancelar ou não comparecer?', answer: 'Cancelamentos e reagendamentos devem ser informados com pelo menos 24 horas de antecedência. Em situações imprevistas ou emergenciais, cada caso será avaliado individualmente. Em casos de faltas ou cancelamentos recorrentes, poderá ser solicitado sinal para novos agendamentos.' },
  { question: 'A Doggie atende pets agressivos ou com parasitas?', answer: 'Por segurança do pet e da profissional, não realizamos atendimento em animais agressivos ou com presença de parasitas. Caso alguma dessas condições seja identificada, o atendimento poderá ser interrompido.' },
  { question: 'Posso reagendar um atendimento do Plano de cuidados?', answer: 'Sim. Como os planos seguem uma frequência definida, o reagendamento deve acontecer dentro da mesma semana, conforme disponibilidade, para manter a regularidade dos cuidados.' },
  { question: 'Em quais dias e horários posso contratar o Plano de cuidados?', answer: 'Os Planos de cuidados funcionam de segunda a sexta, em dia e horário fixos, conforme disponibilidade da agenda.' },
  { question: 'Quanto tempo dura o atendimento?', answer: 'O tempo varia conforme porte, pelagem, comportamento e serviço realizado. Cada pet recebe o tempo necessário para um atendimento bem executado, sem pressa.' },
  { question: 'Posso adicionar outros cuidados ao atendimento?', answer: 'Sim. Serviços adicionais podem ser solicitados pelo tutor ou indicados após a avaliação do pet. Antes de incluir qualquer cuidado extra, tudo é alinhado com você.' },
  { question: 'O que preciso informar no primeiro atendimento?', answer: 'Conte sobre a rotina do seu pet, comportamento, histórico de pele e pelagem, alergias, sensibilidades, uso de medicamentos e qualquer informação importante para o atendimento.' },
];
