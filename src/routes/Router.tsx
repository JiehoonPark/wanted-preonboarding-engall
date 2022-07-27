import React from 'react';
import { Route, Routes } from 'react-router';

import WeeklySchedule from '@pages/WeeklySchedule';
import Edit from '@pages/Edit';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<WeeklySchedule />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  );
}
