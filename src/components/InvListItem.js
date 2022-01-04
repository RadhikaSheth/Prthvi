import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
export default function InvListItem({ num, per, E, S, G, st, total, pertile,bg }) {
    const styles = StyleSheet.create({
        itemView: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:bg,
        },
        item: {
            maxWidth: "20%",
            minWidth: "20%",
            textAlign: "center",
            fontWeight: st,
            marginTop: 2,
        }
    });
    return (
        <View style={styles.itemView}>
            <Text style={[styles.item, { maxWidth: "20%", minWidth: "20%" }]}>{num}</Text>
            <Text style={[styles.item, { maxWidth: "10%", minWidth: "10%" }]}>{per}</Text>
            <Text style={[styles.item, { maxWidth: "15%", minWidth: "15%" }]}>{E}</Text>
            <Text style={[styles.item, { maxWidth: "15%", minWidth: "15%" }]}>{S}</Text>
            <Text style={[styles.item, { maxWidth: "15%", minWidth: "15%" }]}>{G}</Text>
            <Text style={[styles.item, { maxWidth: "15%", minWidth: "15%" }]}>{total}</Text>
            <Text style={[styles.item, { maxWidth: "10%", minWidth: "10%" }]}>{pertile}</Text>
        </View>
    )
}
