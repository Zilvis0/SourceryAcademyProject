import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import sample from 'lodash/sample';
import styles from './StarUniq.module';
import { Circle, Plus, Star, SmCircle } from './svgs';
import { STARS, COLORS } from './constants';

const cn = classNames.bind(styles);

export default function StarUniq(props) {
  const [uniqStar] = useState({
    component: sample(Object.values(STARS)),
    color: sample(Object.values(COLORS)),
  });

  switch (uniqStar.component) {
    case STARS.STAR:
      return <Star className={cn(uniqStar.color)} {...props} />;

    case STARS.PLUS:
      return <Plus className={cn(uniqStar.color)} {...props} />;

    case STARS.CIRCLE:
      return <Circle className={cn(uniqStar.color)} {...props} />;

    case STARS.SMCIRCLE:
      return <SmCircle className={cn(uniqStar.color)} {...props} />;

    default:
      break;
  }
}

StarUniq.propTypes = {
  x: PropTypes.string,
  y: PropTypes.string,
};
