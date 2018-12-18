import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from "react-native-elements";

class ElementsInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { label, placeholder, error, ...rest } = this.props
        return (
            <View style={styles.container}>
                <Text>{label}</Text>
                {/* <FormLabel>{label}</FormLabel> */}
                <TextInput placeholder={placeholder} {...rest} />
                {/* <FormInput placeholder={placeholder} {...rest} /> */}
                <Text>{error}</Text>
                {/* <FormValidationMessage>{error}</FormValidationMessage> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //   flex: 1,
        width: '90%',
        backgroundColor: '#fff',
        alignSelf: 'center',
        padding: 10
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: '#000'
    },
});

export default ElementsInput;
