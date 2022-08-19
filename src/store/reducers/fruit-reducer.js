import { createReducer } from '@reduxjs/toolkit';
import { addFruit, expireFruit, removeFruit } from '../actions/fruit-action';

const initialState = {
    fruits: [],
    msg: 'Depart'
};

const fruitReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addFruit, (state, action) => {
            state.fruits.push(action.payload);
            state.msg = 'Ajout';
        })
        .addCase(removeFruit, (state, action) => {
            const fruitId = action.payload;

            // ↓ Recherche de l'index et suppression 
            const targetIndex = state.fruits.findIndex(f => f.id === fruitId);
            state.fruits.splice(targetIndex, 1);

            // ↓ Via une copie et un filter
            // state.fruits = state.fruits.filter(f => f.id === fruitId);
        })
        .addCase(expireFruit, (state, action) => {
            const fruitId = action.payload;

            const targetIndex = state.fruits.findIndex(f => f.id === fruitId);
            state.fruits[targetIndex].expire = true;
        });
});

export default fruitReducer;