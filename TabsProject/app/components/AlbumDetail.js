
import React from 'react';
import { Card, Text } from 'react-native-elements';

//import create own Component

import CardSection from './common/CardSection';

const AlbumDetail = ({ album }) => {
    const { title } = album;

    return (
      <Card>
         <CardSection>
             <Text style={{ fontSize: 16 }}>{ title }</Text>
         </CardSection>
     </Card>
   );
};

export default AlbumDetail;
