import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

function Gender(props) {
  const {gender, onTap, color} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{gender}</Text>
      <TouchableOpacity activeOpacity={0.6} onPress={onTap}>
        <Icon name="ios-male" size={80} color={color} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginBottom: 30,
    backgroundColor: '#303a5e',
    padding: 15,
  },
  textContainer: {margin: 10, fontSize: 20, color: 'white'},
});

export default Gender;
