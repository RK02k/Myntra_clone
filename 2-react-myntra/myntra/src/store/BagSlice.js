import {createSlice} from "@reduxjs/toolkit"
// import { Default_items } from "../data/items";


const bagSlice = createSlice({
    name: 'bags',
    initialState: [],
    reducers:{
        addToBag: (state,action) =>{
            state.push(action.payload);
            // return action.payload;
        },
        removeFromBag: (state,action) =>{
           return state.filter(itemId => itemId !== action.payload)
        }
    }
})

export const bagActions = bagSlice.actions;

export default bagSlice;