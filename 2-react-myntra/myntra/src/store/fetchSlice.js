import {createSlice} from "@reduxjs/toolkit"
// import { Default_items } from "../data/items";


// const fetchSlice = createSlice({
//     name: 'fetchStatus',
//     initialState: 
//     {
//         fetchDone :false,
//         currentlyFetchin:false,
//     },
//     reducers:
//     {
//         markFetchDone: (state) =>
//         {
//             return state.fetchDone = true;
//         },
//         markFetchingStarted:(state)=>
//         {
//             return state.currentlyFetchin = true;
//         },
//         markFetchingFinished:(state) =>{
//             return state.currentlyFetchin = false;
//         }
//     }
// })

const fetchSlice = createSlice({
    name: 'fetchStatus',
    initialState: 
    {
        fetchDone: false,
        currentlyFetching: false,
    },
    reducers:
    {
        markFetchDone: (state) =>
        {
            state.fetchDone = true;
        },
        markFetchingStarted:(state)=>
        {
            state.currentlyFetching = true;
        },
        markFetchingFinished:(state) =>{
            state.currentlyFetching = false;
        }
    }
})


export const fetchStatusActions = fetchSlice.actions;

export default fetchSlice;