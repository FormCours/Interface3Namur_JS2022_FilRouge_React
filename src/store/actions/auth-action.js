import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk('user/register',
    async (data, thunkAPI) => {

        // Requete AJAX vers le serveur Backend
        const response = await axios.post('http://localhost:8080/api/auth/register', data);
        return response.data.token;
    }
);

export const logoutUser = createAction('user/logout');