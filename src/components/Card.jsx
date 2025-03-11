export default function Card({imgurl, alt}){
 
    return(
        <div className="card h-fit cursor-pointer hover:scale-105 transition-all duration-500">
            <img className="w-full h-full object-cover" src={imgurl} alt={alt} />
        </div>
    )
}

