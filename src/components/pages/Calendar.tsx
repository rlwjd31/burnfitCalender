import React from 'react';

import Layout from '../../Layout';
import {ViewTW} from '../common';
import CalendarHeader from '../calendar/CalendarHeader';
import CalendarBody from '../calendar/CalendarBody';
import DateProvider from '../calendar/DateContext';

export default function CalendarPage() {
  return (
    <Layout>
      <DateProvider>
        <ViewTW>
          <CalendarHeader />
          <CalendarBody />
        </ViewTW>
      </DateProvider>
    </Layout>
  );
}
