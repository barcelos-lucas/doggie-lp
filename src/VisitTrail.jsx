import { useState } from 'react';
import { PawPrint, Heart, MapPin } from '@phosphor-icons/react';

const stops = [
  { title: 'Um oi antes do passeio.', text: 'Combine um horário com a Tia Bia e conte um pouquinho sobre seu pet.', icon: Heart },
  { title: 'O próximo passeio tem destino.', text: 'Estamos no Demarchi, em São Bernardo do Campo. Escolha seu app de rotas e venha conhecer.', icon: PawPrint },
  { title: 'Chegou ao lugar do cuidado.', text: 'R. Heitor de Souza, 190. Aqui, o atendimento tem tempo e atenção para o seu pet.', icon: MapPin },
];

export default function VisitTrail() {
  const [selected, setSelected] = useState(1);
  const stop = stops[selected];
  const Icon = stop.icon;
  return <div className="visit-trail">
    <p className="visit-invitation">O caminho para um pet bem cuidado.</p>
    <div className="visit-paws" role="group" aria-label="Explore o caminho até a Doggie">
      <svg className="visit-path" viewBox="0 0 400 64" preserveAspectRatio="none" aria-hidden="true"><path d="M 28 30 C 75 -4, 128 62, 200 27 S 306 2, 372 30" /></svg>
      {stops.map((item, index) => <button type="button" key={item.title}
        aria-label={item.title} aria-pressed={selected === index}
        className={selected === index ? 'is-current' : ''}
        onClick={() => setSelected(index)}>
        <PawPrint size={27} weight={selected === index ? 'fill' : 'regular'} aria-hidden="true" />
        <span>{['Combine', 'Venha', 'Chegou!'][index]}</span>
      </button>)}
    </div>
    <div className="visit-message" aria-live="polite" aria-atomic="true">
      <Icon size={22} weight="duotone" aria-hidden="true" />
      <div><strong>{stop.title}</strong><p>{stop.text}</p></div>
    </div>
  </div>;
}
