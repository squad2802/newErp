// ========================================================== leave Tables ===============================
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import React, {useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';

export default function UserLeaveTable() {
  const [selectedStartDate, setSelectedStartDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();

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
      <View>
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
          selectedDayColor="#66ff"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={styles.textStyle}
          onDateChange={onDateChange}
        />
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.to}>Selected Date</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.selectLeave}>
            {selectedStartDate
              ? selectedStartDate.toString().substring(0, 15)
              : ''}
          </Text>
          <Text style={styles.to}> {'       '}To</Text>
          <Text style={styles.selectLeave}>
            {selectedEndDate ? selectedEndDate.toString().substring(0, 15) : ''}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  selectLeave: {
    color: '#66ff',
    fontWeight: 'bold',
    paddingLeft: 40,
  },
  to: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '900',
    paddingLeft: 6,
  },
  viewContainer: {
    marginLeft: 25,
    marginTop: 10,
    backgroundColor: '#A9A9A9',
    width: '85%',
    height: 50,
    paddingTop: 4,
    borderRadius: 5,
  },
  textStyle: {
    fontFamily: 'Cochin',
    color: '#000000',
    fontWeight: 'bold',
  },
});
