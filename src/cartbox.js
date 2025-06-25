import React from "react ";
import { useSelector,useDispatch } from "react-redux";
import { Increase,Decrease } from "./cartslice";

export default function Cartbox(){
    let dispatch=useDispatch();
    let {data,totalcount}=useSelector((state)=>state.cartslice);

    return (
        <>
        <div className="w-[1000px]">
            {
                [...data.keys()].map((id,index)=>(
                    <div key={id} className="">
                        <div className="">{}</div>
                    </div>
                ))
            }

        </div>
        </>
    )
}