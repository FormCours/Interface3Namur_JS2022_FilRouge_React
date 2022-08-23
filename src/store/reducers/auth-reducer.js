import { createReducer } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser } from '../actions/auth-action';

const initialState = {
    token: null,
    isConnected: false,
    errorMsg: null
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isConnected = true;
            state.token = action.payload;
            state.errorMsg = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isConnected = true;
            state.token = action.payload;
            state.errorMsg = null;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.errorMsg = 'Veuillez remplir toutes les données necessaires';
            console.log(action);
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.errorMsg = 'Vos crédentials sont invalides !';
            console.log(action);
        })
        .addCase(logoutUser, (state, action) => {
            state.isConnected = false;
            state.token = null;
            state.errorMsg = null;
        });
});

export default authReducer;