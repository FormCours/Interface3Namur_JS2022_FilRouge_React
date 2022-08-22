import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth-reducer';
import fruitReducer from './reducers/fruit-reducer';

const store = configureStore({
    reducer: {
        fruit: fruitReducer,
        auth: authReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;