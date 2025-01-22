import React, {useState} from 'react';

import Layout from '../../Layout';
import {ViewTW} from '../common';
import {now} from '../../constants/dayConstants';
import {Dayjs} from 'dayjs';
import CalendarHeader from '../calendar/CalendarHeader';
import CalendarBody from '../calendar/CalendarBody';

export default function CalendarPage() {
  const [nowState, setNowState] = useState<Dayjs>(now);

  return (
    <Layout>
      <ViewTW className="bg-slate-200">
        <CalendarHeader />
        <CalendarBody nowState={nowState} />
      </ViewTW>
    </Layout>
  );
}
