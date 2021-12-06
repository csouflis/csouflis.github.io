import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Chris Souflis Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="Hate Writing 'About Me' Sections?" />
        <InterestsSection sectionId="details" heading="Interests & Skillsets" />
        <ProjectsSection sectionId="features" heading="Featured Projects" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog', 'Medium']} />
        <ContactSection sectionId="github" heading="Get in Touch" />
      </Page>
    </>
  );
}
