import React, { useRef, useState } from 'react';
import styles from './ModalVideo.module.scss';
import classNames from 'classnames/bind';
import ReactPlayer from 'react-player/lazy';
import PropTypes from 'prop-types';
import ModalVideoControls from '@components/ModalVideoControls';
import useMouseMove from '@hooks/useMouseMove';

const cn = classNames.bind(styles);

export default function ModalVideo({ url }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  const timer = useRef();
  const { handleMouseMove, isMoving } = useMouseMove();

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  const handleCurrentTime = (seconds) => {
    if (isPlaying) {
      const time = secondsToTime(seconds);

      setCurrentTime(time);
    }
  };

  const handleScreenClick = (e) => {
    clearTimeout(timer.current);

    if (e.detail === 1) {
      timer.current = setTimeout(() => {
        handlePlay();
      }, 200);
    }

    if (e.detail === 2) {
      handleMaximize();
    }
  };

  const secondsToTime = (seconds) => {
    return new Date(Math.round(seconds) * 1000).toISOString().substring(14, 19);
  };

  return (
    <div className={cn('player', { 'player--maximized': isMaximized })}>
      <div
        className={cn('player__container', {
          'player__container--maximized': isMaximized,
        })}
        onClick={handleScreenClick}
        onMouseMove={handleMouseMove}
      >
        <ReactPlayer
          className={cn('player__wrapper')}
          url={url}
          width="100%"
          height="100%"
          playing={isPlaying}
          muted={isMuted}
          onProgress={({ playedSeconds }) => {
            handleCurrentTime(playedSeconds);
          }}
          onEnded={handlePlay}
        />
      </div>
      <ModalVideoControls
        handlePlay={handlePlay}
        isPlaying={isPlaying}
        handleMute={handleMute}
        isMuted={isMuted}
        currentSeconds={currentTime}
        handleMaximize={handleMaximize}
        isMaximized={isMaximized}
        isMoving={isMoving}
      />
    </div>
  );
}

ModalVideo.propTypes = {
  url: PropTypes.string,
};
