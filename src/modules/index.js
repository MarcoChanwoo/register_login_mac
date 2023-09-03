import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from '../../node_modules/axios/index';

const rootReducer = combineReducers({
    auth,
    loading,
});

export function* rootSaga() {
    yield all([authSaga()]);
}

export default rootReducer;
