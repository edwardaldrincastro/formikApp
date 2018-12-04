import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from "./components/Input";
import ElementsInput from "./components/ElementsInput";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from 'yup'

class SamplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handleSubmit = values => {
        alert(JSON.stringify(values))
        console.log(values)
    }
    render() {
        return (
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={this.handleSubmit}
                validationSchema={Yup.object().shape({
                    password: Yup.string()
                        .min(6, 'Too Short!')
                        .max(70, 'Too Long!')
                        .required('Required password'),
                    email: Yup.string()
                        .email('Invalid email')
                        .required('Required email'),
                })}>

                {({ values, handleSubmit, handleChange, errors, touched, setFieldValue }) => (
                    <View style={styles.container}>
                        <Text style={styles.welcome}> Sample Page </Text>
                        <ElementsInput
                            name='email'
                            label='Email'
                            placeholder='Enter your email'
                            onChangeText={handleChange('email')}
                            value={values.email}
                            error={touched.email && errors.email} />
                        <ElementsInput
                            name='password'
                            label='Password'
                            placeholder='Password'
                            onChangeText={handleChange('password')}
                            value={values.password}
                            error={touched.password && errors.password}
                            secureTextEntry />
                        {/* <ElementsInput
                            label='ConfirmPassword'
                            placeholder='Confirm your password'
                            onChangeText={handleChange('confirmPassword')}
                            value={values.confirmPassword}
                            // error={errors.confirmPassword} 
                            secureTextEntry /> */}
                        <Button title='Submit' onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //   alignItems: 'center',
        backgroundColor: '#80CBC4',
        padding: 20
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


export default SamplePage;
