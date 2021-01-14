import * as actions from './podActions';
import { sampleResponse } from '../../utils/mockData';
import { getPod } from './podSaga';
import { runSaga } from 'redux-saga';
import * as api from '../../api/podApi';

describe('pod actions', () => {

    test('getPod should run with success against mock API', async () => {
        const dispatchedActions = [];
        api.fetchPod = jest.fn(() => {
            return Promise.resolve({
                status:200,
                json: () => {
                    return sampleResponse;
                }
            });
        });

        const fakeStore = {
            getState: () => ({ }),
            dispatch: action => dispatchedActions.push(action)
        }

        await runSaga(fakeStore, getPod).toPromise();
        expect(api.fetchPod).toHaveBeenCalled();
        expect(dispatchedActions.length).toEqual(1);
        expect(dispatchedActions[0]).toHaveProperty('type');
        expect(dispatchedActions[0].type).toEqual(actions.TYPES.GET_POD_SUCCESS);
    });

});

