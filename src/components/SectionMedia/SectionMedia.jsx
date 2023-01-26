import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import classNames from 'classnames/bind';
import styles from './SectionMedia.module.scss';
import PropTypes from 'prop-types';
import Gallery from '@components/Gallery';
import Loader from '@components/Loader';
import { PlayButton } from '@components/Icons';
import StarsWrapper from '@components/StarsWrapper';
import useFetch from '@hooks/useFetch';
import { LineHomePage, LineAcademy } from './svgs';
import { END_POINT, MEDIA_STARS } from './constants';

const cn = classNames.bind(styles);

export default function MediaSection({ academy }) {
  const { data, isLoading, error } = useFetch(END_POINT);
  const [selectedIndex, setSelectedIndex] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mediaItems, setMediaItems] = useState([]);
  const handleMediaClick = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const academyData = academy
      ? data?.filter((media) => media.academy === academy)
      : data;
    const imageData = (academyData || [])
      .filter((media) => media.type === 'image')
      .slice(0, 5);
    const videoData = (academyData || [])
      .filter((media) => media.type === 'video')
      .slice(0, 1);
    setMediaItems([...imageData, ...videoData]);
  }, [data, academy]);

  return (
    <div
      data-aos="wave-animation"
      data-aos-once={true}
      data-aos-anchor-placement="top-center"
      id="media"
      className={cn('media')}
    >
      <div className={cn('media__stars-wrapper')}>
        <StarsWrapper starCoordinates={MEDIA_STARS} />
      </div>

      {academy ? (
        <LineAcademy className={cn('media__line--academy')} />
      ) : (
        <LineHomePage className={cn('media__line--home')} />
      )}
      <h2 className={cn('media__heading')}>Media</h2>

      <div className={cn('content')}>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <span>{error}</span>
        ) : (
          mediaItems.map((media, i) => (
            <button
              key={media.src}
              type="button"
              className={cn('content__card', {
                'content__card--big-foto': i === 1,
                'content__card--big-video': i === 5,
              })}
              onClick={() => handleMediaClick(i)}
            >
              <img
                className={cn('content__thumbnail')}
                alt={media.type}
                src={media.thumbnail}
              />
              {media.type === 'video' && (
                <PlayButton className={cn('play-button')} />
              )}
            </button>
          ))
        )}
        {isModalOpen && (
          <Gallery
            handleModalClose={handleModalClose}
            isModalOpen={isModalOpen}
            selectedIndex={selectedIndex}
            media={mediaItems}
            theme={academy}
          />
        )}
      </div>
    </div>
  );
}

MediaSection.propTypes = {
  academy: PropTypes.string,
};
