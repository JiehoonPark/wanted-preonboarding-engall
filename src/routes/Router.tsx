import React from 'react';
import { Route, Routes } from 'react-router';

import WeeklySchedule from '@pages/WeeklySchedule';
import Edit from '@pages/Edit';
import Layout from '@components/layout/Layout';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<WeeklySchedule />} />
        <Route path="/edit" element={<Edit />} />
      </Route>
    </Routes>
  );
}
