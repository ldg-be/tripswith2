import React, { useState, useContext } from 'react'
import sublinks, {travels} from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState({});
    const [travel, setTravel] = useState({header:{}, page:[]});
    const [page, setPage] = useState({page:'', links:[]})

    const newTravel = (label) => {
        const destination = travels.find((dest) => dest.label === label);
        setTravel(destination);
    }

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

    return <AppContext.Provider value={{isSubmenuOpen, isSidebarOpen, openSubmenu, openSidebar,closeSubmenu, closeSidebar, location, page, loading, travel, newTravel}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}