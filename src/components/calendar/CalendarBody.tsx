import React from 'react';

import {Dayjs} from 'dayjs';
import {getAllDaysInMonth} from '../../libs/dayUtil';
import {TextTW, ViewTW} from '../common';
import CalendarDay from './CalendarDay';

export default function CalendarBody({nowState}: {nowState: Dayjs}) {
  const allDaysInMonth = getAllDaysInMonth(nowState);

  return (
    <ViewTW>
      <ViewTW className="items-center bg-orange-200">
        <TextTW>요일 section</TextTW>
      </ViewTW>
      <ViewTW className="items-center justify-center">
        {allDaysInMonth.map(week => (
          <ViewTW key={`${week[0]}`} className="flex-row bg-red w-full">
            {week.map(day => (
              <CalendarDay key={`${day}`} currentDate={day} />
            ))}
          </ViewTW>
        ))}
      </ViewTW>
    </ViewTW>
  );
}
