import React from 'react';
import SectionAdmission from '@components/SectionAdmission';
import SectionSteps from '@components/SectionSteps';
import SectionApply from '@components/SectionApply';
import SectionIntro from '@components/SectionIntro/SectionIntro';
import SectionTestimonials from '@components/SectionTestimonials';
import SectionMedia from '@components/SectionMedia';
import SectionSchedule from '@components/SectionSchedule';
import MainLayout from '@/layouts/MainLayout';
import { ACADEMIES } from '@shared/constants';
import sectionStepsText from './texts/sectionSteps.json';
import sectionIntroText from './texts/sectionIntro.json';
import sectionAdmissionText from './texts/sectionAdmission.json';
import sectionApplyText from './texts/sectionApply.json';
import { Illustration } from './svgs';

export default function TestersPage() {
  const { value, name } = ACADEMIES.TESTERS;

  return (
    <MainLayout theme="theme-testers">
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
