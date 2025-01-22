import dayjs from 'dayjs';
import locale from 'dayjs/locale/ko';
import weekday from 'dayjs/plugin/weekday';
import objectPlugin from 'dayjs/plugin/toObject';
import isTodayPlugin from 'dayjs/plugin/isToday';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(weekday);
dayjs.extend(objectPlugin);
dayjs.extend(isTodayPlugin);
dayjs.extend(LocalizedFormat);

export const now = dayjs().locale({...locale});
export const weekdaysKO = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];

