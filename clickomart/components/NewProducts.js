import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

function NewProducts() {    
    const [products, setProducts] = useState([
        {id: Math.random(), name: "Lamesa Meat Sambousik 260g", unitWeight: '260 g', price: '68,000',  image:"https://i.postimg.cc/8cr6k686/construction.png"},
        {id: Math.random(), name: "DairyDay Pizza Topping 900g", unitWeight: '900 g', price: '143,000',  image:"https://i.postimg.cc/Nf3xXQpt/storage-box.png"},
        {id: Math.random(), name: "Castania Unsalted Sunflower Seeds", unitWeight: '150 g', price: '18,250',  image:"https://i.postimg.cc/Njb7zRQs/toy.png"},
        {id: Math.random(), name: "Castania Unsalted Sunflower Seeds", unitWeight: '150 g', price: '18,250',  image:"https://i.postimg.cc/qvZ6Kwk3/sofa.png"},
        {id: Math.random(), name: "Castania Unsalted Sunflower Seeds", unitWeight: '150 g', price: '18,250',  image:"https://i.postimg.cc/65j8sTJL/furnitures.png"},
        {id: Math.random(), name: "Lamesa Meat Sambousik 260g", unitWeight: '260 g', price: '68,000',  image:"https://i.postimg.cc/8cr6k686/construction.png"},
        {id: Math.random(), name: "DairyDay Pizza Topping 900g", unitWeight: '900 g', price: '143,000',  image:"https://i.postimg.cc/Nf3xXQpt/storage-box.png"},
        {id: Math.random(), name: "Castania Unsalted Sunflower Seeds", unitWeight: '150 g', price: '18,250',  image:"https://i.postimg.cc/Njb7zRQs/toy.png"},
        {id: Math.random(), name: "Castania Unsalted Sunflower Seeds", unitWeight: '150 g', price: '18,250',  image:"https://i.postimg.cc/qvZ6Kwk3/sofa.png"},
        {id: Math.random(), name: "Castania Unsalted Sunflower Seeds", unitWeight: '150 g', price: '18,250',  image:"https://i.postimg.cc/65j8sTJL/furnitures.png"},
      
        
    ]);
    const RenderItem = (product) => {
        console.log(product?.price)
        return (
          <TouchableOpacity style={styles.renderItemContainer}>
              <View style={styles.renderItemHeader}>
                <TouchableOpacity>
                    <Icon size={26} color={'#E7E8EA'} name="heart" />
                </TouchableOpacity>
              </View>
              <Image 
               source={{uri: product?.image}}
               style={{ 
                   width: '80%', 
                   height: 100,
                   marginBottom: 8,
                   resizeMode: 'contain',
                   alignSelf: 'center',
               }}
              />
             <Text style={styles.unitWeight}>{product.unitWeight}</Text>
             <TouchableOpacity style={styles.addToWishListContainer}>
               <Text style={styles.addToWishListText}>ADD TO WISHLIST</Text>
             </TouchableOpacity>
             <View style={{backgroundColor: '#F7F7F7'}}>
             <Text style={styles.offerName}>{product.name}</Text>
             <Text style={styles.newPriceText}>{product.price} LBP</Text>
             </View>
          </TouchableOpacity>
        )
    }

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 22, fontWeight: 'bold', marginLeft: 5}}>New Products</Text>
        <FlatList 
                key={'#'}
                keyExtractor={(product) => product.id}
                data={products}
                renderItem={( {item} ) => RenderItem(item)}
                horizontal
                contentContainerStyle={styles.flatlistContainer}
                showsHorizontalScrollIndicator={false}
            />
    </View>
  )
}

export default NewProducts

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 20,
        flex: 1,
        paddingBottom: 60
    },
    flatlistContainer: {
      paddingTop: 15,
      paddingBottom: 60
    },
    renderItemContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        marginBottom: 17,
        width: Dimensions.get('window').width/3.4,
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
    offerName: {
        textAlign: 'left',
        fontSize: 12,
        marginVertical: 6,
        color: '#444444'
    },
    unitWeight: {
        textAlign: 'left',
        color: '#525252',
        marginLeft: 3,
        marginBottom: 2
    },
    addToWishListContainer: {
        paddingVertical: 11,
        paddingHorizontal: 7,
        backgroundColor: '#E5E9EA',
    },
    addToWishListText: {
        color: '#5ABD91',
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    oldPriceText: {
        color: '#525252',
        fontSize: 17,
        textDecorationLine: 'line-through',
        textDecorationColor: '#68B595'
    },
    newPriceText: {
        fontSize: 17,
        color: '#68B595'
    },
    renderItemHeader: {
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 5
    },
    renderItemHeaderText: {
        color: '#62B893'
    }
})