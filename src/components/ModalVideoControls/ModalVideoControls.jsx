import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './ModalVideoControls.module.scss';
import Button from '@components/Button';
import { Pause, Play, Sound, FullScreen } from './svgs';

const cn = classNames.bind(styles);

export default function ModalVideoControls({
  handlePlay,
  isPlaying,
  handleMute,
  isMuted,
  currentSeconds,
  handleMaximize,
  isMaximized,
  isMoving,
}) {
  useEffect(() => {
    const playVideo = (e) => e.key === 'k' && handlePlay();
    const muteVideo = (e) => e.key === 'm' && handleMute();
    const maximizeVideo = (e) => e.key === 'f' && handleMaximize();

    document.addEventListener('keyup', playVideo);
    document.addEventListener('keyup', muteVideo);
    document.addEventListener('keyup', maximizeVideo);

    return () => {
      document.removeEventListener('keyup', playVideo);
      document.removeEventListener('keyup', muteVideo);
      document.removeEventListener('keyup', maximizeVideo);
    };
  }, []);

  return (
    <div
      className={cn('video-controls', 'video-controls--focused', {
        'video-controls--maximized': isMaximized,
        'video-controls--animated': !isMoving && isPlaying,
      })}
    >
      <Button
        className={cn('video-controls__button')}
        onClick={handlePlay}
        ariaKeyShortcuts="k"
        title="Play (k)"
        icon
      >
        {isPlaying ? <Pause /> : <Play />}
      </Button>

      <span className={cn('video-controls__play-time')}>{currentSeconds}</span>

      <div className={cn('video-controls__settings')}>
        <Button
          className={cn('video-controls__button', {
            'video-controls__button--disabled': isMuted,
          })}
          onClick={handleMute}
          ariaKeyShortcuts="m"
          title="Mute (m)"
          icon
        >
          <Sound />
        </Button>

        <Button
          className={cn(
            'video-controls__button',
            'video-controls__button--hidden'
          )}
          onClick={handleMaximize}
          ariaKeyShortcuts="f"
          title="Full screen (f)"
          icon
        >
          <FullScreen />
        </Button>
      </div>
    </div>
  );
}

ModalVideoControls.propTypes = {
  handlePlay: PropTypes.func,
  isPlaying: PropTypes.bool,
  handleMute: PropTypes.func,
  isMuted: PropTypes.bool,
  currentSeconds: PropTypes.string,
  handleMaximize: PropTypes.func,
  isMaximized: PropTypes.bool,
  isMoving: PropTypes.bool,
};
