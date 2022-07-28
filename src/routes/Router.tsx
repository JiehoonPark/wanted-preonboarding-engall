import React from 'react';
import { Route, Routes } from 'react-router';

import WeeklySchedule from '@pages/WeeklySchedule';
import ScheduleForm from '@pages/ScheduleForm';
import Layout from '@components/layout/Layout';

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<WeeklySchedule />} />
        <Route path="/form" element={<ScheduleForm />} />
      </Route>
    </Routes>
  );
}

export default Router;
