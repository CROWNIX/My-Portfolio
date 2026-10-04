import React, { useEffect, useRef } from 'react';
import { Reveal, useMotion } from '../Motion';
import HeroBgAnimation from '../HeroBgAnimation';
import {
    HeroContainer,
    HeroBg,
    HeroLeftContainer,
    Img,
    HeroRightContainer,
    HeroInnerContainer,
    TextLoop,
    Title,
    Span,
    SubTitle,
    ResumeButton,
} from './HeroStyle';
import HeroImg from '../../images/my-photo.png';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    const { reducedMotion } = useMotion();
    const hero = useRef(null);
    useEffect(() => {
        const element = hero.current;
        const svg = element.querySelector('svg');
        const observer = new IntersectionObserver(([entry]) => {
            element.classList.toggle('hero-offscreen', !entry.isIntersecting);
            if (svg?.pauseAnimations) {
                if (reducedMotion || !entry.isIntersecting) svg.pauseAnimations();
                else svg.unpauseAnimations();
            }
        });
        observer.observe(element);
        if (reducedMotion) svg?.pauseAnimations?.();
        return () => observer.disconnect();
    }, [reducedMotion]);
    return (
        <div id="about" ref={hero}>
            <HeroContainer>
                <div className="hero-aurora" aria-hidden="true" />
                <HeroBg aria-hidden="true">
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Reveal as={Title}>
                            Hi, I am <br /> <span className="hero-name">{Bio.name}</span>
                        </Reveal>
                        <Reveal as={TextLoop} delay={100}>
                            I am a
                            <Span>
                                {reducedMotion ? Bio.roles.join(" / ") : <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />}
                            </Span>
                        </Reveal>
                        <Reveal as={SubTitle} delay={200}>{Bio.description}</Reveal>
                        <Reveal as={ResumeButton} delay={300} className="shimmer-button" href={Bio.resume} target="display">
                            Check Resume
                        </Reveal>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Reveal delay={150} style={{ width: '100%', maxWidth: 400, display: 'flex', justifyContent: 'center' }}>
                            <div className="hero-portrait">
                                <span className="portrait-orbit" aria-hidden="true" />
                                <span className="portrait-orbit secondary" aria-hidden="true" />
                                <Img src={HeroImg} alt={Bio.name} />
                            </div>
                        </Reveal>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default HeroSection;
