import React, { Children, useEffect } from 'react';
import Aos from 'aos';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TeamMemberSection from '@components/TeamMemberSection';
import styles from './TeamMembersLayout.module';

const cn = classNames.bind(styles);

export default function TeamMembersLayout({ textArray, children }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={cn('team-members-layout')}>
      {Children.map(children, (child, index) => (
        <TeamMemberSection texts={textArray[index]}>
          <div data-aos="wave-animation" data-aos-once={true}>
            {child}
          </div>
        </TeamMemberSection>
      ))}
    </div>
  );
}

TeamMembersLayout.propTypes = {
  textArray: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};
