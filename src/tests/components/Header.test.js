import React from 'react';
import ReactShallowRendering from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
    const renderer = new ReactShallowRendering();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});