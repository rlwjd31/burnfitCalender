import React from 'react';

import {Dayjs} from 'dayjs';
import {TextTW, ViewTW} from '../common';
import {useDateContext} from './DateContext';
import PressableTW from '../common/PressableTW';

type CalendarDayProps = {
  currentDate: Dayjs;
};

const DATE_FORMAT = 'D';

export default function CalendarDay({currentDate}: CalendarDayProps) {
  const {selectedDate, setSelectedDate, selectedMonth} = useDateContext();

  const dayStyleMap = {
    isDayInCurrentMonth: 'text-gray2 ',
    isDayNotInCurrentMonth: 'text-gray',
    isSelectedDay: 'text-gray3 font-bold',
  } as const;

  const monthStyle = selectedMonth.isSame(currentDate, 'month')
    ? dayStyleMap.isDayInCurrentMonth
    : dayStyleMap.isDayNotInCurrentMonth;

  const selectedDayStyle = currentDate.isSame(selectedDate, 'day')
    ? dayStyleMap.isSelectedDay
    : '';
  const dayStyle = selectedDayStyle || monthStyle;

  return (
    <PressableTW
      className={'relative flex-1 p-4 items-center'}
      onPress={() => setSelectedDate(currentDate)}>
      {selectedDayStyle && (
        <ViewTW className="absolute size-10 top-2 border-2 rounded-full border-highlight" />
      )}
      <TextTW className={`text-base ${dayStyle}`}>
        {currentDate.format(DATE_FORMAT)}
      </TextTW>
    </PressableTW>
  );
}
