/* eslint-disable react-native/no-inline-styles */
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getCalendarColumns, getDayColor, getDayText } from '../../util';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useCalendar } from '../../hooks/use-calendar';

const columnSize = 30;

const Column = ({ text, color, opacity, disabled, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        width: columnSize,
        height: columnSize,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isSelected ? '#c2c2c2' : 'transparent',
        borderRadius: columnSize / 2,
      }}>
      <Text style={{ color, opacity }}>{text}</Text>
    </TouchableOpacity>
  );
};

const ArrowButton = ({ onPress, name }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
      <Icon name={name} size={24} color="#404040" />
    </TouchableOpacity>
  );
};

export default () => {
  const now = dayjs();

  const {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtract1Month,
    add1Month,
  } = useCalendar(now);

  const columns = getCalendarColumns(selectedDate);

  const ListHeaderComponent = () => {
    const currentDateText = dayjs(selectedDate).format('YYYY.MM.DD');

    return (
      <View>
        {/* < YYYY.MM.DD > */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <ArrowButton name="chevron-back" onPress={subtract1Month} />

          <TouchableOpacity onPress={showDatePicker}>
            <Text style={{ fontSize: 20, color: '#404040' }}>{currentDateText}</Text>
          </TouchableOpacity>

          <ArrowButton name="chevron-forward" onPress={add1Month} />
        </View>

        {/* 일 ~ 토 */}
        <View style={{ flexDirection: 'row' }}>
          {[0, 1, 2, 3, 4, 5, 6].map((day) => {
            const dayText = getDayText(day);
            const color = getDayColor(day);
            return (
              <Column key={`day-${day}`} text={dayText} color={color} opacity={1} disabled={true} />
            );
          })}
        </View>
      </View>
    );
  };

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get('date');
    const day = dayjs(date).get('day');
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(selectedDate, 'month');
    const onPress = () => {
      setSelectedDate(date);
    };
    const isSelected = dayjs(date).isSame(selectedDate, 'date');

    return (
      <Column
        text={dateText}
        color={color}
        opacity={isCurrentMonth ? 1 : 0.4}
        onPress={onPress}
        isSelected={isSelected}
      />
    );
  };

  useEffect(() => {
    console.log('changed selectedDate', dayjs(selectedDate).format('YYYY.MM.DD'));
  }, [selectedDate]);

  return (
    <View style={styles.container}>
      <FlatList
        key={(_, index) => `column-${index}`}
        data={columns}
        numColumns={7}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
