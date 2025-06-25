import { createSlice} from "@reduxjs/toolkit";

const slicer3 = createSlice({
  name: "cartslice",
  initialState: {
    data: {},//key=id  value=count
    totalcount:0,
  },
  reducers: {
     Increase:(state,action)=>{
        let id=action.payload;
        if(!state.data[id]){
            state.data[id]=1;
        }
        else {
            state.data[id]=state.data[id]+1;
        }
        
        state.totalcount = state.totalcount+1;
     },
     Decrease:(state,action)=>{
        let id=action.payload;
        if(state.data[id] && state.data[id]>0){
            state.totalcount = state.totalcount-1;
            state.data[id]=state.data[id]-1;
        }
        
     },
  },
});
export const {Increase,Decrease} = slicer3.actions;
export default slicer3.reducer;
