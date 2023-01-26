import React, { useEffect } from 'react';
import Aos from 'aos';
import classNames from 'classnames/bind';
import styles from './TeamMemberSection.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function TeamMemberSection({ children, texts }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className={cn('member-section')}>
      <div className={cn('member-section-graphics')}>{children}</div>

      <hgroup
        data-aos="wave-animation"
        data-aos-once={true}
        className={cn('member-section-content')}
      >
        <h2 className={cn('member-section-content__heading')}>
          {texts.member}
        </h2>
        <p className={cn('member-section-content__description')}>
          {texts.description}
        </p>
      </hgroup>
    </section>
  );
}

TeamMemberSection.propTypes = {
  children: PropTypes.node.isRequired,
  texts: PropTypes.shape({
    member: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
