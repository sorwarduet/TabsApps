
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

//import third party library
import axios from 'axios';

//import create own Component
import AlbumDetail from '../components/AlbumDetail';

class Albums extends Component {
    state = {
        albums: [],
        userId: 1,
        loading: false,
    };

    //Collection of data in API then store local albums arry
    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/albums', {
            params: {
                userId: this.state.userId,
            }
        })
			.then(response =>
				this.setState({
                    albums: response.data,
				})
			);
    }

    renderAlbum() {
        return this.state.albums.map(album => <AlbumDetail key={album.id} album={album} />);
    }

    render() {
        return (
            <ScrollView>
                <View>
                    {this.renderAlbum()}
                </View>
            </ScrollView>
        );
    }
}

export default Albums;
