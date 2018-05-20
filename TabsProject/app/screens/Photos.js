
import React, { Component } from 'react';
import { View, ScrollView,Text } from 'react-native';

//import third party library
import { Card,Tile } from 'react-native-elements'
import axios from 'axios'

//import create own Component
import PhotoDetail from '../components/PhotoDetail';




class Photos extends Component {
    state = {
        photos: [],
        albumId:1,
        loading:false,
    };

    //Collection of data in API then store local photos arry
    componentWillMount() {
        this.fetchData();
    }

    fetchData(){

        axios.get('https://jsonplaceholder.typicode.com/photos', {
            params: {
                albumId: this.state.albumId,
            }
        })
            .then(response =>
                this.setState({
                    photos: response.data,
                })
            );

    }
    handleEnd(){
        this.setState({
            albumId: this.state.albumId+1,
        }),
        this.fetchData()
    }

    renderPhoto() {
        return this.state.photos.map(photo => <PhotoDetail key={photo.id} photo={photo} />)
    }



    render() {
        console.log('====================================')
        console.log(this.state.photos)
        console.log('====================================')
      
        return (
            <ScrollView>
           
                    
          {this.renderPhoto()}
                
            </ScrollView>
        )
    }
}

export default Photos;