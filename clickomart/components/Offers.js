import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

function Offers() {
    
    const [offers, setOffers] = useState([
        {id: Math.random(), name: "Pesril Deep Clean Original 8kg ", unitWeight: '8 Kg', oldPrice: '70,000', newPrice: '63,000',  image:"https://i.postimg.cc/65j8sTJL/furnitures.png"},
        {id: Math.random(), name: "Pesril Deep Clean Universal 6kg ", unitWeight: '6 Kg', oldPrice: '40,000', newPrice: '33,000',  image:"https://i.postimg.cc/pTRW5tML/clothes-hanger.png"},
        {id: Math.random(), name: "Pesril Deep Clean Universal 4kg ", unitWeight: '4 Kg', oldPrice: '30,000', newPrice: '23,000',  image:"https://i.postimg.cc/59P4yG7f/uniform.png"},
        {id: Math.random(), name: "Ice Tea Lemon 320 ml", unitWeight: '6x320ml', oldPrice: '30,000', newPrice: '20,000',  image:"https://i.postimg.cc/65j8sTJL/furnitures.png"},
        {id: Math.random(), name: "Pril 5+ Apple Self-Degreasing", unitWeight: '1.25 L', oldPrice: '56,000', newPrice: '45,000',  image:"https://i.postimg.cc/pTRW5tML/clothes-hanger.png"},
        {id: Math.random(), name: "Pesril Deep Clean Original 8kg ", unitWeight: '8 Kg', oldPrice: '70,000', newPrice: '63,000',  image:"https://i.postimg.cc/65j8sTJL/furnitures.png"},
        {id: Math.random(), name: "Pesril Deep Clean Universal 6kg ", unitWeight: '6 Kg', oldPrice: '40,000', newPrice: '33,000',  image:"https://i.postimg.cc/pTRW5tML/clothes-hanger.png"},
        {id: Math.random(), name: "Pesril Deep Clean Universal 4kg ", unitWeight: '4 Kg', oldPrice: '30,000', newPrice: '23,000',  image:"https://i.postimg.cc/59P4yG7f/uniform.png"},
        {id: Math.random(), name: "Ice Tea Lemon 320 ml", unitWeight: '6x320ml', oldPrice: '30,000', newPrice: '20,000',  image:"https://i.postimg.cc/65j8sTJL/furnitures.png"},
        {id: Math.random(), name: "Pril 5+ Apple Self-Degreasing", unitWeight: '1.25 L', oldPrice: '56,000', newPrice: '45,000',  image:"https://i.postimg.cc/pTRW5tML/clothes-hanger.png"},
        
    ]);

    const RenderItem = (offer) => {
        console.log(offer?.oldPrice)
        console.log(offer?.newPrice)
        return (
          <TouchableOpacity style={styles.renderItemContainer}>
              <View style={styles.renderItemHeader}>
                <Text style={styles.renderItemHeaderText}>-20%</Text>
                <TouchableOpacity>
                    <Icon size={26} color={'#E7E8EA'} name="heart" />
                </TouchableOpacity>
              </View>
              <Image 
               source={{uri: offer?.image}}
               style={{ 
                   width: '80%', 
                   height: 100,
                   marginBottom: 8,
                   resizeMode: 'contain',
                   alignSelf: 'center',
               }}
              />
             <Text style={styles.unitWeight}>{offer.unitWeight}</Text>
             <TouchableOpacity style={styles.addToWishListContainer}>
               <Text style={styles.addToWishListText}>ADD TO WISHLIST</Text>
             </TouchableOpacity>
             <View style={{backgroundColor: '#F7F7F7'}}>
                <Text style={styles.offerName}>{offer.name}</Text>
                <Text style={styles.oldPriceText}>{offer.oldPrice} LBP</Text>
                <Text style={styles.newPriceText}>{offer.newPrice} LBP</Text>
             </View>
          </TouchableOpacity>
        )
    }

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 22, fontWeight: 'bold', marginLeft: 5}}>Offers</Text>
        <FlatList 
                key={'#'}
                keyExtractor={(offer) => offer.id}
                data={offers}
                renderItem={( {item} ) => RenderItem(item)}
                horizontal
                contentContainerStyle={styles.flatlistContainer}
                showsHorizontalScrollIndicator={false}
            />
    </View>
  )
}

export default Offers

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 20,
        flex: 1,
        paddingBottom: 10
    },
    flatlistContainer: {
      paddingTop: 15,
      paddingBottom: 10
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
        color: '#444444',
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
        backgroundColor: '#E7E8EA',
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
        textDecorationColor: '#68B595',
    },
    newPriceText: {
        fontSize: 17,
        color: '#68B595'
    },
    renderItemHeader: {
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    renderItemHeaderText: {
        color: '#62B893'
    }
})