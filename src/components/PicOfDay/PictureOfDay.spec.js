/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import PictureOfDay from './PictureOfDay';
import { sampleResponse } from '../../utils/mockData';

describe('PictureOfDay Component', () => {
    test('matches snapshot', () => {
        const tree = renderer.create(<PictureOfDay podDetails={sampleResponse} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
