
import React, { Component } from 'react'
import { View, Linking } from 'react-native'
import { Card, Text, Button } from 'react-native-elements'


//import create own Component

import CardSection from './common/CardSection'

const PostDetail = ({ post }) => {
    const { title,body } = post;

    return (
        <Card>
            <CardSection>
                <Text style={{ fontSize: 16 }}>{title}</Text>
            </CardSection>
            <CardSection>
                <Text>{body}</Text>
            </CardSection>
       </Card>
    )


}

export default PostDetail;