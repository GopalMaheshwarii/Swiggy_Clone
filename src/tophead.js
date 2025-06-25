import React from "react";
import { Outlet } from "react-router"
import { useSelector,useDispatch } from "react-redux";


export default function TopHead(){
    let {totalcount}= useSelector((state)=>state.cartslice);
    function Header(){
        return (
            <>
            <div className="flex  justify-around  p-2.5 shadow-xl items-center">
            <div className="font-bold text-[#ff5200] text-3xl">Swiggy</div>
            <div className="flex gap-10 ">
                <a href="" target="_blank">Swiggy Coperate</a>
                <a href="" target="_blank">search</a>
                <a href="" target="_blank">Offers</a>
                <a href="" target="_blank">Help</a>
                <a href="" target="_blank">Sign in</a>
                <a href="" target="_blank">Cart({totalcount})</a>
            </div>
        </div>
            </>
        )
    }
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}