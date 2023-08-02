import React, { useState, useContext, useEffect } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) =>{
    const [data, setData] = useState();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page:'', links:[]})

    const url="https://eu-de.functions.appdomain.cloud/api/v1/web/ba16a567-bf8b-4e08-8345-2742a032caf3/travelswith2/get-travels"
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

    return <AppContext.Provider value={{isSubmenuOpen, isSidebarOpen, openSubmenu, openSidebar,closeSubmenu, closeSidebar, location, page, data}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}