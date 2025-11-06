"use client"
import React, { useEffect, useState, memo } from 'react';
import Image from 'next/image';

// --- Type Definitions ---
type IconType = 'whatsapp' | 'facebook' | 'instagram' | 'manychat' | 'googlecalendar' | 'monday' | 'gmail' | 'instagram2' | 'googlesheets' | 'googledrive';
type GlowColor = 'cyan' | 'purple' | 'orange' | 'white';

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Icon Components (Image Paths) ---
const iconComponents: Record<IconType, { imagePath: string; color: string }> = {
  whatsapp: {
    imagePath: '/images to use/whatsapplogooo.png',
    color: '#25D366'  // WhatsApp green
  },
  facebook: {
    imagePath: '/images to use/2021_Facebook_icon.svg.png',
    color: '#1877F2'  // Facebook blue
  },
  instagram: {
    imagePath: '/images to use/instagram.png',
    color: '#E4405F'  // Instagram pink/red
  },
  manychat: {
    imagePath: '/images to use/shopify.png',
    color: '#96BF48'  // Shopify green
  },
  googlecalendar: {
    imagePath: '/images to use/free-google-calendar-logo-icon-svg-download-png-2476483.webp',
    color: '#4285F4'  // Google blue
  },
  monday: {
    imagePath: '/images to use/monday-icon.svg',
    color: '#FF3D57'  // Monday.com red
  },
  gmail: {
    imagePath: '/images to use/Gmail_icon_(2020).svg.png',
    color: '#EA4335'  // Gmail red
  },
  instagram2: {
    imagePath: '/images to use/messenger.png',
    color: '#006BFF'  // Messenger blue
  },
  googlesheets: {
    imagePath: '/images to use/Google_Sheets_2020_Logo.svg.png',
    color: '#0F9D58'  // Google Sheets green
  },
  googledrive: {
    imagePath: '/images to use/Google_Drive_icon_(2020).svg.png',
    color: '#4285F4'  // Google Drive blue
  }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const iconData = iconComponents[type];
  if (!iconData) return null;

  // Make Shopify logo bigger inside its circle
  const imageClass = type === 'manychat'
    ? "w-[110%] h-[110%] object-contain"
    : "w-full h-full object-contain";

  return (
    <Image
      src={iconData.imagePath}
      alt={type}
      width={40}
      height={40}
      className={imageClass}
    />
  );
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration (Business Tools) ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit (Social/Communication) - 5 logos evenly spaced
  { id: 'whatsapp', orbitRadius: 70, size: 36, speed: 1, iconType: 'whatsapp', phaseShift: 0, glowColor: 'cyan', label: 'WhatsApp' },
  { id: 'facebook', orbitRadius: 70, size: 36, speed: 1, iconType: 'facebook', phaseShift: (Math.PI * 2) / 5, glowColor: 'cyan', label: 'Facebook' },
  { id: 'instagram', orbitRadius: 70, size: 36, speed: 1, iconType: 'instagram', phaseShift: (Math.PI * 4) / 5, glowColor: 'cyan', label: 'Instagram' },
  { id: 'instagram2', orbitRadius: 70, size: 36, speed: 1, iconType: 'instagram2', phaseShift: (Math.PI * 6) / 5, glowColor: 'cyan', label: 'Messenger' },
  { id: 'googlesheets', orbitRadius: 70, size: 36, speed: 1, iconType: 'googlesheets', phaseShift: (Math.PI * 8) / 5, glowColor: 'cyan', label: 'Google Sheets' },
  // Outer Orbit (Business/Automation) - 5 logos evenly spaced
  { id: 'manychat', orbitRadius: 130, size: 44, speed: -0.6, iconType: 'manychat', phaseShift: 0, glowColor: 'purple', label: 'Shopify' },
  { id: 'googlecalendar', orbitRadius: 130, size: 40, speed: -0.6, iconType: 'googlecalendar', phaseShift: (Math.PI * 2) / 5, glowColor: 'purple', label: 'Google Calendar' },
  { id: 'monday', orbitRadius: 130, size: 40, speed: -0.6, iconType: 'monday', phaseShift: (Math.PI * 4) / 5, glowColor: 'purple', label: 'Monday.com' },
  { id: 'gmail', orbitRadius: 130, size: 40, speed: -0.6, iconType: 'gmail', phaseShift: (Math.PI * 6) / 5, glowColor: 'purple', label: 'Gmail' },
  { id: 'googledrive', orbitRadius: 130, size: 40, speed: -0.6, iconType: 'googledrive', phaseShift: (Math.PI * 8) / 5, glowColor: 'purple', label: 'Google Drive' },
];

// --- Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-1.5 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 20px ${iconComponents[iconType]?.color}40, 0 0 40px ${iconComponents[iconType]?.color}20`
            : undefined
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none z-30">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan: {
      primary: 'rgba(6, 182, 212, 0.3)',
      secondary: 'rgba(6, 182, 212, 0.15)',
      border: 'rgba(6, 182, 212, 0.25)'
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.3)',
      secondary: 'rgba(147, 51, 234, 0.15)',
      border: 'rgba(147, 51, 234, 0.25)'
    },
    orange: {
      primary: 'rgba(255, 119, 66, 0.4)',
      secondary: 'rgba(255, 119, 66, 0.2)',
      border: 'rgba(255, 119, 66, 0.3)'
    },
    white: {
      primary: 'rgba(255, 255, 255, 0.3)',
      secondary: 'rgba(255, 255, 255, 0.15)',
      border: 'rgba(255, 255, 255, 0.25)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 40px ${colors.primary}, inset 0 0 40px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 15px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main Compact Component ---
export default function CompactOrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check if desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (isPaused || !mounted) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, mounted]);

  // Scale up for desktop
  const scale = isDesktop ? 1.6 : 1;

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 70 * scale, glowColor: 'white', delay: 0 },
    { radius: 130 * scale, glowColor: 'orange', delay: 1 }
  ];

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Central "Code" Icon */}
      <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
        <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-lg animate-pulse"></div>
        <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#9333EA" />
              </linearGradient>
            </defs>
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
      </div>

      {/* Orbit Paths */}
      {mounted && orbitConfigs.map((config) => (
        <GlowingOrbitPath
          key={`path-${config.radius}`}
          radius={config.radius}
          glowColor={config.glowColor}
          animationDelay={config.delay}
        />
      ))}

      {/* Orbiting Skills */}
      {mounted && skillsConfig.map((config) => {
        const angle = time * config.speed + (config.phaseShift || 0);
        // Scale up size and radius for desktop
        const scaledConfig = {
          ...config,
          orbitRadius: config.orbitRadius * scale,
          size: config.size * scale
        };
        return (
          <OrbitingSkill
            key={config.id}
            config={scaledConfig}
            angle={angle}
          />
        );
      })}
    </div>
  );
}
