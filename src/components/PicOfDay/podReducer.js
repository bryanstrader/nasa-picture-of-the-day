import { TYPES } from './podActions';

const initialState = {
    loading: false,
    error: null,
    podDetails: {
        url: '',
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_POD:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case TYPES.GET_POD_SUCCESS: {
            const { payload } = action;
            return {
                ...state,
                podDetails: payload,
                loading: false,
                error: null,
            };
        }
        case TYPES.GET_POD_ERROR:
            return { ...state, loading: false, error: action.error };
        default:
            return { ...state };
    }
};

export default reducer;
