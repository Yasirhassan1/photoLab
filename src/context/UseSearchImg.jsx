import { createContext, useContext, useState } from "react";

const imageSearchContext = createContext(); // Create context

export const ImageSearchProvider = ({ children }) => {
  let [searchImg, setSearchImg] = useState(false);
  let [searchData, setSearchData] = useState({})

  return (
    <imageSearchContext.Provider value={{ searchImg, setSearchImg, searchData, setSearchData}}>
      {children}
    </imageSearchContext.Provider>
    )
};



// Custom Hook to Use Context
export const UseSearch = () => useContext(imageSearchContext);
