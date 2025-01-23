React;

import React from 'react';
import {TextTW, ViewTW} from '../common';
import {daysNameInfo} from '../../constants/dayConstants';

export default function DayNameSection() {
  return (
    <ViewTW className="flex-row justify-center items-center">
      {Object.values(daysNameInfo).map(({EN: enName, style}) => (
        <ViewTW
          key={enName}
          className="flex-1 px-2 pt-4 justify-center items-center">
          <TextTW className={`${style}`}>{enName}</TextTW>
        </ViewTW>
      ))}
    </ViewTW>
  );
}
