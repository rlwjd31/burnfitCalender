import {Dayjs} from 'dayjs';

const getAllDaysInMonth = (nowDate: Dayjs) => {
  const DATE_FORMAT = 'YYYY-MM-DD dddd';
  const monthArr = [];
  const startDateOfCurrentMonth = nowDate.startOf('month').clone(); // 현재달의 시작 일
  const startDateOfFirstWeekONCurrentMonth = startDateOfCurrentMonth
    .startOf('week')
    .clone(); // 현재달의 첫째주 시작 일(저번 달이 포함 됨)
  const endDateOfCurrentMonth = nowDate.endOf('month').clone(); // 현재달의 마지막 일
  const endDateOfLastWeekOnCurrentMonth = endDateOfCurrentMonth
    .endOf('week')
    .clone(); // 현재달의 마지막 주 마지막 일(다음 달이 포함 됨)

  let currentDate = startDateOfFirstWeekONCurrentMonth.clone();

  while (currentDate.isBefore(endDateOfLastWeekOnCurrentMonth)) {
    let weekArr = [];

    while (weekArr.length < 7) {
      weekArr.push(currentDate.format(DATE_FORMAT));
      currentDate = currentDate.add(1, 'day');
    }

    monthArr.push([...weekArr]);
    weekArr.length = 0;
  }

  if (monthArr.length < 6) {
    let weekArr = [];

    while (weekArr.length < 7) {
      weekArr.push(currentDate.format(DATE_FORMAT));
      currentDate = currentDate.add(1, 'day');
    }

    monthArr.push([...weekArr]);
    weekArr.length = 0;
  }

  return monthArr;
};

export {getAllDaysInMonth};
