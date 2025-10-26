import './Slider.css';
import Image from 'next/image';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiDocker } from 'react-icons/si';

export default function Slider() {
  const logos = [
    { type: 'image', src: '/images to use/Make-Logo-RGB@2x-1.webp', alt: 'Make.com' },
    { type: 'image', src: '/images to use/Zapier_Company_Logo_2022.png', alt: 'Zapier' },
    { type: 'image', src: '/images to use/N8n-logo-new.svg.png', alt: 'n8n' },
    { type: 'icon', Icon: SiReact, alt: 'React' },
    { type: 'icon', Icon: SiNextdotjs, alt: 'Next.js' },
    { type: 'icon', Icon: SiTypescript, alt: 'TypeScript' },
    { type: 'icon', Icon: SiTailwindcss, alt: 'Tailwind' },
  ];

  // Triplicate for seamless loop
  const allSlides = [...logos, ...logos, ...logos];

  return (
    <div className="slider">
      <div className="slide-track">
        {allSlides.map((logo, index) => (
          <div key={index} className="slide">
            {logo.type === 'image' ? (
              <div className="slide-image">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              </div>
            ) : (
              <div className="slide-icon">
                <logo.Icon />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

