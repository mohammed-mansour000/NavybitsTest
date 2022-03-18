import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
function Header() {
  return (
    <SafeAreaView style={styles.headerContainer}>
        <View style={styles.emptyView}></View>
        <Text style={styles.headerText}>Q</Text>
        <TouchableOpacity style={styles.iconContainer}>
            <Icon size={26} color={'white'} name="plus-circle"/>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#58BD91',
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5
    },
    headerText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        width: 50,
        textAlign: 'right'
    },
    emptyView: {
        
    },
    iconContainer: {
        alignItems: 'flex-start',
        width: 30,
        justifyContent: 'center',
       
    }
});
