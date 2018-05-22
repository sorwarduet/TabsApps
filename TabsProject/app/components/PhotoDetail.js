
import React from 'react';
import { Card, Text } from 'react-native-elements';

//import create own Component

const PhotoDetail = ({ photo }) => {
    const { title } = photo;

    return (
        <Card>
            <Text>{title}</Text>
        </Card>
    );
};

export default PhotoDetail;
