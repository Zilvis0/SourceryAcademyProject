import React from 'react';
import classNames from 'classnames/bind';
import styles from './SectionTeamMembers.module';
import TeamMembersLayout from '@layouts/TeamMembersLayout';
import {
  ApiPhoneWave,
  BranchPcWave,
  BugDiagWave,
  ChartManIllustration,
  ChillManIllustration,
  DataManIllustration,
  DevGirlIllustration,
  PuzzleManIllustration,
  SuperManIllustration,
  TabletManIllustration,
} from './svgs';
import sectionTeamTexts from './texts/sectionTeam.json';

const cn = classNames.bind(styles);

export default function SectionTeamMembers() {
  return (
    <TeamMembersLayout textArray={sectionTeamTexts}>
      <>
        <ChartManIllustration className={cn('team-members-illustration')} />
        <ApiPhoneWave className={cn('team-members-wave')} />
      </>

      <>
        <SuperManIllustration className={cn('team-members-illustration')} />
        <BugDiagWave className={cn('team-members-wave')} />
      </>

      <>
        <DevGirlIllustration className={cn('team-members-illustration')} />
        <BranchPcWave className={cn('team-members-wave')} />
      </>

      <>
        <TabletManIllustration className={cn('team-members-illustration')} />
        <BugDiagWave className={cn('team-members-wave')} />
      </>

      <>
        <ChillManIllustration className={cn('team-members-illustration')} />
        <BranchPcWave className={cn('team-members-wave')} />
      </>

      <>
        <PuzzleManIllustration className={cn('team-members-illustration')} />
        <BugDiagWave className={cn('team-members-wave')} />
      </>

      <>
        <DataManIllustration className={cn('team-members-illustration')} />
        <ApiPhoneWave className={cn('team-members-wave')} />
      </>
    </TeamMembersLayout>
  );
}
