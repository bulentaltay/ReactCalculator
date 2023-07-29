import React from 'react';
import { Dimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default function Button({ onPress, text, size, theme }) {

    // const buttonClickedHandler = () => {
    //     console.log('You have been clicked a button!');
    //     // do something
    // };

    const buttonStyle = [styles.button]

    if (size == 'double') {
        buttonStyle.push(styles.buttonDouble)
    }
    if (theme == 'accent') {
        buttonStyle.push(styles.buttonAccent)
    }
    else {
        buttonStyle.push(styles.buttonSecondary)
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            style={buttonStyle}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}


// Styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
    },
    buttonDouble: {
        width: screen.width / 2 - 10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40
    },
    buttonSecondary: {
        backgroundColor: "#a6a6a6"
    },
    buttonAccent: {
        backgroundColor: "#f09a36"
    }

});
