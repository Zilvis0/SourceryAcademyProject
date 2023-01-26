import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Modal from '@components/Modal';
import ModalVideo from '@components/ModalVideo';
import ModalImage from '@components/ModalImage';
import Button from '@components/Button';
import { ArrowDown } from '@components/Icons';
import useMouseMove from '@hooks/useMouseMove';

const cn = classNames.bind(styles);

export default function Gallery({
  handleModalClose,
  isModalOpen,
  selectedIndex,
  media,
  theme,
}) {
  const [page, setPage] = useState(selectedIndex);
  const [touchStart, setTouchStart] = useState(null);
  const { handleMouseMove, isMoving } = useMouseMove();

  const isNext = media.length - 1 > page;
  const isPrev = 0 < page;
  const touchSensitivity = 50; // min length between touch start and touch end

  const handleNextChange = () => {
    if (isNext) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevChange = () => {
    if (isPrev) {
      setPage((prev) => prev - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) {
      return;
    }

    const touchLength = touchStart - e.changedTouches[0].clientX;

    if (touchLength > touchSensitivity) {
      return handleNextChange();
    }

    if (touchLength < -touchSensitivity) {
      return handlePrevChange();
    }

    setTouchStart(null);
  };

  useEffect(() => {
    const next = (e) => e.key === 'ArrowRight' && handleNextChange();
    const prev = (e) => e.key === 'ArrowLeft' && handlePrevChange();

    document.addEventListener('keyup', next);
    document.addEventListener('keyup', prev);

    return () => {
      document.removeEventListener('keyup', next);
      document.removeEventListener('keyup', prev);
    };
  }, [page]);

  const { academy, type, src, caption } = media[page];
  let content;
  let contentType;

  if (type === 'video') {
    content = <ModalVideo url={src} />;
    contentType = 'Video Modal Window';
  }

  if (type === 'image') {
    content = <ModalImage image={src} alt={academy} caption={caption} />;
    contentType = 'Image Modal Window';
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseMove={handleMouseMove}
    >
      {media && (
        <Modal
          onClose={handleModalClose}
          isOpen={isModalOpen}
          contentType={contentType}
          theme={theme}
        >
          <Button
            className={cn('gallery-button', 'gallery-button__prev', {
              'gallery-button--animated': !isMoving,
            })}
            onClick={handlePrevChange}
            ariaKeyShortcuts="Arrow Left"
            title="Previous (Arrow Left)"
            disabled={!isPrev}
            icon
          >
            <ArrowDown className={cn('gallery-button__arrow')} />
          </Button>

          <Button
            className={cn('gallery-button', 'gallery-button__next', {
              'gallery-button--animated': !isMoving,
            })}
            onClick={handleNextChange}
            ariaKeyShortcuts="Arrow Right"
            title="Next (Arrow Right)"
            disabled={!isNext}
            icon
          >
            <ArrowDown className={cn('gallery-button__arrow')} />
          </Button>

          {content}
        </Modal>
      )}
    </div>
  );
}

Gallery.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  media: PropTypes.array.isRequired,
  theme: PropTypes.string,
};
