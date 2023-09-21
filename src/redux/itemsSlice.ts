import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './types';
import * as itemActions from './itemActions';

const initialState: initialState = {
    items: [],
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(itemActions.addItem, (state, action) => {
                state.items.push({
                    id: Math.floor(Date.now() / 100),
                    name: action.payload.name,
                    comments: [],
                    active: state.items.length === 0 ? true : false,
                });
            })
            .addCase(itemActions.removeItem, (state, action) => {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            })
            .addCase(itemActions.addComment, (state, action) => {
                const { text, color } = action.payload;
                const item = state.items.find((item) => item.id === action.payload.id);

                if (item) {
                    item.comments.push({
                        id: item.id + '-' + item.comments.length,
                        body: text,
                        color,
                    });
                }
            })
            .addCase(itemActions.setActiveItem, (state, action) => {
                const { id } = action.payload;

                state.items.forEach((item) => {
                    item.active = item.id === id;
                });
            });
    },
});

export default itemsSlice.reducer;
