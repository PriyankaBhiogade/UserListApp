import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, FlatList,StatusBar , TouchableOpacity, ItemSeperatorComponent } from 'react-native';
import * as data1 from './Person.json';
console.disableYellowBox = true;

export default class UserList extends Component {
    static navigationOptions = {

        title: 'USER LIST APP',
        headerTitleStyle: { color: 'white' },
        headerTitleStyle : { alignSelf : 'center'},
        headerStyle: { backgroundColor: 'deepskyblue'}

    };

    
    goToNextScreen(item) {
        this.props.navigation.navigate('Detail', {inform: item});
    }

    renderSeparator = () => {
        return (
            <View style={styles.separator}>
            </View>
        )
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.goToNextScreen(item)}>
          
                <Text style={styles.itemContainer}>{item}</Text>
            </TouchableOpacity>
            
        )
    }

    render() {

        var json = data1.list;
        var arrayJson = [];
        for (let i in json) {
            var info = json[i].firstName + " " + json[i].lastName;
            arrayJson.push(info);
        }

        return (
            <ScrollView>
                <View style={styles.container}>
                <StatusBar backgroundColor="black" barStyle="light-content"/>
                
                    <FlatList
                        data={arrayJson}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
            </ScrollView>
            
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    itemContainer: {
        padding: 10,
        height: 60,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'black'
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: 'black'
    }
});
AppRegistry.registerComponent('UserListApp', () => UserList);