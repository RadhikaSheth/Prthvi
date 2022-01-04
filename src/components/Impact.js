import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from 'react-native'
import ImpactItem from "./ImpactItem";
export default function Impact() {

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Impact</Text>
            </View>
            <View style={styles.itemView}>
                <ImpactItem action="Planted" iconName="tree" quantity={20} bgColor="#FFAE42" w="47%" />
                <ImpactItem action="Donated" iconName="pencil" quantity={200} bgColor="#FFAE42" w="47%" />
            </View>
            <View style={styles.itemView}>
                <ImpactItem action="Distributed" iconName="bottle-tonic-plus" quantity={20} bgColor="#FFAE42" w="47%" />
                <ImpactItem action="Served" iconName="food" quantity={10} bgColor="#FFAE42" w="47%" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    title: {
        fontSize: 22,
        fontWeight: "bold"
    },
    titleView: {
        marginBottom: 20,
        paddingLeft:10
    }

})