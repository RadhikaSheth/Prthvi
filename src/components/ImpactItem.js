import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ImpactItem({ action, iconName, quantity, bgColor, brColor, brWidth, w, h }) {
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
            padding: 20,
            width: w,
            alignItems: "center",
            backgroundColor: bgColor,
            borderColor: brColor,
            borderWidth: brWidth,
            height: 80,
            flexDirection: "row",
            // justifyContent: "space-between"
        },
        text: {
            fontSize: 20,
            color: "#00A19D",
            fontWeight:"bold"
        },
        titleText: {
            fontSize: 16
        },
        iconView:{
            flexDirection:"row",
            alignItems:"center"
        }
    })
    return (
        <View style={styles.item} >
            <Text style={styles.titleText}>{action} </Text>
            <View style={styles.iconView}>
                <Text style={styles.text}>{quantity} </Text>
                <Icon name={iconName} size={22} color="#696969" />
            </View>


        </View>
    )

}

