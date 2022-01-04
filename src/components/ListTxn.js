import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native'
export default function ListTxn({ Txn }) {

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Round Ups</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingRight:10}}>
                    <Text>Transaction</Text>
                    <Text>Donated</Text>
                </View>
            </View>

            {Txn.map((item) => {
                return (
                    (10 - (item.amount % 10) == 10) ?
                        null
                        :
                        <View style={styles.txnItem} key={item.id}>
                            <View style={styles.vertical}>
                                <Text style={styles.text}>
                                    ₹{item.amount}
                                </Text>
                                <Text style={styles.narration}>
                                    {item.narration}
                                </Text>
                            </View>
                            <>
                                <Text style={styles.spare}>
                                    ₹{10 - (item.amount % 10) == 10 ? 0 : (10 - (item.amount % 10)).toFixed(2)}
                                </Text>
                            </>
                        </View>

                )

            })}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
        marginTop: 30
    },
    txnItem: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        flexDirection: "row",
        backgroundColor: "#D3D3D3",
        borderRadius: 10,
        marginTop: 5
    },
    text: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold"
    },
    narration: {
        color: "black",
        fontSize: 10
    },
    vertical: {
        flexDirection: 'column'
    },
    spare: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#00A19D"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold"
    },
    titleView: {
        // marginBottom: 20
    }

})