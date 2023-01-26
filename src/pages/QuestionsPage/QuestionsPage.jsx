import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import StarsWrapper from '@components/StarsWrapper';
import styles from './QuestionsPage.module';
import {
  NumberEighthIllustration,
  NumberFiveIllustration,
  NumberFourIllustration,
  NumberNineIllustration,
  NumberOneIllustraion,
  NumberSevenIllustration,
  NumberSixIllustration,
  NumberTenIllustration,
  NumberThreeIllustration,
  NumberTwoIllustration,
  NumberZeroIllustration,
  QuestionsIllustration,
} from './svgs';
import { QUESTIONS_STARS } from './constants';

const cn = classNames.bind(styles);

const NUMBER_COMPONENTS = new Array(
  <NumberZeroIllustration />,
  <NumberOneIllustraion />,
  <NumberTwoIllustration />,
  <NumberThreeIllustration />,
  <NumberFourIllustration />,
  <NumberFiveIllustration />,
  <NumberSixIllustration />,
  <NumberSevenIllustration />,
  <NumberEighthIllustration />,
  <NumberNineIllustration />,
  <NumberTenIllustration />
);

export default function QuestionsPage() {
  const [number, setNumber] = useState(NUMBER_COMPONENTS.length - 1);

  const isLargerThanZero = number > 0;
  let headingText;

  if (isLargerThanZero) {
    headingText = 'Time for questions:';
  } else {
    headingText = 'Thank You for your Questions!';
  }

  useEffect(() => {
    const timer =
      isLargerThanZero &&
      setInterval(() => setNumber((prev) => prev - 1), 1000);

    return () => {
      clearInterval(timer);
    };
  }, [number]);

  return (
    <section className={cn('question-section')}>
      <div className={cn('question-section__stars-wrapper')}>
        {!isLargerThanZero && (
          <StarsWrapper starCoordinates={QUESTIONS_STARS} />
        )}
      </div>

      <div className={cn('question-section-content')}>
        <h1
          className={cn('question-section-content__heading', {
            'question-section-content__heading--faded': !isLargerThanZero,
          })}
        >
          {headingText}
        </h1>

        {!isLargerThanZero ? (
          <p className={cn('question-section-content__description')}>
            Tom Kha team
          </p>
        ) : (
          <div className={cn('question-section-content__countdown')}>
            {NUMBER_COMPONENTS[number]}
          </div>
        )}
      </div>

      <QuestionsIllustration className={cn('question-section__illustration')} />
    </section>
  );
}
