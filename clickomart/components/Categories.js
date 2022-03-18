import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions  } from 'react-native';

function Categories() {
    const [categories, setCategories] = useState([
        {id: Math.random(), name: "Hot Deals",   image:"https://i.postimg.cc/TPB2Fmm8/1.png"},
        {id: Math.random(), name: "Women's Mart",    image:"https://i.postimg.cc/2jQj91SJ/2.png"},
        {id: Math.random(), name: "Ready-Made Boxes", image:"https://i.postimg.cc/7YXHDj7n/3.png"} ,
        {id: Math.random(), name: "Cosmetics", image:"https://i.postimg.cc/HxQmNNd5/4.png"} ,
        {id: Math.random(), name: "Ramadan",  image:"https://i.postimg.cc/cHNyfcwJ/5.png"} ,
        {id: Math.random(), name: "Hot Deals",  image:"https://i.postimg.cc/TPB2Fmm8/1.png"},
        {id: Math.random(), name: "Women's Mart",  image:"https://i.postimg.cc/2jQj91SJ/2.png"},
        {id: Math.random(), name: "Ready-Made Boxes", image:"https://i.postimg.cc/7YXHDj7n/3.png"} ,
        {id: Math.random(), name: "Cosmetics", image:"https://i.postimg.cc/HxQmNNd5/4.png"} ,
        {id: Math.random(), name: "Ramadan", image:"https://i.postimg.cc/cHNyfcwJ/5.png"} ,
        {id: Math.random(), name: "Women's Mart",  image:"https://i.postimg.cc/2jQj91SJ/2.png"},
        {id: Math.random(), name: "Ready-Made Boxes", image:"https://i.postimg.cc/7YXHDj7n/3.png"} ,
        {id: Math.random(), name: "Cosmetics", image:"https://i.postimg.cc/HxQmNNd5/4.png"} ,
        {id: Math.random(), name: "Ramadan", image:"https://i.postimg.cc/cHNyfcwJ/5.png"} ,
        {id: Math.random(), name: "Women's Mart",  image:"https://i.postimg.cc/2jQj91SJ/2.png"},
    ]);

    const RenderItem = (category) => {
        console.log(category?.id)
        return (
          <TouchableOpacity style={styles.renderItemContainer}>
              <Image 
               source={{uri: category?.image}}
               style={{ 
                   width: '100%', 
                   height: 100,
                   marginBottom: 12
               }}
              />
             <Text style={{textAlign: 'center'}}>{category.name}</Text>
          </TouchableOpacity>
        )
    }

    return (

        <View style={styles.container}>
            <FlatList 
                key={'#'}
                keyExtractor={(category) => category.id}
                data={categories}
                renderItem={( {item} ) => RenderItem(item)}
                numColumns={3}
                contentContainerStyle={styles.flatlistContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 20,
        flex: 1,
        backgroundColor: "#fff",
        paddingBottom: 20
    },
    flatlistContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    renderItemContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        marginBottom: 17,
        width: Dimensions.get('window').width/3.4,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 130
        // height: Dimensions.get('window').width/3
    },
})