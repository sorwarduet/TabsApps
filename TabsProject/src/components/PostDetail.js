
import React from 'react';
import { Card, Text } from 'react-native-elements';

//import create own Component
import CardSection from './common/CardSection';

const PostDetail = ({ post }) => {
    const { title, body } = post;
    return (
        <Card>
            <CardSection>
                <Text style={{ fontSize: 16 }}>{title}</Text>
            </CardSection>
            <CardSection>
                <Text>{body}</Text>
            </CardSection>
       </Card>
    );
};

export default PostDetail;
