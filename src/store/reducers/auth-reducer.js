import { createReducer } from '@reduxjs/toolkit';
import { logoutUser, registerUser } from '../actions/auth-action';

const initialState = {
    token: null,
    isConnected: false
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isConnected = true;
            state.token = action.payload;
        })
        .addCase(registerUser.rejected, (state, action) => {
            console.log(action);
        })
        .addCase(logoutUser, (state, action) => {
            state.isConnected = false;
            state.token = null;
        });
});

export default authReducer;