import React from 'react';

import {getAllDaysInMonth} from '../../libs/dayUtil';
import {ViewTW} from '../common';
import CalendarDay from './CalendarDay';
import {useDateContext} from './DateContext';
import DayNameSection from './DayNameSection';

export default function CalendarBody() {
  const {selectedMonth} = useDateContext();
  const allDaysInMonth = getAllDaysInMonth(selectedMonth);

  return (
    <ViewTW>
      <DayNameSection />
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
