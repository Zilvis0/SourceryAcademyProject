import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from '@components/Loader';
import PageLayout from '@layouts/PageLayout';
import ROUTES from '../../app/routes.js';

export default function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {ROUTES.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Suspense>
      </PageLayout>
    </BrowserRouter>
  );
}
