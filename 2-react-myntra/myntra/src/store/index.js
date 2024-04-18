import itemsSlice from "./itemsSlice"
import { configureStore } from "@reduxjs/toolkit"
import fetchSlice from "./fetchSlice"
import bagSlice from "./BagSlice"

const myntraStore = configureStore({
    reducer:{
        items: itemsSlice.reducer,
        fetchStatus: fetchSlice.reducer,
        bag:bagSlice.reducer
    }
})

export default myntraStore