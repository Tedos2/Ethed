"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Heart, Settings, UserCheck } from 'lucide-react';
import { cardData } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

// Icon mapping
const iconMap: { [key: string]: React.ElementType } = {
    Calendar,
    Heart,
    Settings,
    UserCheck
};

interface CardProps {
    id: number;
    icon: string;
    title: string;
    description: string;
    index: number;
    totalCards: number;
    color: string;
    imagePath?: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, index, totalCards, color, imagePath }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const card = cardRef.current;
        const container = containerRef.current;
        if (!card || !container) return;

        const targetScale = 1 - (totalCards - index) * 0.05;

        // Set initial state
        gsap.set(card, {
            scale: 1,
            transformOrigin: "center top"
        });

        // Create scroll trigger for stacking effect
        const scrollTrigger = ScrollTrigger.create({
            trigger: container,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const scale = gsap.utils.interpolate(1, targetScale, progress);

                gsap.set(card, {
                    scale: Math.max(scale, targetScale),
                    transformOrigin: "center top"
                });
            }
        });

        return () => {
            scrollTrigger.kill();
        };
    }, [index, totalCards, isMobile]);

    return (
        <div
            ref={containerRef}
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'sticky',
                top: 0,
                padding: isMobile ? '0 1rem' : '0'
            }}
        >
            <div
                ref={cardRef}
                style={{
                    position: 'relative',
                    width: isMobile ? 'calc(100vw - 2rem)' : '70%',
                    maxWidth: '100%',
                    height: isMobile ? 'auto' : '450px',
                    minHeight: isMobile ? '350px' : 'auto',
                    borderRadius: '24px',
                    isolation: 'isolate',
                    top: `calc(-5vh + ${index * 25}px)`,
                    transformOrigin: 'top'
                }}
                className="card-content"
            >
                {/* Electric Border Effect - Orange theme */}
                <div
                    style={{
                        position: 'absolute',
                        inset: '-3px',
                        borderRadius: '27px',
                        padding: '3px',
                        background: `conic-gradient(
                            from 0deg,
                            transparent 0deg,
                            ${color} 60deg,
                            ${color.replace('0.8', '0.6')} 120deg,
                            transparent 180deg,
                            ${color.replace('0.8', '0.4')} 240deg,
                            transparent 360deg
                        )`,
                        zIndex: -1
                    }}
                />

                {/* Main Card Content */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    padding: isMobile ? '1.25rem' : '3rem',
                    borderRadius: '24px',
                    background: `
                        linear-gradient(135deg,
                            rgba(10, 20, 40, 0.95),
                            rgba(5, 15, 30, 0.98)
                        )
                    `,
                    border: '1px solid rgba(255, 119, 66, 0.3)',
                    boxShadow: `
                        0 8px 32px rgba(0, 0, 0, 0.4),
                        0 2px 8px rgba(0, 0, 0, 0.3),
                        inset 0 1px 0 rgba(255, 119, 66, 0.1),
                        inset 0 -1px 0 rgba(255, 119, 66, 0.05)
                    `,
                    overflow: 'hidden'
                }}>
                    {/* Center glow effect - enhances "emanating from center" feeling */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(ellipse 50% 60% at center, rgba(100, 140, 200, 0.08) 0%, transparent 60%)',
                        pointerEvents: 'none'
                    }} />

                    {/* Large tech grid pattern - spotlight effect with aggressive center fade */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `
                            linear-gradient(rgba(100, 140, 200, 0.25) 1.5px, transparent 1.5px),
                            linear-gradient(90deg, rgba(100, 140, 200, 0.25) 1.5px, transparent 1.5px)
                        `,
                        backgroundSize: '60px 60px',
                        backgroundPosition: 'center center',
                        pointerEvents: 'none',
                        maskImage: 'radial-gradient(ellipse 65% 85% at center, black 0%, black 15%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 55%, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 65% 85% at center, black 0%, black 15%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 55%, transparent 70%)'
                    }} />

                    {/* Subtle depth overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(ellipse at center, rgba(15, 30, 55, 0.4) 0%, transparent 60%)',
                        pointerEvents: 'none'
                    }} />

                    {/* Two-column layout: Text content (right in RTL) + Visual placeholder (left in RTL) */}
                    <div style={{
                        position: 'relative',
                        zIndex: 1,
                        display: isMobile ? 'flex' : 'grid',
                        flexDirection: isMobile ? 'column' : undefined,
                        gridTemplateColumns: isMobile ? undefined : '60% 40%',
                        gap: isMobile ? '1rem' : '2.5rem',
                        height: '100%',
                        alignItems: 'center'
                    }}
                    className="card-content-layout"
                    >
                        {/* LEFT SIDE (appears right in RTL): Text Content (Hebrew, right-aligned) */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: '100%',
                            textAlign: 'right',
                            direction: 'rtl',
                            order: isMobile ? -1 : undefined
                        }}>
                            <h2 style={{
                                fontSize: isMobile ? 'clamp(1.5rem, 4vw, 1.75rem)' : 'clamp(1.75rem, 3.5vw, 2.5rem)',
                                fontWeight: '700',
                                color: '#ffffff',
                                marginBottom: '1.25rem',
                                textAlign: 'right',
                                lineHeight: isMobile ? '1.4' : '1.3',
                                wordBreak: 'break-word',
                                overflowWrap: 'break-word'
                            }}>
                                {title}
                            </h2>
                            <p style={{
                                fontSize: isMobile ? 'clamp(1.1rem, 3vw, 1.3rem)' : 'clamp(1.3rem, 2vw, 1.6rem)',
                                color: 'rgba(255, 255, 255, 0.9)',
                                lineHeight: isMobile ? '2.0' : '1.8',
                                textAlign: 'right',
                                wordBreak: 'break-word',
                                overflowWrap: 'break-word'
                            }}>
                                {description}
                            </p>
                        </div>

                        {/* RIGHT SIDE (appears left in RTL): Visual Area */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '16px',
                            border: imagePath ? 'none' : '2px dashed rgba(255, 119, 66, 0.3)',
                            background: imagePath ? 'transparent' : 'rgba(255, 119, 66, 0.05)',
                            backdropFilter: imagePath ? 'none' : 'blur(10px)',
                            minHeight: '300px',
                            position: 'relative',
                            order: isMobile ? 1 : undefined
                        }}>
                            {imagePath ? (
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: isMobile ? '0.5rem' : '1rem'
                                }}>
                                    <div style={{
                                        position: 'relative',
                                        width: isMobile ? '60%' : '70%',
                                        maxWidth: isMobile ? '180px' : (index >= 2 ? '320px' : '250px')
                                    }}>
                                        <Image
                                            src={imagePath}
                                            alt={title}
                                            width={350}
                                            height={350}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'contain',
                                                filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
                                                maskImage: index === 1 ? 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.5) 25%, black 40%, black 100%)' : 'none',
                                                WebkitMaskImage: index === 1 ? 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.5) 25%, black 40%, black 100%)' : 'none'
                                            }}
                                            priority={index === 0}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div style={{
                                    textAlign: 'center',
                                    color: 'rgba(255, 255, 255, 0.4)',
                                    fontSize: '0.9rem',
                                    padding: '1rem'
                                }}>
                                    <div style={{
                                        fontSize: '3rem',
                                        marginBottom: '0.5rem',
                                        opacity: 0.3
                                    }}>🖼️</div>
                                    <div>Image Placeholder</div>
                                    <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>350x350px recommended</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const StackedCards: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        gsap.fromTo(container,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
                onComplete: () => {
                    // Refresh ScrollTrigger after animation completes
                    ScrollTrigger.refresh();
                }
            }
        );
    }, []);

    return (
        <main ref={containerRef} style={{ width: '100%' }}>
            {/* Cards Section */}
            <section style={{
                color: '#ffffff',
                width: '100%'
            }}>
                {cardData.map((card, index) => {
                    return (
                        <Card
                            key={card.id}
                            id={card.id}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                            index={index}
                            totalCards={cardData.length}
                            color={card.color}
                            imagePath={card.imagePath}
                        />
                    );
                })}
            </section>
        </main>
    );
};
