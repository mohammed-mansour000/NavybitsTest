import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Image, Dimensions  } from 'react-native';
import FloatingButton from '../shared/FloatingButton';
import Categories from './Categories';
import NewProducts from './NewProducts';
import Offers from './Offers';
import Slider from './SliderBox';

function Home() {
    return (
        <>
        <ScrollView>
        

        <Slider />
        <Categories />
        <Offers />
        <NewProducts />
        </ScrollView>
        <FloatingButton />
        </>
  )
}

export default Home;
