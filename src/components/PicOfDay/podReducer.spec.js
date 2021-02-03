/* eslint-disable no-undef */
import * as actions from './podActions';
import podReducer from './podReducer';
import { sampleResponse, sampleError } from '../../utils/mockData';

const initialState = {
    loading: false,
    error: null,
    podDetails: {
        url: '',
    },
};

describe('pod reducer', () => {
    test('api request should trigger loading', () => {
        const action = { type: actions.TYPES.GET_POD };
        const newState = podReducer(initialState, action);
        expect(newState.loading).toEqual(true);
    });

    test('api success should return data with image url', () => {
        const state = {
            ...initialState,
            loading: true,
        };
        const action = { type: actions.TYPES.GET_POD_SUCCESS, payload: sampleResponse };
        const newState = podReducer(state, action);
        expect(newState.loading).toEqual(false);
        expect(newState.podDetails.url.length).toBeGreaterThan(0);
    });

    test('api error should have error message', () => {
        const state = {
            ...initialState,
            loading: true,
        };
        const action = { type: actions.TYPES.GET_POD_ERROR, error: sampleError };
        const newState = podReducer(state, action);
        expect(newState.loading).toEqual(false);
        expect(newState.error.length).toBeGreaterThan(0);
    });
});
