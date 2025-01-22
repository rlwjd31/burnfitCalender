import React from 'react';

import {getAllDaysInMonth} from '../../libs/dayUtil';
import {TextTW, ViewTW} from '../common';
import CalendarDay from './CalendarDay';
import {useDateContext} from './DateContext';

export default function CalendarBody() {
  const {selectedMonth} = useDateContext();
  const allDaysInMonth = getAllDaysInMonth(selectedMonth);

  return (
    <ViewTW>
      <ViewTW className="items-center bg-orange-200">
        <TextTW>요일 section</TextTW>
      </ViewTW>
      <ViewTW className="items-center justify-center">
        {allDaysInMonth.map(week => (
          <ViewTW key={`${week[0]}`} className="flex-row w-full">
            {week.map(day => (
              <CalendarDay key={`${day}`} currentDate={day} />
            ))}
          </ViewTW>
        ))}
      </ViewTW>
    </ViewTW>
  );
}
