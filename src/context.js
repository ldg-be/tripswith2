import React, { useState, useContext, useEffect } from 'react'
import sublinks, {url} from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) =>{
    const [data, setData] = useState();
    const [searchdata, setSearchdata] = useState();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page:'', links:[]})

    
    useEffect(() => {
        const GetFromDB = async () => {
            setLoading(true);
        
            try{
              const response = await fetch(`${url}`)
              const data = await response.json()
              setData(data)
        
            }catch(error){
                console.log(error);
            }
          };
          GetFromDB();
          setLoading(false);
    }, []);
    

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    
    const fetchOneTravel = async (travelurl) => {
        setLoading(true);
        
            try{
              const response = await fetch(`${url}?travelurl=${travelurl}`)
              const travel = await response.json()
              setSearchdata(travel)
              setLoading(false)
          
            }catch(error){
                console.log(error);
            }
          };
    

    return <AppContext.Provider value={{fetchOneTravel, loading, setSearchdata, searchdata, isSubmenuOpen, isSidebarOpen, openSubmenu, openSidebar,closeSubmenu, closeSidebar, location, page, data}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}