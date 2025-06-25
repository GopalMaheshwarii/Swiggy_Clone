import { configureStore } from "@reduxjs/toolkit";
import slice1reducer from "./restaurantsslice"
import slice2reducer from "./pagerestroslice"
import slice3reducer from "./cartslice";
const stores=configureStore(
    {
        reducer:{
            restaurantsslice:slice1reducer,
            pagerestroslice:slice2reducer,
            cartslice:slice3reducer,
        }
    }
)
export default stores;
//state={
// slice1:{
//     data,loading,error
// }}