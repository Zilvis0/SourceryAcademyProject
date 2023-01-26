import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@components/Modal';
import ModalVideo from '@components/ModalVideo';
import ModalImage from '@components/ModalImage';

export default function MediaModal({
  handleModalClose,
  isModalOpen,
  clickedCardData,
  theme,
}) {
  const { academy, type, src } = clickedCardData;
  let content;
  let contentType;

  if (clickedCardData.type === 'video') {
    content = <ModalVideo url={src} />;
    contentType = 'Video Modal Window';
  }

  if (clickedCardData.type === 'image') {
    content = <ModalImage image={src} alt={academy} caption={type} />;
    contentType = 'Image Modal Window';
  }

  return (
    <>
      {clickedCardData && (
        <Modal
          onClose={handleModalClose}
          isOpen={isModalOpen}
          contentType={contentType}
          theme={theme}
        >
          {content}
        </Modal>
      )}
    </>
  );
}

MediaModal.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  clickedCardData: PropTypes.object.isRequired,
  theme: PropTypes.string,
};
