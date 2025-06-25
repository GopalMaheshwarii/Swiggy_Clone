import React,{useState,useEffect} from "react"
import { useSelector,useDispatch } from "react-redux"
import { Fetchdata } from "./restaurantsslice"
import { Link } from "react-router";
import Shimmer from "./Shimmer";


export default function Restaurants(){
    let {data,loading,error}=useSelector((state)=>state.restaurantsslice);
    const dispatch=useDispatch();

    useEffect(()=>{
         dispatch(Fetchdata());
    },[])
    // useEffect(()=>{
    //     async function fetchData() {
    //         try {
    //             const proxyServer = "https://cors-anywhere.herokuapp.com/";
    //             const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
    //             const response = await fetch(proxyServer + swiggyAPI);
    //             const givedata = await response.json();
    //             console.log(givedata?.data?.cards); 
    //             setdata(givedata);
    //         } catch (error) {
    //             console.error("Fetch failed:", error);
    //         }
    //     }
    //     fetchData(); // ✅ you forgot to call it
    // }, []);

    function Whatsmind({ data }) {
        let whatsdata = data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
      
        return (
          <div className="">
            <h1 className="container mx-auto font-medium text-2xl mt-20 ">
              Shop groceries on Instamart
            </h1>
            <div
              className="flex overflow-x-auto pt-4 container mx-auto gap-8"
              style={{ scrollbarWidth: "none" }}
            >
              {whatsdata?.map((value) => (
                <div key={value?.id} className="flex flex-col">
                  <a href={value?.action?.link}>
                    <img
                      className="min-w-30 max-w-30"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.imageId}`}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      }

      function Toprestaurants({ data }) {
        let restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        function Card({value}){
            return (
                <>
                 <Link to={`city/delhi/${value?.id}`}>
                <div className="max-w-[280px]  relative rounded-2xl flex flex-col">
                    <div className=""><img className="rounded-2xl min-w-[280px] h-[186px]" src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.cloudinaryImageId}`} ></img></div>
                    <div className="flex flex-col p-2.5">
                    <div className="min-w-[260px] font-bold text-2xl overflow-x-hidden  whitespace-nowrap text-ellipsis absolute top-[154px]  text-white bg-gradient-to-t from-black to-transparent opacity-80 ">{`${value.aggregatedDiscountInfoV3?.header} ${value.aggregatedDiscountInfoV3?.subHeader}`}</div>
                    <div className="font-medium text-xl mb-5px overflow-x-hidden  whitespace-nowrap text-ellipsis">{value?.name}</div>
                    <div className="">
                        <span className="font-medium text-green-700">⭐ {value.avgRating}</span>
                        <span className="">    {'\u00B7'}{value?.sla?.slaString}</span>
                    </div>
                    <div className="text-gray-500 overflow-x-hidden  whitespace-nowrap text-ellipsis">{value?.cuisines.join(", ")}</div>
                    <div className="text-gray-500 overflow-x-hidden  whitespace-nowrap text-ellipsis">{value?.areaName}</div>
                    </div>
                    
                </div>
                </Link>
                </>
            )
        }
        return (
          <>
          <div className="container mx-auto font-medium text-2xl ">Top restaurants chains in Delhi</div>
          <div className="mt-8 flex gap-4 flex-nowrap container mx-auto overflow-x-scroll overflow-y-hidden " style={{"scrollbarWidth":"none"}}>
                  {
                  restaurants?.map((value,index)=><Card key={value?.info?.id} value={value?.info}/>)
                 }
          </div>
          </>
        )
      }
      function Onlinerestaurants({ data }) {
        let restaurant = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        function Card({value}){
            return (
                <>
                <Link to={`city/delhi/${value?.id}`}>
                <div className="min-w-[280px]  relative rounded-2xl flex flex-col">
                    <div className=""><img className="rounded-2xl min-w-[280px] h-[186px]" src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.cloudinaryImageId}`} ></img></div>
                    <div className="flex flex-col p-2.5">
                    <div className="min-w-[260px] font-bold text-2xl overflow-x-hidden  whitespace-nowrap text-ellipsis absolute top-[154px]  text-white bg-gradient-to-t from-black to-transparent opacity-80 ">{`${value.aggregatedDiscountInfoV3?.header} ${value.aggregatedDiscountInfoV3?.subHeader}`}</div>
                    <div className="font-medium text-xl mb-5px overflow-x-hidden  whitespace-nowrap text-ellipsis">{value?.name}</div>
                    <div className="">
                        <span className="font-medium text-green-700">⭐ {value.avgRating}</span>
                        <span className="">    {'\u00B7'}{value?.sla?.slaString}</span>
                    </div>
                    <div className="text-gray-500 overflow-x-hidden  whitespace-nowrap text-ellipsis">{value?.cuisines.join(", ")}</div>
                    <div className="text-gray-500 overflow-x-hidden  whitespace-nowrap text-ellipsis">{value?.areaName}</div>
                    </div>
                    
                </div>
                </Link>
                </>
            )
        }
        return (
          <>
           <div className="container mx-auto font-medium text-2xl">Restaurants with online food delivery in Delhi</div>
          <div className="mt-8 grid grid-cols-3 grid-rows-subgrid gap-4 container mx-auto " style={{"scrollbarWidth":"none"}}>
                  {
                  restaurant?.map((value,index)=><Card key={value?.info?.id} value={value?.info}/>)
                 }
          </div>
          </>
        )
      }
      function Bottom(){
        return (
          <>
          <div className="h-[500px] bg-black"></div>
          </>
        )
      }
    if(loading){
      return <Shimmer/>
    }
    return (
            <>
               <Whatsmind data={data}/>
               <hr className="my-[30px] container mx-auto text-gray-400"></hr>
               <Toprestaurants data={data}/>
               <hr className="my-[30px] container mx-auto  text-gray-400"></hr>
               <Onlinerestaurants data={data}/>
               <hr className="my-[30px] container mx-auto  text-gray-400"></hr>
               <Bottom/>
               </>
    )

}