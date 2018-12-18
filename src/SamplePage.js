import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from "./components/Input";
import ElementsInput from "./components/ElementsInput";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from 'yup'

const axios = require('axios');

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
    handleData = async (values, handleReset) => {
        await this.getData(values)
        await handleReset
    }
    handleReset = () => {
        console.log('reset')
    }
    getData = async (values, FormikBag) => {
        try {
            console.log('name:', values.name)
            console.log('bag', FormikBag)
            // const response = await axios.get(`http://10.0.3.2:3000/posts/${values.name}`)
            // console.log('fetched', response)
            // await this.deleteData(response)
            const response = await axios({
                method: 'get',
                url: 'http://10.0.3.2:3000/posts/',
                params: {
                    title: values.name
                },
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

            // setFieldValue('name','')
            console.log('getdata', response)
            console.log('my values:', values)
            response.data.length !== 0 ? await this.deleteData(response.data[0].id, FormikBag) : (alert('Name cannot be found'), console.log('no id found'))
        } catch (error) {
            alert('error in get')
            console.error(error);
        }
    }

    deleteData = async (response, FormikBag) => {
        try {
            console.log('button clicked')
            const res = await axios.delete(`http://10.0.3.2:3000/posts/${response}`)

            FormikBag.resetForm()
            alert('Deleted')
        } catch (error) {
            alert('error in delete')
            console.error(error);
        }
    }

    // handleSubmit = async (values) => {
    //     try {
    //         const response = await axios({
    //             method: 'post',
    //             url: 'http://10.0.3.2:3000/posts/',
    //             data: {
    //                 title: values.name
    //             },
    //             headers: {
    //                 "Content-type": "application/json; charset=UTF-8"
    //             }
    //         })
    //         console.log(response)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    render() {
        console.log("Initializing app...")
        return (
            <Formik
                // initialValues={{name: '', email: '', password: '' }}
                initialValues={{ name: '' }}
                onSubmit={this.handleSubmit}
                onReset={this.handleReset}                
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .required('Required name'),
                    // password: Yup.string()
                    //     .min(6, 'Too Short!')
                    //     .max(70, 'Too Long!')
                    //     .required('Required password'),
                    // email: Yup.string()
                    //     .email('Invalid email')
                    //     .required('Required email'),
                })}>

                {({ values, handleSubmit, handleChange, handleReset, errors, touched, setFieldValue, resetForm, setValues, reset, FormikBag, isSubmitting }) => (
                    <View style={styles.container}>
                        <Text style={styles.welcome}> Sample Page </Text>
                        <ElementsInput
                            name='name'
                            label='Name'
                            placeholder='kimi no nawa'
                            onChangeText={handleChange('name')}
                            value={values.name}
                            error={touched.name && errors.name}
                        />
                        {/* <ElementsInput
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
                            secureTextEntry /> */}
                        {/* <ElementsInput
                            label='ConfirmPassword'
                            placeholder='Confirm your password'
                            onChangeText={handleChange('confirmPassword')}
                            value={values.confirmPassword}
                            // error={errors.confirmPassword} 
                        secureTextEntry />*/}
                        {/* <Button title='Reset' onPress={resetForm} /> */}
                        <Button title='Submit' onPress={handleSubmit}
                        />
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
