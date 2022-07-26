// =================================================== Calendar ==========================================
import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';

export default function CalendarPage() {
  const [, setSelectedStartDate] = useState();
  const [, setSelectedEndDate] = useState();

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date(2018, 1, 1)}
          maxDate={new Date(2050, 6, 3)}
          weekdays={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
          months={[
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          previousTitle="Previous"
          nextTitle="Next"
          todayBackgroundColor="#66ff33"
          // selectedDayColor="#66ff"
          selectedDayTextColor="#000000"
          weekendDateColor="yellow"
          scaleFactor={375}
          textStyle={styles.testStyle}
          onDateChange={onDateChange}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  testStyle: {
    fontFamily: 'Cochin',
    color: '#191970',
    fontWeight: 'bold',
  },
});
