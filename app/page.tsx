'use client';

import { HeroSection } from '@/components/sections/Hero/hero-section';
import { AboutSection } from '@/components/sections/About/about-section';
import { SkillsSection } from '@/components/sections/Skills/skills-section';
import { ExperienceSection } from '@/components/sections/Experience/experience-section';
import { ProjectsSection } from '@/components/sections/Projects/projects-section';
import { ContactSection } from '@/components/sections/Contact/contact-section';
import { Navigation } from '@/components/navigation';
import { ScrollToTop } from '@/components/scroll-to-top';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
       <SkillsSection />
      <ExperienceSection />
       <ProjectsSection />
      <ContactSection />
      <ScrollToTop /> 
    </main>
  );
}