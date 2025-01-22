import React from 'react';

import {Dayjs} from 'dayjs';
import {TextTW, ViewTW} from '../common';

type CalendarDayProps = {
  currentDate: Dayjs;
};

const DATE_FORMAT = 'D';

export default function CalendarDay({currentDate}: CalendarDayProps) {
  return (
    <ViewTW className="flex-1">
      <TextTW>{currentDate.format(DATE_FORMAT)}</TextTW>
    </ViewTW>
  );
}
