import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) =>{
    const [isSidebarOpen,setIsSidebarOpen]= useState(false);
    const [isSubmenuOpen,setIsSubmenuOpen]= useState(false);
    const [location,setLocation] = useState({});
    const [page,setPage] = useState({page:'',links:[]});

    const openSidebar = ()=>{
        setIsSidebarOpen(true);
    }
    const closeSidebar = ()=>{
        setIsSidebarOpen(false);
    }
    const closeSubmenu = ()=>{
        setIsSubmenuOpen(false);
    }
    const openSubmenu= (text,coordenates)=>{
        const page = sublinks.find((link)=>link.page === text)
        setPage(page);
        setLocation(coordenates);
        setIsSubmenuOpen(true);
    }

    return (
        <AppContext.Provider 
        value={{
            isSidebarOpen,isSubmenuOpen,
            openSubmenu,openSidebar,closeSubmenu,closeSidebar,
            location,page}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}