import React, { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const DevelopersPage = lazy(() =>
  import('../pages/AcademyPages/DevelopersPage')
);
const TestersPage = lazy(() => import('../pages/AcademyPages/TestersPage'));
const FrontendPage = lazy(() => import('../pages/AcademyPages/FrontendPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const QuestionsPage = lazy(() => import('../pages/QuestionsPage'));

const TITLES = {
  HOMEPAGE: 'Building the future generation of tech specialists',
  DEVELOPERS: 'Sourcery Academy for Developers',
  TESTERS: 'Sourcery Academy for Testers',
  FRONTEND: 'Sourcery Academy for Front-End',
  REGISTRATION: 'Sourcery Academy Registration',
  ABOUT: 'Tom Kha team description',
  NOTFOUND: 'Not Found',
  QUESTIONS: 'Qustions',
};

const ROUTES = [
  {
    path: '/',
    title: TITLES.HOMEPAGE,
    element: <HomePage />,
  },
  {
    path: '/academies/developers',
    title: TITLES.DEVELOPERS,
    element: <DevelopersPage />,
  },
  {
    path: '/academies/testers',
    title: TITLES.TESTERS,
    element: <TestersPage />,
  },
  {
    path: '/academies/frontend',
    title: TITLES.FRONTEND,
    element: <FrontendPage />,
  },
  {
    path: '/registration',
    title: TITLES.REGISTRATION,
    element: <RegistrationPage />,
  },
  {
    path: '/about',
    title: TITLES.ABOUT,
    element: <AboutPage />,
  },
  {
    path: '/questions',
    title: TITLES.QUESTIONS,
    element: <QuestionsPage />,
  },
  {
    path: '*',
    title: TITLES.NOTFOUND,
    element: <NotFoundPage />,
  },
];

export default ROUTES;
