import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function FloatingButton() {
    return (

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.touchableOpacityStyle}>
              <Icon size={ 26} color={'#fff'} name="message" />
            </TouchableOpacity>
      );
}

export default FloatingButton

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
    },
    titleStyle: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
    textStyle: {
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
    },
    touchableOpacityStyle: {
      position: 'absolute',
      width: 55,
      height: 55,
      alignItems: 'center',
      justifyContent: 'center',
      right: 22,
      bottom: 100,
      backgroundColor: '#58BD91',
      borderRadius: 55
    },
    floatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      //backgroundColor:'black'
    },
  });