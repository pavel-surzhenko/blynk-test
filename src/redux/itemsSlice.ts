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
                active: state.items.length === 0 ? true : false,
            });
        },
        removeItem(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        addComment(state, action) {
            console.log(action.payload);

            const { text, color } = action.payload;
            const item = state.items.find((item) => item.id === action.payload.id);

            // if(item) {
            //     item.comments.push()
            // }
        },
        setActiveItem(state, action) {
            const { id } = action.payload;

            state.items.forEach((item) => {
                item.active = item.id === id;
            });
        },
    },
});

export const { addItem, removeItem, addComment, setActiveItem } = itemsSlice.actions;
export default itemsSlice.reducer;

type item = {
    id: number;
    name: string;
    comments: [];
    active: boolean;
};
export type initialState = {
    items: item[];
};
