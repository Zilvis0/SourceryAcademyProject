import React from 'react';
import SectionTeamIntro from '@components/SectionTeamIntro';
import AboutMainLayout from '@layouts/AboutMainLayout';
import SectionTeamHero from '@components/SectionTeamHero/SectionTeamHero';
import SectionTeamOutro from '@components/SectionTeamOutro/SectionTeamOutro';
import SectionTeamMembers from '@components/SectionTeamMembers/SectionTeamMembers';

export default function AboutPage() {
  return (
    <AboutMainLayout>
      <SectionTeamIntro />
      <SectionTeamHero />
      <SectionTeamMembers />
      <SectionTeamOutro />
    </AboutMainLayout>
  );
}
