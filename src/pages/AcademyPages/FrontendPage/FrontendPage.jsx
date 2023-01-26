import React from 'react';
import SectionAdmission from '@components/SectionAdmission';
import SectionSchedule from '@components/SectionSchedule';
import SectionSteps from '@components/SectionSteps';
import SectionApply from '@components/SectionApply';
import SectionIntro from '@components/SectionIntro';
import SectionTestimonials from '@components/SectionTestimonials';
import SectionMedia from '@components/SectionMedia';
import MainLayout from '@layouts/MainLayout';
import { ACADEMIES } from '@shared/constants';
import sectionStepsText from './texts/sectionSteps.json';
import sectionIntroText from './texts/sectionIntro.json';
import sectionAdmissionText from './texts/sectionAdmission.json';
import sectionApplyText from './texts/sectionApply.json';
import { Illustration } from './svgs';

export default function FrontendPage() {
  const { name, value } = ACADEMIES.FRONTEND;

  return (
    <MainLayout theme="theme-frontend">
      <SectionIntro texts={sectionIntroText} academy={{ name, value }} />
      <SectionSteps texts={sectionStepsText} />
      <SectionAdmission texts={sectionAdmissionText} academy={name} />
      <SectionSchedule academy={name} />
      <SectionTestimonials academy="front-end" />
      <SectionMedia academy={name} />
      <SectionApply texts={sectionApplyText} academy={{ name, value }}>
        <Illustration />
      </SectionApply>
    </MainLayout>
  );
}
