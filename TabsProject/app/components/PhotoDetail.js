
import React, { Component } from 'react'
import { View, Linking } from 'react-native'
import { Card, Text } from 'react-native-elements'


//import create own Component

import CardSection from './common/CardSection'

const PhotoDetail = ({ photo }) => {
    const { title, url, thumbnailUrl } = photo;

    return (
        <Card>
            
            <Text>{title}</Text>

        </Card>
    )
   


}

export default PhotoDetail;