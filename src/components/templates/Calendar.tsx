import React, {useEffect} from 'react';

import CalendarBody from '../calendar/CalendarBody';
import CalendarHeader from '../calendar/CalendarHeader';
import {Dayjs} from 'dayjs';
import DateProvider, {useDateContext} from '../calendar/DateContext';

type CalenderProps = {
  currentDate?: Dayjs;
};

function Calender({currentDate}: CalenderProps) {
  const {setSelectedMonth} = useDateContext();

  useEffect(() => {
    if (currentDate) {
      setSelectedMonth(currentDate);
    }
  }, [setSelectedMonth, currentDate]);

  return (
    <>
      <CalendarHeader />
      <CalendarBody />)
    </>
  );
}

export default function Calendar() {
  return (
    <DateProvider>
      <Calender />
    </DateProvider>
  );
}



// import React, {Dispatch, SetStateAction, useRef, useState} from 'react';
// import {Text, StyleSheet, Dimensions, useWindowDimensions} from 'react-native';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import ReanimatedSwipeable, {
//   SwipeableMethods,
// } from 'react-native-gesture-handler/ReanimatedSwipeable';
// import Reanimated, {
//   SharedValue,
//   useAnimatedStyle,
// } from 'react-native-reanimated';
// import Layout from '../../Layout';
// import CalendarPage from './CalendarPage';
// import {now} from '../../constants/dayConstants';
// import {Dayjs} from 'dayjs';

// type ActionProps = {
//   prog: SharedValue<number>;
//   drag: SharedValue<number>;
//   currentDate: Dayjs;
//   setCurrentDate: Dispatch<SetStateAction<Dayjs>>;
// };

// function LeftAction({prog, drag, currentDate, setCurrentDate}: ActionProps) {
//   const {width: screenWidth} = useWindowDimensions(); // 화면 너비 가져오기
//   console.log('in left action');
//   console.log('screenWidth', -screenWidth);
//   console.log('darge.value', drag.value);
//   const styleAnimation = useAnimatedStyle(() => {
//     // console.log('drag.value', drag.value);
//     // drag가 끝난시점은
//     return {
//       transform: [{translateX: drag.value + screenWidth}],
//     };
//   });

//   return (
//     <Reanimated.View style={styleAnimation}>
//       {/* <CalendarPage currentDate={currentDate.subtract(1, 'month')} /> */}
//       <CalendarPage currentDate={currentDate} />
//     </Reanimated.View>
//   );
// }

// function RightAction({prog, drag, currentDate, setCurrentDate}: ActionProps) {
//   const {width: screenWidth} = useWindowDimensions(); // 화면 너비 가져오기
//   console.log('in right action');
//   const styleAnimation = useAnimatedStyle(() => {
//     return {
//       transform: [{translateX: screenWidth}],
//     };
//   });

//   return (
//     <Reanimated.View style={styleAnimation}>
//       {/* <CalendarPage currentDate={currentDate.add(1, 'month')} /> */}
//       <CalendarPage currentDate={currentDate} />
//     </Reanimated.View>
//   );
// }

// // 👇 Presable component에 onpress를 주어 주간, 월간 이동 가능하게 하기
// // onPress={() => {
// //   reanimatedRef.current?.openLeft();
// // }}>
// export default function Example() {
//   const [currentDate, setCurrentDate] = useState<Dayjs>(now);
//   const reanimatedRef = useRef<SwipeableMethods>(null);

//   return (
//     <GestureHandlerRootView>
//       {/* 화면 전체를 중앙으로 정렬 */}
//       <ReanimatedSwipeable
//         ref={reanimatedRef}
//         containerStyle={{
//           flex: 1,
//           backgroundColor: 'black',
//           alignItems: 'center',
//         }}
//         // containerStyle={styles.swipeable}
//         // friction={2}
//         // leftThreshold={40}
//         // enableTrackpadTwoFingerGesture
//         // rightThreshold={40}
//         renderLeftActions={(
//           prog: SharedValue<number>,
//           drag: SharedValue<number>,
//         ) =>
//           LeftAction({
//             prog,
//             drag,
//             currentDate,
//             setCurrentDate,
//           })
//         }
//         renderRightActions={(
//           prog: SharedValue<number>,
//           drag: SharedValue<number>,
//         ) => {
//           return RightAction({
//             prog,
//             drag,
//             currentDate,
//             setCurrentDate,
//           });
//         }}>
//         <CalendarPage currentDate={currentDate} />
//       </ReanimatedSwipeable>
//     </GestureHandlerRootView>
//   );
// }
