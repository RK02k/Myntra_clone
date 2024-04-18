import {configureStore, createSlice} from "@reduxjs/toolkit"
// import { Default_items } from "../data/items";


const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers:{
        addInitialItems: (state,action) =>{
            // console.log("reducer",state,action)
            return action.payload;
        }
    }
})

export const itemsActions = itemsSlice.actions;

export default itemsSlice;