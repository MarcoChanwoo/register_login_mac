import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from '../../node_modules/axios/index';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
});

export function* rootSaga() {
    yield all([authSaga(), userSaga()]);
}

export default rootReducer;
