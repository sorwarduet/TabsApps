
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

//import third party library
import axios from 'axios';

//import create own Component
import UserDetail from '../components/UserDetail';

class Users extends Component {
    state={
        users: [],
    };

    //Collection of data in API then store local users arry
    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => this.setState({
            users: response.data,
        }));
    }

//Create the runder function whcih render the user Detaail passing usr in props
    renderUsers() {
        return this.state.users.map(user => <UserDetail key={user.id} user={user} />);
    }

    render() {
        return (
        <ScrollView>
            <View>
                {this.renderUsers()}
            </View>
        </ScrollView>
      );
    }
}

export default Users;
