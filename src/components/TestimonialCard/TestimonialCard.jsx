import React from 'react';
import styles from './TestimonialCard.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function TestimonialCard({
  author,
  photo,
  testimonial,
  academy,
}) {
  return (
    <figure className={cn('testimonial-card')}>
      <div className={cn('testimonial-card__image-wrapper')}>
        <img
          src={photo}
          alt={author}
          className={cn('testimonial-card__image')}
        />
      </div>
      <blockquote className={cn('testimonial-card__testimonial')}>
        {testimonial}
      </blockquote>
      <figcaption className={cn('testimonial-card__author')}>
        {author}
      </figcaption>
      <span className={cn('testimonial-card__academy')}>{academy}</span>
    </figure>
  );
}

TestimonialCard.propTypes = {
  author: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  academy: PropTypes.string.isRequired,
  photo: PropTypes.string,
};
