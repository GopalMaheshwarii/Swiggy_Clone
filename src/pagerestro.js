import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Fetchdetails } from "./pagerestroslice";
import { Increase, Decrease } from "./cartslice";


function Listcard({ info,veg,nonveg }) {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.cartslice);

    function Which({ id }) {
        if (data[id]) {
            return (
                <div className="flex mt-3 border border-gray-400 rounded-[5px] ">
                    <button
                        className="bg-green-600 text-white font-medium rounded-[3px] px-1.5 py-0.5"
                        onClick={() => dispatch(Increase(id))}
                    >
                        +
                    </button>
                    <h1>&nbsp;&nbsp;{data[id]}&nbsp;&nbsp;</h1>
                    <button
                        className="bg-red-600 text-white font-medium px-1.5 py-0.5"
                        onClick={() => dispatch(Decrease(id))}
                    >
                        -
                    </button>
                </div>
            );
        } else {
            return (
                <button
                    onClick={() => dispatch(Increase(id))}
                    className="font-medium text-green-600 border border-gray-400 py-1 px-4 shadow-xl rounded-[5px] mt-3"
                >
                    ADD
                </button>
            );
        }
    }
    if (
        (veg && nonveg) || 
        (!nonveg && veg && info?.isVeg == 1) || 
        (!veg && nonveg && (!("isVeg" in info)))
    ) {
    return (
        <>
            <div className="flex flex-row flex-nowrap justify-between">
                <div className="pr-8 w-[67%]">
                    <div className="font-medium">{info?.name}</div>
                    <div className="">
                        ₹
                        {Number(
                            info?.price ??
                                info?.finalPrice ??
                                info?.variantsV2?.pricingModels?.[0]?.price ??
                                0
                        ) / 100}
                    </div>
                    <div className="text-green-700 my-3">
                        {`${info?.ratings?.aggregatedRating?.rating ?? ""} (${
                            info?.ratings?.aggregatedRating?.ratingCountV2 ?? ""
                        })`}
                    </div>
                    <div className="text-gray-500">{info?.description}</div>
                </div>
                <div className="w-[3%]"></div>
                <div className="flex flex-col items-center justify-center w-[30%]">
                    <img
                        className="w-[156px] h-[144px]"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.imageId}`}
                        alt=""
                    />
                    <Which id={info?.id} />
                    <div className="text-gray-500">customisable</div>
                </div>
            </div>
            <div className="h-0.5 mt-6 mb-6 bg-gray-300"></div>
        </>
    );
}
else{
    return <></>
}
}

// Flat category like "Flat @189"
function List({ value ,veg,nonveg }) {
    let [expand,setexpand]=useState(true);
    
    return (
        <>
            <div className="h-3 bg-gray-200"></div>
            <div>
                <div className="flex justify-between">
                <div className="font-bold text-2xl mb-6">{value?.title}</div>
                <button onClick={()=>setexpand(!expand)}><span className="material-symbols-outlined">{expand?"arrow_drop_down":"arrow_drop_up"}</span></button>
                {/* <Whichmenu/> */}
                </div>
                {
                    expand &&
                    value?.itemCards?.map((item) => (
                        <Listcard key={item?.card?.info?.id} info={item?.card?.info} veg={veg} nonveg={nonveg}/>
                    ))
                }
               </div>
        </>
    );

}

// Nested category like "Flavour Fun Range"
function Listsubcategoryexpand({cat,veg,nonveg }){
        let [subexpand,setsubexpand]=useState(true);

    return (
        <div >
            <div className="flex justify-between">
            <div className="font-bold text-xl mb-6">{cat?.title}</div>
            <button onClick={()=>setsubexpand(!subexpand)}><span className="material-symbols-outlined">{subexpand?"arrow_drop_down":"arrow_drop_up"}</span></button>
            </div>
            {
            subexpand && cat?.itemCards?.map((item) => (
                <Listcard key={item?.card?.info?.id} info={item?.card?.info}  veg={veg} nonveg={nonveg}/>
            ))}
        </div>
    )
}

function Listsubcategory({ value ,veg,nonveg  }) {
    let [expand,setexpand]=useState(true);
     
    return (
        <>
            <div className="h-3 bg-gray-200"></div>
            <div>
            <div className="flex justify-between">
                <div className="font-bold text-2xl mb-6">{value?.title}</div>
                <button onClick={()=>setexpand(!expand)}><span className="material-symbols-outlined">{expand?"arrow_drop_down":"arrow_drop_up"}</span></button>
                </div>
                {
                expand && value?.categories?.map((cat, index) => <Listsubcategoryexpand key={cat?.title + index} cat={cat} veg={veg} nonveg={nonveg}/> )}
            </div>
        </>
    );
}

// Detect type
function Twotypes({ value,veg,nonveg }) {
    if (value?.categories) {
        return <Listsubcategory value={value} veg={veg} nonveg={nonveg}/>;
    } else {
        return <List value={value} veg={veg} nonveg={nonveg}/>;
    }
}

// Menu container
function Menu({ data }) {
    let [veg,setveg]=useState(true);
    let [nonveg,setnonveg]=useState(true);
    let arr = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    if (!arr) {
        return <div className="text-red-500">Menu not available.</div>; // fallback UI
    }
    let finalarr = arr.filter(
        (value) => "title" in (value?.card?.card || {})
    );
  
    return (
        <div className="container mx-auto">
            <div className="flex mb-[20px] justify-center">
                 <button onClick={()=>setveg(!veg)} className={`min-w-[100px] border border-black p-1.5 mr-[20px] text-white rounded-[6px] ${veg ? "bg-green-400" : "bg-gray-400"}`}>Veg</button>
                 <button onClick={()=>setnonveg(!nonveg)} className={`min-w-[100px] border border-black p-1.5 mr-[20px] text-white rounded-[6px] ${nonveg ? "bg-red-400" : "bg-gray-400"}`}>Non-Veg</button>
</div>

            {finalarr.map((value, index) => (
                <Twotypes key={value?.card?.card?.title + "_" + index} value={value?.card?.card} veg={veg} nonveg={nonveg}/>
            ))}
        </div>
    );
}

// Search bar
function Search() {
    return (
        <div className="container mx-auto sticky top-0 bg-white my-6 py-6">
            <input
                type="text"
                className="h-8 bg-gray-300 w-[100%] rounded-2xl pl-2.5"
                placeholder="Search menu..."
            />
        </div>
    );
}

// Main restaurant page
export default function Pagerestro() {
    const { name } = useParams();
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.pagerestroslice);

    useEffect(() => {
        dispatch(Fetchdetails(name));
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error}</div>;

    return (
        <div className="relative">
            <Search />
            <Menu data={data} />
        </div>
    )
}
