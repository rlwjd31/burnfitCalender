import React, {createContext, useContext, useState, ReactNode} from 'react';
import {Dayjs} from 'dayjs';
import {now} from '../../constants/dayConstants';

interface DateContextType {
  currentMonth: Dayjs;
  setCurrentMonth: React.Dispatch<React.SetStateAction<Dayjs>>;
  currentDate: Dayjs;
  setCurrentDate: React.Dispatch<React.SetStateAction<Dayjs>>;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export default function DateProvider({children}: {children: ReactNode}) {
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(now); // 현재 월
  const [currentDate, setCurrentDate] = useState<Dayjs>(now); // 현재 날짜

  return (
    <DateContext.Provider
      value={{
        currentMonth,
        setCurrentMonth,
        currentDate,
        setCurrentDate,
      }}>
      {children}
    </DateContext.Provider>
  );
}

export function useDateContext(): DateContextType {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('useDateContext must be used within a DateProvider');
  }
  return context;
}
