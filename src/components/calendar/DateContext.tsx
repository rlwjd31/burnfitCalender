import React, {createContext, useContext, useState, ReactNode} from 'react';
import {Dayjs} from 'dayjs';
import {now} from '../../constants/dayConstants';

interface DateContextType {
  selectedMonth: Dayjs;
  setSelectedMonth: React.Dispatch<React.SetStateAction<Dayjs>>;
  selectedDate: Dayjs;
  setSelectedDate: React.Dispatch<React.SetStateAction<Dayjs>>;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export default function DateProvider({children}: {children: ReactNode}) {
  const [selectedMonth, setSelectedMonth] = useState<Dayjs>(now); // 현재 선택된 달
  const [selectedDate, setSelectedDate] = useState<Dayjs>(now); // 현재 선택된 날

  return (
    <DateContext.Provider
      value={{
        selectedMonth,
        setSelectedMonth,
        selectedDate,
        setSelectedDate,
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
