import { useState } from "react";
export default function Card({ imgurl, alt, download, likes }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="card relative h-fit cursor-pointer hover:scale-105 transition-all duration-500 shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
            <img className="w-full h-full object-cover" src={imgurl} alt={alt} />
            {isHovered && (
                <div className="container">
                <a href={download}>
                <button className="absolute bottom-3 cursor-pointer right-3 bg-gray-900 rounded-full w-12 h-12 transition-all duration-500 opacity-100 active:scale-75">
                  <i className="fa-solid fa-download text-white"></i>
                </button></a>
                <div className="likes flex gap-3 absolute bottom-2 left-2 items-center text-white px-4 py-2 bg-gray-900 rounded-full">
                <i className="fa-solid fa-heart text-red-500 text-xl"></i>
                <p className="text-sm">{likes}</p>
                </div>
                </div>
            )}
            
        </div>
    );
}
