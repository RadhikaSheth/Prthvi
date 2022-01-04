import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Animated, FlatList, useWindowDimensions, TouchableOpacity, Image } from 'react-native';
import { SlidingDot } from 'react-native-animated-pagination-dots';
import Modal from "react-native-modal";
import NumericInput from 'react-native-numeric-input'
import axios from 'react-native-axios'
const StartScreen = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const scrollX = React.useRef(new Animated.Value(0)).current;
    var data = [
        {
            key: "1",
            url: require('../../assets/prthvi_logo.png'),
            text: "",
            showButton: false
        },
        {
            key: "2",
            url: require('../../assets/child-1.png'),
            text: "Let's start with a thought experiment, imagine one fine day you're going to office. \nNicely dressed in your fancy clothes.",
            showButton: false
        },
        {
            key: "3",
            url: require('../../assets/child-2.png'),
            text: "With your newly bought shiny shoes",
            showButton: false
        },
        {
            key: "4",
            url: require('../../assets/child-3.png'),
            text: "And, you see a child drowning in a pond nearby\n\nWhat would you do? ",
            showButton: true,
            secondButton: true,
            buttonText2: "Save the child",
            buttonText1: "No, my clothes will get dirty"
        },
        {
            key: "5",
            url: require('../../assets/child-4.png'),
            text: "Almost everyone we talk to, says Yes.\nThen why are we allowing thousands of kids to die every day, if theirs lives can be saved at trivial costs.",
            showButton: true,
            buttonText1: "Get Started"
        }
    ]
    const renderItem = React.useCallback(
        ({ item }) => {
            return (
                <>
                    <View style={[styles.itemContainer, { width: width - 80 }]}>
                        <View style={styles.imageView}>
                            <Image
                                style={styles.tinyLogo}
                                source={
                                    item.url
                                }
                            />
                        </View>
                        <View style={styles.itemButtonTextView} >
                            <Text style={styles.itemText}>{item.text}</Text>
                        </View>

                        {item.showButton ?
                            <View style={styles.buttonView}>
                                {item.secondButton ?
                                    <TouchableOpacity style={styles.itemButton} onPress={() => { }}>
                                        <Text style={{ color: "black" }}>{item.buttonText2}</Text>
                                    </TouchableOpacity>
                                    :
                                    null
                                }
                                <TouchableOpacity style={styles.itemButton} onPress={() => { navigation.navigate("InitConsent") }}>
                                    <Text style={{ color: "black" }}>{item.buttonText1}</Text>
                                </TouchableOpacity>

                            </View>
                            :
                            null}
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
                data={data}
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {
                        useNativeDriver: false,
                    }
                )}
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
                        data={data}
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        // backgroundColor: '#FFAE42',
        // justifyContent: "space-around",
        alignItems: 'center',
        // padding: 20,
        marginTop: 50,
        marginHorizontal: 40,
        borderRadius: 10,
    },
    itemButtonTextView: {
        padding: 15,
        marginTop: 10,
        // height: 60,
        borderRadius: 10,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    itemText: {
        fontSize: 16,
        color: "black",
        textAlign: "justify"
    },
    tinyLogo: {
        width: 350,
        height: 380,
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
    buttonView: {
        width: "100%",
        paddingTop: 20
    }

});

export default StartScreen;