import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFonts } from 'expo-font';
export default function CauseItem({ title, iconName }) {
    const [loaded] = useFonts({
        Rubik: require('../../assets/Rubik-VariableFont_wght.ttf'),
    });

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        item: {
            borderRadius: 10,
            marginTop: 10,
            paddingLeft: "10%",
            paddingRight: "10%",
            width: "90%",
            alignItems: "center",
            backgroundColor: "#FFAE42",
            height: 100,
            justifyContent: "space-between",
            flexDirection: "row"
        },
        text: {
            fontSize: 16,
            color: "black",
        }
    })
    return (
        <View style={styles.item} >
            <Text style={styles.text}>{title}</Text>
            <Icon name={iconName} size={40} color="black" />
        </View>
    )

}

