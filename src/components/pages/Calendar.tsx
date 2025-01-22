import React, {useState} from 'react';

import Layout from '../../Layout';
import {TextTW, ViewTW} from '../common';
import {now} from '../../constants/dayConstants';
import {getAllDaysInMonth} from '../../libs/dayUtil';
import {Dayjs} from 'dayjs';

export default function CalendarPage() {
  const [nowState, setNowState] = useState<Dayjs>(now);
  const allDaysInMonth = getAllDaysInMonth(nowState);
  console.log('allDaysInMonth', allDaysInMonth);

  return (
    <Layout>
      <ViewTW className="bg-slate-200">
        {/* calendar header */}
        <ViewTW className="items-center justify-center">
          <TextTW>Calendar Header</TextTW>
        </ViewTW>
        {/* calendar body */}
        <ViewTW>
          <ViewTW className="items-center bg-orange-200">
            <TextTW>요일 section</TextTW>
          </ViewTW>
          <ViewTW className="items-center justify-center">
            {allDaysInMonth.map(week => (
              <ViewTW className="flex-row bg-red w-full">
                <TextTW className="flex-1">day</TextTW>
                <TextTW className="flex-1">day</TextTW>
                <TextTW className="flex-1">day</TextTW>
                <TextTW className="flex-1">day</TextTW>
                <TextTW className="flex-1">day</TextTW>
                <TextTW className="flex-1">day</TextTW>
                <TextTW className="flex-1">day</TextTW>
              </ViewTW>
            ))}
          </ViewTW>
        </ViewTW>
      </ViewTW>
    </Layout>
  );
}
