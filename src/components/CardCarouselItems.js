import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Button, TouchableOpacity } from "react-native"
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
import { Link } from 'react-router-native';

export default function CarouselCardItem({ item, index, navigation }) {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{ uri: item.imgUrl }}
                style={styles.image}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: ITEM_WIDTH,
    },
    image: {
        width: ITEM_WIDTH,
        height: 400,
    },
    button: {
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        width: '90%',
        backgroundColor: 'black',
        color: 'white'
    }
})
