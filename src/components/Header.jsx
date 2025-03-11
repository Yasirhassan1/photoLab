import { UseSearch } from "../context/UseSearchImg";
import { useEffect } from "react";
import axios from "axios";
import React from "react";
export default function Header(){
     let {setSearchImg, setSearchData}= UseSearch()
     let [imagesRequest, setImagesRequest] = React.useState("")
     const id = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  

    function submit(formData){
        setSearchImg(true)
           setImagesRequest(`https://api.unsplash.com/search/photos?query=${formData.get("search")}&client_id=${id}`)  
        
        }

        useEffect(() => {
          if (!imagesRequest) return; // Fix: Don't run if no search query
  
          axios.get(imagesRequest)
              .then((response) => {
                  setSearchData(response.data);
              })
              .catch((error) => console.log(error));
      }, [imagesRequest]);
    return(
        <header className="bg-gray-800 h-[70px] text-white px-6 flex items-center">
        <nav className="w-full flex items-center justify-between">
          {/* Logo */}
          
            <strong className="text-lg">PhotoLab</strong>
      
          {/* Search Bar */}
          <form action={submit} className="flex-1 relative mx-8 max-w-lg">
            <input 
              type="text" 
              placeholder="Search images..." 
              name="search"
              className="w-full px-4 py-2 rounded-full bg-gray-700 focus:ring-1 focus:ring-gray-700 text-white focus:outline-none shadow-md"
            />
            <button><i className="fa-solid fa-magnifying-glass text-2xl absolute z-10 right-2 text-white top-2"></i></button>
            </form>
      
          {/* Additional Icons or Links (Optional) */}
          <div className="flex items-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-white">Login</button>
          </div>
        </nav>
      </header>
      
    )
}