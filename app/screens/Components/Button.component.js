import React from 'react';
import {View, Button} from 'react-native';

function AppButton(props) {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        backgroundColor: '#bf0b3e',
      }}>
      <Button onPress={props.onTap} title={props.title} color="#bf0b3e" />
    </View>
  );
}

export default AppButton;
