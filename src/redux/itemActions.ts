import { createAction } from '@reduxjs/toolkit';

export const addItem = createAction<{ name: string }>('items/addItem');
export const removeItem = createAction<{ id: number }>('items/removeItem');
export const addComment = createAction<{ id: number; text: string; color: string }>(
    'items/addComment'
);
export const setActiveItem = createAction<{ id: number }>('items/setActiveItem');
