import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
export default function Start1Per({ amount, setGoal, name }) {
    function startGoal() {
        setGoal(true)
    }
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>Hi {name}{'\n'}{'\n'}We recommend to start with <Text style={{ color: "#00A19D" }}>1% </Text>of your monthly income that is <Text style={{ color: "#00A19D" }}>₹{amount}</Text>{'\n'}</Text>
                <TouchableOpacity style={styles.button} onPress={startGoal}>
                    <Text style={{ color: "white" }}>Join the 1% Club</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 350,
        width: "80%",
        backgroundColor: '#FFAE42',
        borderRadius: 30
    },
    innerContainer: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: "80%",
    },
    text: {
        fontSize: 20
    },
    button: {
        padding: 15,
        marginTop: 5,
        borderRadius: 30,
        alignItems: 'center',
        width: '90%',
        backgroundColor: 'black',
        color: 'white'
    }
})