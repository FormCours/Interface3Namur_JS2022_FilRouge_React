// Liste d'actions pour la categorie "Fruit"
//  - Ajouter un fruit → { family: 'Pomme' weight: '100gr' }
//  - Supprimer un fruit
//  - Indiquer qu'un fruit est périmé

import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Action creator "oldschool"
/*
export const addFruit = (fruit) => {
    return {
        type: 'fruit/add',
        payload: {
            id: nanoid(),
            ...fruit
        }
    };
};

export const removeFruit = (fruitId) => {
    return {
        type: 'fruit/remove',
        payload: fruitId
    };
};
*/

// Action creator "moderne" (Avec Le Redux Toolkit)
export const addFruit = createAction('fruit/add', (fruit) => ({
    payload: {
        id: nanoid(),
        ...fruit
    }
}));

export const removeFruit = createAction('fruit/remove');

export const expireFruit = createAction('fruit/expire');