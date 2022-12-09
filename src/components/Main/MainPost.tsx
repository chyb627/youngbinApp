import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Margin from '../UI/Margin';
import { GlobalStyles } from '../../constants/styles';
import moment from 'moment';

export default ({ data }) => {
  function renderItem({ item }) {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.nickname}>{item.User.nickname}</Text>
          <Text>{moment(item.createdAt).format('YYYY.MM.DD')}</Text>
        </View>

        <Margin height={16} />

        <Text style={styles.content}>{item.content}</Text>
      </View>
    );
  }

  return <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    padding: 16,
    margin: 16,
    backgroundColor: GlobalStyles.colors.teal100,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nickname: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    color: GlobalStyles.colors.gray600,
  },
});
