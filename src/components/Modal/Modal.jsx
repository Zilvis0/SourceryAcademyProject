import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import { CloseIcon } from '@components/Icons';
import Button from '@components/Button';
import useMouseMove from '@hooks/useMouseMove';

const cn = classNames.bind(styles);

export default function Modal({
  onClose,
  isOpen,
  children,
  contentType,
  theme,
}) {
  const { handleMouseMove, isMoving } = useMouseMove();

  const handleOverlayClose = (e) => {
    if (e.target.dataset.overlay === 'overlay') onClose();
  };

  useEffect(() => {
    const handleClose = (e) => e.key === 'Escape' && onClose();

    document.body.classList.add('overflow-hidden');
    document.addEventListener('keydown', handleClose);

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', handleClose);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <FocusTrap focusTrapOptions={{ active: isOpen, initialFocus: false }}>
      <dialog
        data-overlay="overlay"
        className={cn('modal', `theme-${theme}`)}
        onClick={handleOverlayClose}
        onMouseMove={handleMouseMove}
        role="dialog"
        aria-label={contentType}
        open={isOpen}
      >
        <Button
          onClick={onClose}
          className={cn('modal__button', {
            'modal__button--animated': !isMoving,
          })}
          icon
        >
          <CloseIcon />
        </Button>

        {children}
      </dialog>
    </FocusTrap>,
    document.getElementById('portal')
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  contentType: PropTypes.string.isRequired,
  theme: PropTypes.string,
};
