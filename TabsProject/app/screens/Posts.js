import React, { Component } from 'react';
import { ScrollView } from 'react-native';

//import third party library
import axios from 'axios';

//import create own Component
import PostDetail from '../components/PostDetail';

class Posts extends Component {
	state = {
	posts: [],
	userId: 1,
	loading: false,
	};

	//Collection of data in API then store local photos arry
	componentWillMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts', {
			params: {
			userId: this.state.userId,
			}
    })
	.then(response =>
		this.setState({
                posts: response.data,
			})
		);
	}

	renderPost() {
        return this.state.posts.map(post => <PostDetail key={post.id} post={post} />);
	}

	render() {
		return (
		<ScrollView>
       {this.renderPost()}
		</ScrollView>
		);
	}
}

export default Posts;
