import React from 'react';

import {TextTW, ViewTW} from '../common';
import Icon from '../Icon';
import {useDateContext} from './DateContext';
import PressableTW from '../common/PressableTW';

export default function CalendarHeader() {
  const {selectedMonth, setSelectedMonth} = useDateContext();

  console.log();

  return (
    <ViewTW className="flex-row w-full items-center justify-between px-6">
      <PressableTW
        onPress={() => setSelectedMonth(selectedMonth.subtract(1, 'month'))}>
        <Icon iconType="arrowLeft" width={12} height={16} />
      </PressableTW>
      <TextTW className="text-lg font-semibold">
        {selectedMonth.locale('en').format('MMMM YYYY')}
      </TextTW>
      <PressableTW
        onPress={() => setSelectedMonth(selectedMonth.add(1, 'month'))}>
        <Icon iconType="arrowRight" width={12} height={16} />
      </PressableTW>
    </ViewTW>
  );
}
