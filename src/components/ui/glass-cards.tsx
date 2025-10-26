"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
    id: number;
    title: string;
    description: string;
    index: number;
    totalCards: number;
    color: string;
}

const Card: React.FC<CardProps> = ({ title, description, index, totalCards, color }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

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
        ScrollTrigger.create({
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
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [index, totalCards]);

    return (
        <div
            ref={containerRef}
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'sticky',
                top: 0
            }}
        >
            <div
                ref={cardRef}
                style={{
                    position: 'relative',
                    width: '70%',
                    height: '450px',
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
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '3rem',
                    borderRadius: '24px',
                    background: `
                        linear-gradient(145deg,
                            rgba(255, 119, 66, 0.08),
                            rgba(26, 15, 8, 0.4)
                        )
                    `,
                    backdropFilter: 'blur(25px) saturate(180%)',
                    border: '1px solid rgba(255, 119, 66, 0.3)',
                    boxShadow: `
                        0 8px 32px rgba(0, 0, 0, 0.3),
                        0 2px 8px rgba(0, 0, 0, 0.2),
                        inset 0 1px 0 rgba(255, 119, 66, 0.2),
                        inset 0 -1px 0 rgba(255, 119, 66, 0.1)
                    `,
                    overflow: 'hidden',
                    textAlign: 'right'
                }}>
                    {/* Enhanced Glass reflection overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '60%',
                        background: 'linear-gradient(135deg, rgba(255, 119, 66, 0.15) 0%, rgba(255, 119, 66, 0.05) 50%, transparent 100%)',
                        pointerEvents: 'none',
                        borderRadius: '24px 24px 0 0'
                    }} />

                    {/* Glass shine effect */}
                    <div style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        right: '10px',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255, 119, 66, 0.6) 50%, transparent 100%)',
                        borderRadius: '1px',
                        pointerEvents: 'none'
                    }} />

                    {/* Side glass reflection */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '2px',
                        height: '100%',
                        background: 'linear-gradient(180deg, rgba(255, 119, 66, 0.3) 0%, transparent 50%)',
                        borderRadius: '0 24px 24px 0',
                        pointerEvents: 'none'
                    }} />

                    {/* Frosted glass texture */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `
                            radial-gradient(circle at 20% 30%, rgba(255, 119, 66, 0.1) 1px, transparent 2px),
                            radial-gradient(circle at 80% 70%, rgba(255, 119, 66, 0.08) 1px, transparent 2px),
                            radial-gradient(circle at 40% 80%, rgba(255, 119, 66, 0.06) 1px, transparent 2px)
                        `,
                        backgroundSize: '30px 30px, 25px 25px, 35px 35px',
                        pointerEvents: 'none',
                        borderRadius: '24px',
                        opacity: 0.7
                    }} />

                    {/* Content - Hebrew, right-aligned */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                            fontWeight: '700',
                            color: '#ffffff',
                            marginBottom: '1.5rem',
                            textAlign: 'right',
                            lineHeight: '1.3'
                        }}>
                            {title}
                        </h2>
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            color: 'rgba(255, 255, 255, 0.85)',
                            lineHeight: '1.7',
                            textAlign: 'right'
                        }}>
                            {description}
                        </p>
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
                ease: "power2.out"
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
                            title={card.title}
                            description={card.description}
                            index={index}
                            totalCards={cardData.length}
                            color={card.color}
                        />
                    );
                })}
            </section>
        </main>
    );
};
