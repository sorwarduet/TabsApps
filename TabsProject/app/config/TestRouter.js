import React from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { View, StyleSheet, Image } from 'react-native';

import Users from '../screens/Users';
import Albums from '../screens/Albums';
import Photos from '../screens/Photos';
import Posts from '../screens/Posts';




{
   tabBarPosition: 'bottom',
   swipeEnabled: true,
   tabBarOptions: {
       activeTintColor: '#f2f2f2',
       activeBackgroundColor: '#2EC4B6',
       inactiveTintColor: '#666',
       showIcon: true,
       showLabel: true,
       lazyLoad: false,
       labelStyle: {
           fontSize: 15,
           padding: 4
       },
   }
}


















export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Users',
        };
    }
    render() {
      return (
          <View style={styles.container}>
            <TabNavigator tabBarStyle={styles.tabBarStyle} tabBarShadowStyle={styles.tabBarShadowStyle}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Users'}
                        title="Users"
                        selectedTitleStyle={styles.selectedTitleStyle}
                        renderIcon={() => (
                            <Image style={styles.tabBarIcon} source={require('../images/normal.png')} />
                        )}
                        renderSelectedIcon={() => (
                            <Image
                                style={[styles.tabBarSelectedIcon]}
                                source={require('../images/normal.png')}
                            />
                        )}
                        onPress={() => this.setState({ selectedTab: 'Users' })}>
                        <Users />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Albums'}
                        title="Albums"
                        selectedTitleStyle={styles.selectedTitleStyle}
                        renderIcon={() => (
                            <Image style={styles.tabBarIcon} source={require('../images/normal.png')} />
                        )}
                        renderSelectedIcon={() => (
                            <Image
                                style={[styles.tabBarSelectedIcon]}
                                source={require('../images/normal.png')}
                            />
                        )}
                        onPress={() => this.setState({ selectedTab: 'Albums' })}
                    >
                        <Albums />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Photos'}
                        title="Photos"
                        selectedTitleStyle={styles.selectedTitleStyle}
                        renderIcon={() => (
                            <Image style={styles.tabBarIcon} source={require('../images/normal.png')} />
                        )}
                        renderSelectedIcon={() => (
                            <Image
                                style={[styles.tabBarSelectedIcon]}
                                source={require('../images/normal.png')}
                            />
                        )}
                        onPress={() => this.setState({ selectedTab: 'Photos' })}>
                        <Photos/>

                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Posts'}
                        title="Posts"
                        selectedTitleStyle={styles.selectedTitleStyle}
                        renderIcon={() => (
                            <Image style={styles.tabBarIcon} source={require('../images/normal.png')} />
                        )}
                        renderSelectedIcon={() => (
                            <Image
                                style={[styles.tabBarSelectedIcon]}
                                source={require('../images/normal.png')}
                            />
                        )}
                        onPress={() => this.setState({ selectedTab: 'Posts' })}
                    >
                        <Posts />
                    </TabNavigator.Item>


                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBarStyle: {
        backgroundColor: '#fff',
        overflow: 'visible',
    },
    tabBarShadowStyle: {
        height: 0,
    },
    selectedTitleStyle: {
        color: '#b42325',
    },
    logoIcon: {
        zIndex: 9999,
        position: 'absolute',
        top: -50,
        left: -25,
        width: 60,
        height: 60,
    },
    tabBarIcon: {
        width: 26,
        height: 26,
        resizeMode: 'contain',
        tintColor: '#5f5f5f',
    },
    tabBarSelectedIcon: {
        width: 26,
        height: 26,
        resizeMode: 'contain',
        tintColor: '#b42325',
    },
});
