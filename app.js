import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./src/home";
import { BrowserRouter,Route,Routes,Link } from "react-router";
import TopHead from "./src/tophead";
import Restaurants from "./src/restaurants"
import { Provider } from "react-redux";
import stores from "./src/store";
import Pagerestro from "./src/pagerestro";

// Header section: Let's build it

function App(){
    
    return(
       <>
       <Provider store={stores}>
       <BrowserRouter>
       <Link to="/"></Link>

        <Routes>
            <Route path="/" element={<Home/>}></Route>

            <Route path="/restaurants" element={<TopHead/>}>
                <Route index element={<Restaurants/>}/>
                <Route path="city/delhi/:name" element={<Pagerestro/>}/>

            </Route>
        </Routes>
        
       </BrowserRouter>
       </Provider>
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);

//https://cors-anywhere.herokuapp.com/corsdemo
//https://cors-anywhere.herokuapp.com/


// https://www.swiggy.com/city/delhi/mcdonalds-sector-3-rohini-rest253731
//https://www.swiggy.com/city/delhi/burger-king-m2k-mall-rohini-rest498382
//https://media-assets.swiggy.com/swiggy/image/upload


//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=  26723  &catalog_qa=undefined&submitAction=ENTER
//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=  603438  &catalog_qa=undefined&submitAction=ENTER