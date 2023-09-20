import { createSlice } from '@reduxjs/toolkit';

const initialState: initialState = {
    items: [],
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push({
                id: Math.floor(Date.now() / 100),
                name: action.payload.name,
                comments: [],
            });
        },
        removeItem(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;

type item = {
    id: number;
    name: string;
    comments: [];
};
export type initialState = {
    items: item[];
};
