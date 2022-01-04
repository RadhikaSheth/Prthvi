import React, { useState } from 'react'
import { StyleSheet, View, Text, Animated, FlatList, useWindowDimensions, TouchableOpacity, Image } from 'react-native';
import Modal from "react-native-modal";
import NumericInput from 'react-native-numeric-input';
export default function InvModal({ modalVisible, setModalVisible, title, per, oneper, total, alter }) {
    const [reduce, setReduce] = useState(10)
    const [donate, setDonate] = useState(100)
    return (
        <Modal
            isVisible={modalVisible}
            onBackButtonPress={() => { setModalVisible(false) }}
            animationIn="slideInUp"

        >
            <View style={styles.modalView}>
                <View style={[styles.modalTextView, { fontWeight: 'bold' }]}>
                    <Text style={[styles.modalText, { fontWeight: 'bold', fontSize: 20 }]}>{title}</Text>
                </View>
                <View style={styles.modalTextView}>
                    <Text style={styles.modalText}>Total ESG Score = <Text style={{ color: "red", fontWeight: "bold" }}>{total}</Text></Text>
                </View>

                <View >
                    <Text style={styles.modalText}>Following are some choices with similiear returns:{'\n'} </Text>
                    <View style={{ flexDirection: "column" }}>
                        <View style={styles.modalTextView} >
                            <Text>Name</Text>
                            <Text>Total Score</Text>
                        </View>
                        <View style={styles.modalTextView} >
                            <Text>Mutual Fund 1</Text>
                            <Text style={{ color: "#00A19D", fontWeight: "bold", marginRight:"10%" }}>15</Text>
                        </View>
                        <View style={styles.modalTextView} >
                            <Text>Mutual Fund 2</Text>
                            <Text style={{ color: "#00A19D", fontWeight: "bold", marginRight:"10%" }}>17</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.itemButton} onPress={() => {
                    setModalVisible(false)
                }}
                >
                    <Text style={{ color: "black" }}>Invest Sustainably</Text>
                </TouchableOpacity>
            </View>

        </Modal >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#e7e7e7',
        alignItems: "center",
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    dotContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    itemContainer: {
        backgroundColor: '#FFAE42',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 30,
        marginTop: "15%",
        marginHorizontal: 40,
        borderRadius: 10,
    },
    itemTextView: {
        flexDirection: "row",
        width: "100%",
        marginTop: 0,
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    itemButton: {
        padding: 15,
        marginTop: 5,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#ffae42',
        color: 'black'
    },
    itemButtonTextView: {
        padding: 15,
        marginTop: 5,
        height: 60,
        borderRadius: 10,
        width: '100%',
    },
    itemTitleText: {
        fontSize: 25,
        color: "black",
    },
    itemText: {
        fontSize: 20,
        color: "black"
    },
    tinyLogo: {
        width: 220,
        height: 220,
    },
    imageView: {
        height: 220,
        width: 220,
        borderColor: "black",
        // borderWidth:1
    },
    buttonView: {
        width: "100%",
        marginTop: "10%"
    },
    modalView: {
        backgroundColor: "white",
        height: 450,
        width: '86%',
        borderRadius: 10,
        marginTop: "15%",
        marginLeft: "7%",
        padding: 20,
        // alignItems: "center",
        justifyContent: "space-around"
    },
    modalTextView: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    modalText: {
        fontSize: 18,
    },
    modalPriceText: {
        color: "#00A19D",
        fontWeight: "bold"
    }

});