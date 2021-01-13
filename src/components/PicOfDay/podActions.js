const TYPES = {
    GET_POD: 'GET_POD',
    GET_POD_SUCCESS: 'GET_POD_SUCCESS',
    GET_POD_ERROR: 'GET_POD_ERROR',
};

const getPictureOfDay = () => ({ type: TYPES.GET_POD });

export {
    TYPES,
    getPictureOfDay
};