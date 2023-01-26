import React from 'react';
import SectionAcademies from '@components/SectionAcademies';
import SectionHero from '@components/SectionHero';
import SectionTestimonials from '@components/SectionTestimonials';
import SectionMedia from '@/components/SectionMedia';
import SectionAcademiesDetails from '@components/SectionAcademiesDetails';
import MainLayout from '@layouts/MainLayout';
import sectionDetailsText from './texts/sectionDetails.json';

export default function HomePage() {
  return (
    <MainLayout>
      <SectionHero />
      <SectionAcademies />
      <SectionAcademiesDetails texts={sectionDetailsText} />
      <SectionTestimonials />
      <SectionMedia />
    </MainLayout>
  );
}
