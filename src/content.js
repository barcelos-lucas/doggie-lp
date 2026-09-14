// Conteúdo centralizado da LP. Atualize este arquivo quando a Doggie enviar
// fotos reais, avaliações ou novos detalhes comerciais.
export const business = {
  name: 'Doggie Estética Animal',
  slogan: 'cuidado que encanta',
  phone: '5511925850201',
  displayPhone: '(11) 92585-0201',
  district: 'Demarchi',
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

// Existing local work photos; replace with the requested selection once supplied.
export const portfolio = [
  {
    "type": "image",
    "src": "/images/portfolio/DcR_3ayjRfB-after.webp",
    "alt": "Cão branco finalizado com laços vermelhos",
    "caption": "Celeste · tosa bebê",
    "url": "https://www.instagram.com/tiabiatosadora/p/DcR_3ayjRfB/"
  },
  {
    "type": "image",
    "src": "/images/portfolio/DcR_uAFDSed-after.webp",
    "alt": "Cão marrom e branco finalizado com gravata verde",
    "caption": "Primeira tosa · carinho desde o início",
    "url": "https://www.instagram.com/tiabiatosadora/p/DcR_uAFDSed/"
  },
  {
    "type": "image",
    "src": "/images/portfolio/DcR-7JgjWhz-before.webp",
    "alt": "Cão de pelagem preta e dourada finalizado",
    "caption": "Técnica para cada pelagem",
    "url": "https://www.instagram.com/tiabiatosadora/p/DcR-7JgjWhz/"
  },
  {
    "type": "image",
    "src": "/images/portfolio/DcR-HVmDYhQ-after.webp",
    "alt": "Spitz finalizado com pelagem volumosa",
    "caption": "Spitz · acabamento com personalidade",
    "url": "https://www.instagram.com/tiabiatosadora/p/DcR-HVmDYhQ/"
  },
  {
    "type": "image",
    "src": "/images/portfolio/DbMSwt_iVEP-before.webp",
    "alt": "Cão de pelagem alaranjada finalizado",
    "caption": "Kiara · resultado que se vê",
    "url": "https://www.instagram.com/tiabiatosadora/p/DbMSwt_iVEP/"
  },
  {
    "type": "image",
    "src": "/images/portfolio/DbMSgaFiScR-before.webp",
    "alt": "Cão de pelagem creme finalizado",
    "caption": "Miss simpatia · cuidado em cada detalhe",
    "url": "https://www.instagram.com/tiabiatosadora/p/DbMSgaFiScR/"
  }
];

export const specialties = ['Tosa bebê', 'Tosa na tesoura em pelagem lisa', 'Trimming de Golden Retriever', 'Trimming de Spitz Alemão'];

export const experienceSteps = [
  { number: '01', title: 'Primeiro contato', description: 'Você conta um pouco sobre o seu pet, o que procura e tudo o que gostaria de incluir no atendimento. A partir disso, orientamos sobre o serviço mais adequado.' },
  { number: '02', title: 'Avaliação e definição do cuidado', description: 'Antes do atendimento, avaliamos pelagem, condição do pelo, rotina e particularidades do pet. A partir disso, explicamos o que ele precisa naquele momento e alinhamos com você os cuidados e adicionais que farão parte do atendimento.' },
  { number: '03', title: 'Atendimento com tempo e atenção', description: 'O pet é atendido com calma, respeitando seu comportamento, seus limites e o tempo necessário para cada cuidado.', badge: 'Agendamento personalizado' },
  { number: '04', title: 'Finalização e orientação', description: 'Ao final, você recebe as orientações necessárias para manter os cuidados em casa e ajudar a prolongar o resultado do atendimento.' },
];

// Depoimentos publicados só entram quando houver avaliações reais disponíveis.
export const reviews = [];
export const reviewsProfileUrl = '';

// Textos de demonstração para validar o layout enquanto as avaliações reais são reunidas.
// Não publicar como prova social: substitua por reviews antes do lançamento.
export const reviewExamples = [
  { name: 'Mariana A.', pet: 'Jujuba', rating: 5, text: 'A Jujuba é medrosa demais, rs. Foi a primeira vez que voltou do banho sem ficar se escondendo. A Bia teve mó paciência com ela.' },
  { name: 'Rafa M.', pet: 'Paçoca', rating: 5, text: 'Gente, o Paçoca voltou OUTRO cachorro kkk. Cheiroso, soltinho e sem aquele nó no pelo. E explicaram tudo antes, do jeitinho que eu gosto.' },
  { name: 'Ju R.', pet: 'Bolota', rating: 5, text: 'Pedi uma tosa bem simples pro Bolota e ficou lindo!! Respeitaram o formato dele e não passaram a máquina. Ficou a cara dele.' },
  { name: 'Cami S.', pet: 'Nina', rating: 5, text: 'Minha Nina não para quieta nunca. Mesmo assim, fizeram tudo com calma e ela saiu bem tranquila. Isso pra mim vale ouro.' },
  { name: 'Felipe G.', pet: 'Trovão', rating: 5, text: 'O Trovão é grandão e fica agitado, mas o horário só dele ajudou mto. Atendimento atencioso e sem correria.' },
  { name: 'Carol P.', pet: 'Pipoca', rating: 5, text: 'A Pipoca tava uma bolinha de nós (eu sei, vacilei na escovação). A Tia Bia resolveu com cuidado e ainda me passou umas dicas pra manter em casa.' },
  { name: 'Dani C.', pet: 'Cacau', rating: 5, text: 'A Cacau já é idosinha, então fico preocupada com tudo. A Bia conversou comigo, explicou o que dava pra fazer e respeitou o tempo dela. Saí aliviada.' },
  { name: 'André V.', pet: 'Chico', rating: 5, text: 'O Chico voltou macio demais kkk. O banho ficou ótimo e as orientações foram bem práticas, nada complicado.' },
  { name: 'Pri L.', pet: 'Xodó', rating: 5, text: 'O Xodó ficou um charme! O mais legal foi poder falar o que eu queria e ouvir o que fazia sentido pra pelagem dele. Atendimento nota 10.' },
];

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
