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
export const daysNameInfo = {
  일요일: {
    EN: 'Sun',
    style: 'text-red',
  },
  월요일: {
    EN: 'Mon',
    style: 'text-gray1',
  },
  화요일: {
    EN: 'Tue',
    style: 'text-gray1',
  },
  수요일: {
    EN: 'Wed',
    style: 'text-gray1',
  },
  목요일: {
    EN: 'Thu',
    style: 'text-gray1',
  },
  금요일: {
    EN: 'Fri',
    style: 'text-gray1',
  },
  토요일: {
    EN: 'Sat',
    style: 'text-blue',
  },
};
