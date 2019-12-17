import { createStore, applyMiddleware } from 'redux';
import thuk from 'redux-thunk'
import UserReducer from '../Reducers/UserReducer';

const Store = createStore(UserReducer, applyMiddleware(thuk));

export default Store;
