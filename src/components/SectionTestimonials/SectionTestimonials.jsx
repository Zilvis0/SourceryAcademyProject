import React, { useRef } from 'react';
import styles from './SectionTestimonials.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import uniqBy from 'lodash/uniqBy';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, A11y } from 'swiper';
import TestimonialCard from '@components/TestimonialCard';
import useFetch from '@hooks/useFetch';
import Loader from '@components/Loader';
import Button from '@components/Button';
import { ArrowDown } from '@components/Icons';
import StarsWrapper from '@components/StarsWrapper';
import { END_POINT, SLIDER_SETTINGS, TESTIMONIALS_STARS } from './constants';

const cn = classNames.bind(styles);

export default function SectionTestimonials({ academy }) {
  const { data: testimonials, error, isLoading } = useFetch(END_POINT);
  const nextElement = useRef();
  const prevElement = useRef();
  const swiperElement = useRef();

  let filteredTestimonials;

  if (!academy) {
    filteredTestimonials = uniqBy(testimonials, 'name');
  } else {
    filteredTestimonials = testimonials?.filter((testimonial) =>
      testimonial.academy.toLowerCase().includes(academy)
    );
  }

  return (
    <div className={cn('testimonials')}>
      <div className={cn('testimonials__stars-wrapper')}>
        <StarsWrapper starCoordinates={TESTIMONIALS_STARS} />
      </div>

      <h2 className={cn('testimonials__heading')}>Testimonials</h2>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <span>{error}</span>
      ) : (
        <Swiper
          onBeforeInit={(swiper) => (swiperElement.current = swiper)}
          className={cn('testimonials__wrapper')}
          modules={[Autoplay, Pagination, Navigation, A11y]}
          navigation={{
            prevEl: prevElement.current,
            nextEl: nextElement.current,
          }}
          pagination={{
            type: 'progressbar',
            horizontalClass: cn('testimonials__progressbar'),
            progressbarFillClass: cn('testimonials__progressbar-fill'),
          }}
          {...SLIDER_SETTINGS}
        >
          {filteredTestimonials?.map(
            ({ academy, name, message, photo }, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  academy={academy}
                  author={name}
                  testimonial={message}
                  photo={photo}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      )}

      <div
        className={cn('testimonials__buttons-wrapper', {
          'testimonials__buttons-wrapper--hidden':
            swiperElement.current?.isLocked,
        })}
      >
        <Button ref={prevElement} icon>
          <ArrowDown className={cn('testimonials__button-prev')} />
        </Button>
        <Button ref={nextElement} icon>
          <ArrowDown className={cn('testimonials__button-next')} />
        </Button>
      </div>
    </div>
  );
}

SectionTestimonials.propTypes = {
  academy: PropTypes.string,
};
