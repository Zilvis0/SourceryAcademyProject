import React from 'react';
import SectionTestimonials from '@components/SectionTestimonials';
import SectionIntro from '@components/SectionIntro';
import SectionAdmission from '@components/SectionAdmission';
import SectionSteps from '@components/SectionSteps';
import SectionApply from '@components/SectionApply';
import SectionMedia from '@components/SectionMedia';
import SectionSchedule from '@components/SectionSchedule';
import { ACADEMIES } from '@shared/constants';
import MainLayout from '@layouts/MainLayout';
import sectionStepsText from './texts/sectionSteps.json';
import sectionIntroText from './texts/sectionIntro.json';
import sectionAdmissionText from './texts/sectionAdmission.json';
import sectionApplyText from './texts/sectionApply.json';
import { Illustration } from './svgs';

export default function DevelopersPage() {
  const { value, name } = ACADEMIES.DEVELOPERS;

  return (
    <MainLayout theme="theme-developers">
      <SectionIntro texts={sectionIntroText} academy={{ value, name }} />
      <SectionSteps texts={sectionStepsText} />
      <SectionAdmission texts={sectionAdmissionText} academy={name} />
      <SectionSchedule academy={name} />
      <SectionTestimonials academy={name} />
      <SectionMedia academy={name} />
      <SectionApply texts={sectionApplyText} academy={{ value, name }}>
        <Illustration />
      </SectionApply>
    </MainLayout>
  );
}
