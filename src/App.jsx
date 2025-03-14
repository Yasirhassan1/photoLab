import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import axios from "axios";
import React from "react";
import { UseSearch } from "./context/UseSearchImg";

function App() {
    const [images, setImages] = useState([]);
    let { searchImg, searchData } = UseSearch();
    let [loading, setLoading] = useState(true);
    const id = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    let imagesRequest = `https://api.unsplash.com/photos/random?count=30&client_id=${id}`;

    useEffect(() => {
        axios.get(imagesRequest)
            .then((response) => {
              setImages(response.data)
              setLoading(false)
            })
           
            .catch((error) => {
              console.log(error)
              setLoading(false)});
    }, []);

    
    return (
        <>
            <Header />
            {loading ?
             <div className="flex justify-center items-center h-screen">
             <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
           </div>:
            <main className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4 [grid-auto-rows] pt-[80px]">
             
                {searchImg && searchData?.results ? (
                    searchData.results.length > 0 ? (
                        searchData.results.map((image) => (
                            <Card key={image.id} imgurl={image.urls.regular} alt={image.alt_description} download = {image.links.download+"&force=true"} likes = {image.likes}/>
                        ))
                    ) : (
                        <p className="text-white col-span-3">No results found.</p>
                    )
                ) : (
                    images.length > 0 ? (
                        images.map((image) => (
                            <Card key={image.id} imgurl={image.urls.regular} alt={image.alt_description} download = {image.links.download+"&force=true"} likes = {image.likes}/>
                        ))
                    ) : (
                        <p className="text-white col-span-3">Loading images...</p>
                    )
                )}
            </main>
}
        </>
    );
}

export default App;
