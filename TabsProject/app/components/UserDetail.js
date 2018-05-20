
import React, { Component } from 'react'
import {View,Linking } from 'react-native'
import {Card,Text} from 'react-native-elements'


//import create own Component

import CardSection from './common/CardSection'

const UserDetail=({user})=>{
    const { name, email, phone, website}=user;

    return <Card>
			<CardSection>
				<Text h4>{name}</Text>
			</CardSection>

			<CardSection>
				<View>
                    <Text >{email}</Text>
					<Text>{phone}</Text>
					<Text style={{ fontWeight: 'bold' }}>{website}</Text>
				</View>
			</CardSection>
		</Card>;


}

export default UserDetail;