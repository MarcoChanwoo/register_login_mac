import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from '../../node_modules/axios/index';
import user, { userSaga } from './user';
import write from './write';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    write,
});

export function* rootSaga() {
    yield all([authSaga(), userSaga()]);
}

export default rootReducer;
