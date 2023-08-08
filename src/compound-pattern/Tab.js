import React, { createContext, useContext } from "react";
import './Tab.css';


const TabContext = createContext()
const Tab = ({children, currentTab, onChange}) => {
    return (
        <div className="tab">
            <TabContext.Provider value={{currentTab, onChange}}>
                {children}
            </TabContext.Provider>
        </div>
    )
}
Tab.HeadsContainer = ({children}) => {
    return <div className="headsContainer">{children}</div>
}
Tab.Item = ({label, index, children}) => {
    const {currentTab, onChange} = useContext(TabContext)
    const handleClick = () => {
        onChange(index)
    }
    return <div className={`tabItem ${currentTab === index ? 'active' : null}`}onClick={handleClick}>{label}</div>
}

Tab.ContentContainer = ({children}) => {
    return <div className="contentContainer">{children}</div>
}
Tab.ContentItem = ({index, children}) => {
    const {currentTab, onChange} = useContext(TabContext)
    return currentTab===index ? <div className="contentItem">{children}</div> : null
}


export default Tab;