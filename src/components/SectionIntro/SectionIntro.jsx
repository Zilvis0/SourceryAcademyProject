import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import styles from './SectionIntro.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Modal from '@components/Modal';
import ModalVideo from '@components/ModalVideo';
import Button from '@components/Button';
import Loader from '@components/Loader';
import { PlayButton } from '@components/Icons';
import useFetch from '@hooks/useFetch';
import { TextLine, VideoLine } from './svgs';
import { END_POINT } from './constant';

const cn = classNames.bind(styles);

export default function SectionIntro({ texts, academy }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: assets, error, isLoading } = useFetch(END_POINT);
  const navigate = useNavigate();

  const { heading, description, buttonText } = texts;

  const handleVideoClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleNavigate = () => {
    navigate('/registration', { state: academy });
  };

  useEffect(() => {
    Aos.init();
  }, []);

  let foundVideo = assets?.find(
    (asset) =>
      asset.academy.toLowerCase().includes(academy.name) &&
      asset.type.includes('video')
  );

  return (
    <div data-aos="wave-animation" data-aos-once={true} className={cn('intro')}>
      <div className={cn('text-column')}>
        <h1 className={cn('text-column__title')}>{heading}</h1>
        <p className={cn('text-column__description')}>{description}</p>
        <Button onClick={handleNavigate}>{buttonText}</Button>
        <TextLine className={cn('text-column__line', 'line')} />
      </div>
      <div className={cn('video-column')}>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <span>{error}</span>
        ) : (
          <button
            className={cn('video-column__button')}
            onClick={handleVideoClick}
            type="button"
          >
            <img
              className={cn('video-column__image')}
              src={foundVideo.thumbnail}
            />
            <PlayButton className={cn('play-button')} />
          </button>
        )}
        <VideoLine className={cn('video-column__line', 'line')} />
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          contentType="Video"
          theme={academy.name}
        >
          <ModalVideo url={foundVideo.src} />
        </Modal>
      )}
    </div>
  );
}

SectionIntro.propTypes = {
  academy: PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  texts: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  }),
};
