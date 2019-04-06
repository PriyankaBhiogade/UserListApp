import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import * as data1 from './Person.json';

export default class Information extends Component {

    static navigationOptions = {
        title: 'USER DETAILS',
        headerTitleStyle: { color: 'white' },
        headerStyle: { backgroundColor: 'deepskyblue' }

    };


    render() {
        var info1 = this.props.navigation.state.params.inform;
        var arrData = [];
        arrData = data1.list;


        for (let i in arrData) {
            if (info1 === arrData[i].firstName + " " + arrData[i].lastName) {
                var firstName = "First Name : " + arrData[i].firstName;
                var lastName = "Last Name : " + arrData[i].lastName;
                var mobileNumber = "Mobile Number : " + arrData[i].mono;
                var city= "City : " + arrData[i].city;
                var state = "State : " + arrData[i].state;
                var DOB = "DOB : " + arrData[i].DOB;
               
            }
        }
        return (
            <View style={styles.container}>
                <View style={styles.RectangleShapeView}>
                    <Text style={styles.userItem}>{firstName}</Text>
                    <Text style={styles.userItem}>{lastName}</Text>
                    <Text style={styles.userItem}>{mobileNumber}</Text>
                    <Text style={styles.userItem}>{city}</Text>
                  <Text style={styles.userItem}>{state}</Text>
                    <Text style={styles.userItem}>{DOB}</Text>
                   
                </View>
            </View>
        )


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userItem: {
        marginTop: 7,
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },
    RectangleShapeView: {
        justifyContent: 'center',
        marginTop: 20,
        height: 220,
        marginLeft: 20,
        marginRight: 20,
        padding: 15,
        backgroundColor: 'lavender',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8
    }
});

AppRegistry.registerComponent('UserListApp', () => Information);
