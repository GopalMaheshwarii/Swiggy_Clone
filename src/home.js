import React from "react";
import gridelements,{imagegridcard,restaurants} from "../utils/maindata";
import { Link } from "react-router";

export default function Home(){
    function Header(){
        return (
            <div className="bg-[#ff5200] font-serif  ">
            <div className="flex justify-around py-8 container mx-auto">
                <div>
                    <img className="w-40 h-12 " src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                </div>
                <div className="flex text-white gap-3 items-center"> 
                    <div className=""><a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a></div>
                    <div className=""><a href="https://partner.swiggy.com/login#/swigg" target="_blank">Partner with us</a></div>
                    <div className="border border-white rounded-xl p-2.5 text-white">
                        <a>Get the App</a>
                    </div>
                    <div className="bg-black rounded-2xl px-6 py-3"><a>Sign in</a></div>
                </div>
            </div>
            <div className="relative pt-16 pb-8">
                <div className="pb-7 flex justify-center text-center container mx-auto text-white text-3xl font-medium">
                <p>Order food & groceries.Discover <br></br>best restaurants. Swiggy it!</p>
                </div>
                <div className="container mx-auto flex justify-center ">
                <input type="text" className="bg-white p-2 rounded-xl w-60 z-2 text-black outline-none pl-5 mr-3" placeholder="Delhi,India"/>
                <input type="text" className="bg-white p-2 rounded-xl w-80 z-2 text-black outline-none pl-5" placeholder="Search for restaurant,item or more"/>
                </div>
                <img  className="absolute left-0 top-0 h-100 w-50" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="absolute right-0 top-0 h-100 w-50" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
            </div>
            <div className="flex container mx-auto">
                    <Link to="/restaurants" className="z-2">
                   <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
                   </Link>
                   <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                   <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
                   </a>
                   <a href="http://swiggy.com/dineout">
                   <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
                   </a>
                   <a href="https://www.swiggy.com/genie" className="z-2">
                   <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"></img>
                   </a>
            </div>
            </div>
        )
    }
    function GridElement(){
         return (
          
          <div className="w-80% grid gap-3 grid-rows-2 auto-cols-[100px] grid-flow-col overflow-x-auto pt-8 container mx-auto mt-15 " style={{"scrollbarWidth":"none"}}>
          {
              gridelements.map((value) => {
                  return (
                      <div key={value?.id}>
                          <a href={value?.action?.link}>
                              <img className="" src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.imageId}`} />
                          </a>
                      </div>
                  )
              })
          }
      </div>
         )
    }
    function Shopgroceries(){
      return (
        <div className="">
       <h1 className="container mx-auto font-medium text-2xl mt-20 ">Shop groceries on Instamart</h1>
       <div className="flex overflow-x-auto pt-4 container mx-auto gap-8 " style={{"scrollbarWidth":"none"}}>
       
       {
           imagegridcard.map((value) => {
               return (
                   <div key={value?.id} className="flex flex-col">
                    <a href={value?.action?.link}>
                    <img className="min-w-30 max-w-30 " src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.imageId}`}></img>
                    <h5 className="overflow-ellipsis">{value?.description}</h5>
                    </a>
                    </div>
                    
               )
           })
       }
    </div>
    </div>
      )
    }
    function Card({value}){
      return(
        <a href={value.cta.link}>
            <div className="w-81 h-81 flex flex-col border-2 border-[rgba(2,6,12,0.08)] relative cursor-pointer rounded-2xl">
                <img className="w-81 h-47 overflow-hidden object-cover rounded-t-[16px]" src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.info.mediaFiles[0].url}`}></img>
                <div className="top-[145px] w-[100%] absolute bg-gradient-to-b from-transparent to-black/70 h-11"></div>
                <div className="flex justify-between absolute top-[160px] text-xl px-2 text-white w-[100%] ">
                    <div className="font-bold overflow-hidden ">{value.info.name}</div>
                    <div className="flex justify-end ">{value?.info?.rating?.value}</div>
                    
                </div>
      
                <div className="p-2">
                    {/* first */}
                    <div className="flex justify-between text-[rgba(2,6,12,0.6)] text-base z-3">
                        <div className="">{`${value.info.cuisines[0]} \u2022 ${value.info.cuisines[1]}`}</div>
                        <div className="">{value.info.costForTwo}</div>
                    </div>
                    {/* second */}
                    <div className="flex justify-between text-[rgba(2,6,12,0.6)]  text-base">
                      <div className="overflow-ellipsis">{value.info.locationInfo.landmarkName}</div>
                        <div className="">{value.info.locationInfo.distanceString}</div>
                    </div>
                    {/* third */}
                    <div className="">
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    {/* fourth */}
                    <div className="bg-[rgb(27,166,114)] flex rounded-[5px] mt-5">
                        <div className="w-6"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"></img></div>
                        <div className="text-white font-medium pl-3.5 ">{value?.info?.vendorOffer?.info?.description || "No Discount!"}</div>
                        <div className=""></div>
                    </div>
                    {/* fifth */}
                    <div className="">
                        <div className="">{value?.info?.customerOffer?.info[0]?.description}</div>
                    </div>
    
                </div>
            </div>
            </a>
      )
    }
    function Restaurantscard(){
      return (
        <>
        <div className="container mx-auto font-medium text-2xl mt-20">Discover best restaurants on Dineout</div>
        <div className="mt-8 flex gap-4 flex-nowrap container mx-auto overflow-x-scroll " style={{"scrollbarWidth":"none"}}>
        {
        restaurants.map((value,index)=><Card key={value?.info?.id} value={value}/>)
       }
       </div>
        </>
      )
    }
    function Bottom(){
      return (
        <div className="mt-20">
          <img className="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"></img>
          <div className="h-120"></div>
        </div>
      )
    }
    function Main(){
      return(
        <>
        <GridElement/>
        <Shopgroceries/>
        <Restaurantscard/>
        <Bottom/>
        </>
      )
    }
    return (
        <>
        <Header/>
        <Main/>
        </>
    )
}