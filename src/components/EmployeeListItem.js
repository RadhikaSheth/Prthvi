import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
export default function EmployeeListItem({ club, name ,bg, col}) {
    const styles = StyleSheet.create({
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
        badge: {
            backgroundColor: bg,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            width:"28%"
        },
        superscript: {
            fontSize: 14,
            color: col
        },
        club: {
            fontSize: 16,
            color: "white"
        }
    })

    return (
        <View style={styles.txnItem} >
            <Text style={styles.text}>
                {name}
            </Text>
            <View style={styles.badge}>
                <Text style={styles.superscript}><Text style={styles.club}>{club}%</Text>  club</Text>
            </View>
        </View>
    )
}



