'use client'
import { createSlice} from '@reduxjs/toolkit'

const Cartslice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
addcart(state,action){
    state.push(action.payload)
},
remove(state,action){
return state.filter((item)=>item.id !== action.payload)
}
    }
})

export const {addcart,remove}=Cartslice.actions;

export default Cartslice.reducer;