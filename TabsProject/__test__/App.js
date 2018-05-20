import 'react-native';
import React from 'react';
import App from '../App';


import render from 'rect-test-render';

if ('renders correctly', () => {
    const tree = render.create(
        <App />
    );
});
