import React, {useEffect} from 'react';

import Layout from '../../Layout';
import {ViewTW} from '../common';
import CalendarHeader from '../calendar/CalendarHeader';
import CalendarBody from '../calendar/CalendarBody';
import DateProvider, {useDateContext} from '../calendar/DateContext';
import {Dayjs} from 'dayjs';

function Calendar({currentDate}: {currentDate: Dayjs}) {
  const {setSelectedMonth} = useDateContext();

  useEffect(() => {
    if (currentDate) {
      setSelectedMonth(currentDate);
    }
  }, [setSelectedMonth, currentDate]);

  return (
    <Layout>
      <ViewTW>
        <CalendarHeader />
        <CalendarBody />
      </ViewTW>
    </Layout>
  );
}

export default function CalendarPage({currentDate}: {currentDate: Dayjs}) {
  return (
    <DateProvider>
      <Calendar currentDate={currentDate} />
    </DateProvider>
  );
}
