import { useState } from 'react';
import { ArrowUpRight, MapPin } from '@phosphor-icons/react';
import { mapsUrl } from './content.js';

export default function MapPanel() {
  const [showMap, setShowMap] = useState(false);
  return <div className="map-panel">
    {showMap ? <iframe title="Mapa da Doggie em Demarchi, São Bernardo do Campo" src="https://www.google.com/maps?q=R.%20Heitor%20de%20Souza%2C%20190%2C%20Demarchi%2C%20S%C3%A3o%20Bernardo%20do%20Campo&z=16&output=embed" referrerPolicy="no-referrer-when-downgrade" /> : <div className="map-invitation"><MapPin size={42} weight="light" aria-hidden="true" /><span>Encontre a Doggie no</span><strong>Demarchi.</strong><p>São Bernardo do Campo, SP</p><button type="button" className="button outline" onClick={() => setShowMap(true)}>Carregar mapa</button></div>}
    <a className="map-footer" href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={20} aria-hidden="true" /> Abrir no Google Maps <ArrowUpRight size={18} aria-hidden="true" /></a>
  </div>;
}
