import { LiquidGlass } from '@sohumsuthar/liquid-glass';
import '@sohumsuthar/liquid-glass/css/liquid-glass-core.css';

export default function GlassMaterial() {
  return <LiquidGlass aria-hidden="true" className="whatsapp-material" lens lensOptions={{ bezel: 9, refraction: 1.2, dispersion: 0, radius: 28 }} />;
}
