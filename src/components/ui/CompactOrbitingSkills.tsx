"use client"
import React, { useEffect, useState, memo } from 'react';
import Image from 'next/image';

// --- Type Definitions ---
type IconType = 'whatsapp' | 'facebook' | 'instagram' | 'manychat' | 'googlecalendar' | 'monday';
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
    imagePath: '/images to use/whatsapp.svg',
    color: '#25D366'  // WhatsApp green
  },
  facebook: {
    imagePath: '/images to use/facbook logo.svg',
    color: '#1877F2'  // Facebook blue
  },
  instagram: {
    imagePath: '/images to use/instagram.svg',
    color: '#E4405F'  // Instagram pink/red
  },
  manychat: {
    imagePath: '/images to use/manychat.svg',
    color: '#FF6C47'  // ManyChat orange
  },
  googlecalendar: {
    imagePath: '/images to use/googlecalendar.svg',
    color: '#4285F4'  // Google blue
  },
  monday: {
    imagePath: '/images to use/mondaylogo.svg',
    color: '#FF3D57'  // Monday.com red
  }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const iconData = iconComponents[type];
  if (!iconData) return null;

  return (
    <Image
      src={iconData.imagePath}
      alt={type}
      width={40}
      height={40}
      className="w-full h-full object-contain"
    />
  );
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration (Business Tools) ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit (Social/Communication)
  { id: 'whatsapp', orbitRadius: 70, size: 36, speed: 1, iconType: 'whatsapp', phaseShift: 0, glowColor: 'cyan', label: 'WhatsApp' },
  { id: 'facebook', orbitRadius: 70, size: 36, speed: 1, iconType: 'facebook', phaseShift: (2 * Math.PI) / 3, glowColor: 'cyan', label: 'Facebook' },
  { id: 'instagram', orbitRadius: 70, size: 36, speed: 1, iconType: 'instagram', phaseShift: (4 * Math.PI) / 3, glowColor: 'cyan', label: 'Instagram' },
  // Outer Orbit (Business/Automation)
  { id: 'manychat', orbitRadius: 130, size: 40, speed: -0.6, iconType: 'manychat', phaseShift: 0, glowColor: 'purple', label: 'ManyChat' },
  { id: 'googlecalendar', orbitRadius: 130, size: 40, speed: -0.6, iconType: 'googlecalendar', phaseShift: (2 * Math.PI) / 3, glowColor: 'purple', label: 'Google Calendar' },
  { id: 'monday', orbitRadius: 130, size: 40, speed: -0.6, iconType: 'monday', phaseShift: (4 * Math.PI) / 3, glowColor: 'purple', label: 'Monday.com' },
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

  useEffect(() => {
    setMounted(true);
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

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 70, glowColor: 'white', delay: 0 },
    { radius: 130, glowColor: 'orange', delay: 1 }
  ];

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Central "Code" Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
        <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-lg animate-pulse"></div>
        <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        return (
          <OrbitingSkill
            key={config.id}
            config={config}
            angle={angle}
          />
        );
      })}
    </div>
  );
}
