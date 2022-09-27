import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basketCards: [],
    sumProducts: 0,
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProductCard: (state, action) => {
            state.basketCards.push(action.payload)
            state.sumProducts = state.sumProducts + action.payload.price
        },
        removeProductCard: (state, action) => {
            state.basketCards = state.basketCards.filter((elem) => elem.idx !== action.payload.idx)
            state.sumProducts = state.sumProducts - action.payload.price
        },
    },
})
export const { addProductCard, removeProductCard } = basketSlice.actions
export default basketSlice.reducer