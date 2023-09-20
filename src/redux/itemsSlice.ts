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
                id: new Date().toISOString(),
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
    id: string;
    name: string;
    comments: [];
};
type initialState = {
    items: item[];
};
