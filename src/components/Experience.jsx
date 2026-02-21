import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
    {
        company: "Roop Polymers",
        year: "2025",
        position: "Web Developer Intern",
        description: "Architected a web-based test request management system, streamlining processing and tracking to vastly improve operational efficiency.",
    },
    {
        company: "Collegia AI",
        year: "2024",
        position: "Full Stack Developer",
        description: "Built the core AI-powered hub for college students, bridging the gap between raw faculty data and instant academic accessibility.",
    },
    {
        company: "Data Analytics",
        year: "2024",
        position: "Data Analyst",
        description: "Engineered deep scraping pipelines for IMDb movie data, pushing raw information into interactive, high-fidelity Power BI dashboards.",
    },
    {
        company: "Graphic Design",
        year: "2023 - Present",
        position: "Creative Designer",
        description: "Crafted compelling visual identities using Photoshop and Figma across branding campaigns and high-end digital illustrations.",
    },
];

function Experience() {
    const containerRef = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        itemRefs.current.forEach((el, index) => {
            gsap.fromTo(el,
                { opacity: 0, x: -50 },
                {
                    opacity: 1, x: 0, duration: 1, delay: index * 0.15, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);

    return (
        <section id="experience" className="section-container" ref={containerRef} style={{ paddingTop: '15vh' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '6rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '2rem'
            }}>
                <h2 style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    fontWeight: 300,
                    letterSpacing: '-0.04em',
                    margin: 0
                }}>
                    Work <span style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>Experience</span>
                </h2>
                <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)' }}>04</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {experienceData.map((item, index) => (
                    <div
                        key={index}
                        ref={el => itemRefs.current[index] = el}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 3fr',
                            gap: '2rem',
                            padding: '3rem 0',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            position: 'relative',
                            transition: 'background 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                        }}
                    >
                        {/* Left Col - Meta */}
                        <div>
                            <span style={{
                                display: 'block',
                                fontFamily: '"Inter", sans-serif',
                                fontSize: '0.85rem',
                                color: 'rgba(255,255,255,0.5)',
                                marginBottom: '0.5rem'
                            }}>
                                {item.year}
                            </span>
                            <span style={{
                                display: 'block',
                                fontFamily: '"Space Grotesk", sans-serif',
                                fontSize: '1.2rem',
                                color: 'rgba(255,255,255,0.9)'
                            }}>
                                {item.position}
                            </span>
                        </div>

                        {/* Right Col - Content */}
                        <div>
                            <h3 style={{
                                fontFamily: '"Space Grotesk", sans-serif',
                                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                                fontWeight: 300,
                                letterSpacing: '-0.02em',
                                margin: '0 0 1rem 0'
                            }}>
                                {item.company}
                            </h3>
                            <p style={{
                                fontFamily: '"Inter", sans-serif',
                                fontSize: '1rem',
                                lineHeight: 1.6,
                                color: 'rgba(255,255,255,0.6)',
                                margin: 0,
                                maxWidth: '600px',
                                fontWeight: 300
                            }}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
