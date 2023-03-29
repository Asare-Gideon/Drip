import {createSlice,  PayloadAction} from "@reduxjs/toolkit"

interface bottomState {
    value : boolean,
}


const initialState : bottomState = {
    value: false,
}

const bottomNavigationSlice = createSlice({
    name: "bottomNavigation",
    initialState,
    reducers: {
        setBottomNav (state,action:PayloadAction<boolean>){
            state.value = action.payload
        }
    }
})


export const {setBottomNav} = bottomNavigationSlice.actions;
export default bottomNavigationSlice.reducer;