import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Animated, FlatList, useWindowDimensions, TouchableOpacity, Image } from 'react-native';
import { SlidingDot } from 'react-native-animated-pagination-dots';
import Modal from "react-native-modal";
import NumericInput from 'react-native-numeric-input'
import axios from 'react-native-axios'
const CauseDetail = ({ route }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const { INTRO_DATA } = route.params;
    const [quantity, setQuantity] = useState()
    const [currentItem, setItem] = useState()
    const [itemPrice, setPrice] = useState()
    const [causeType, setCauseType] = useState(route.params.causeType)
    const { width } = useWindowDimensions();
    const scrollX = React.useRef(new Animated.Value(0)).current;

    function updateGoal() {
        axios.put("http://484c-103-250-137-194.ngrok.io/editGoal", {
            "causeType": causeType,
            "donationItem": currentItem,
            "itemPrice": itemPrice,
            "itemQuantity": quantity,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const renderItem = React.useCallback(
        ({ item }) => {
            const visible = modalVisible
            return (
                <>
                    <View style={[styles.itemContainer, { width: width - 80 }]}>
                        <View style={styles.itemTextView}>
                            <Text style={styles.itemTitleText}>{item.item}</Text>
                        </View>
                        <View style={styles.imageView}>
                            <Image
                                style={styles.tinyLogo}
                                source={
                                    item.url
                                }
                            />

                        </View>
                        <View style={styles.itemButtonTextView} >
                            <Text style={styles.itemText}>Your <Text style={{ color: "#00A19D", fontSize: 25, fontWeight: "900" }}>1% </Text>can donate </Text>
                            <Text style={styles.itemText}><Text style={{ color: "#00A19D", fontSize: 22, fontWeight: "bold" }}>{item.impact}</Text>&nbsp;{item.impactText} </Text>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.itemButton} onPress={() => {
                                setModalVisible(true)
                                setItem(item.item)
                                setQuantity(item.impact)
                                setPrice(item.price)
                            }}>
                                <Text style={{ color: "black" }}>Add to Goal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            );
        },
        [width]
    );
    const keyExtractor = React.useCallback((item) => item.key, []);
    return (
        <View style={[styles.container]}>
            <FlatList
                data={INTRO_DATA}
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {
                        useNativeDriver: false,
                    }
                )}
                extraData={modalVisible}
                pagingEnabled
                horizontal
                decelerationRate={'normal'}
                scrollEventThrottle={16}
                renderItem={renderItem}
            />
            <View style={styles.text}>
                <View style={styles.dotContainer}>
                    <SlidingDot
                        marginHorizontal={3}
                        containerStyle={{ top: 30 }}
                        data={INTRO_DATA}
                        scrollX={scrollX}
                        dotSize={12}
                        dotStyle={{
                            backgroundColor: "black"
                        }}
                        slidingIndicatorStyle={{
                            backgroundColor: "black"
                        }}
                    />
                </View>
            </View>
            <View></View>
            <View style={styles.container}>
                <Modal
                    isVisible={modalVisible}
                    onBackButtonPress={() => { setModalVisible(false) }}
                    animationIn="slideInUp"
                >
                    <View style={styles.modalView}>
                        <NumericInput
                            value={quantity}
                            minValue={1}
                            onChange={value => setQuantity(value)}
                            rightButtonBackgroundColor="#FFAE42"
                            leftButtonBackgroundColor="#FFAE42"
                            rounded={true}
                            totalWidth={200}
                            totalHeight={50}
                        />
                        <View style={styles.modalTextView}>
                            <Text style={styles.modalText}>Total amount </Text>
                            <Text style={[styles.modalText, styles.modalPriceText]}>₹{quantity * itemPrice}</Text>
                        </View>

                        <TouchableOpacity style={styles.itemButton} onPress={() => {
                            setModalVisible(false)
                            updateGoal()
                        }}
                        >
                            <Text style={{ color: "black" }}>Update Goal</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

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
        backgroundColor: '#EEEEEE',
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
        height: 250,
        width: '80%',
        borderRadius: 10,
        marginTop: "15%",
        marginLeft: "10%",
        padding: 20,
        alignItems: "center",
        justifyContent: "space-around"
    },
    modalTextView: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    modalText: {
        fontSize: 18
    },
    modalPriceText: {
        color: "#00A19D",
        fontWeight: "bold"
    }

});

export default CauseDetail;