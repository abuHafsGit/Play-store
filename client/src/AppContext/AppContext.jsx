import { createContext, useContext, useState } from "react"

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [isInstalled, setIsInstalled] = useState([])
    const [count, setCount] = useState(0)
    const value = {
        count, setCount,
        isInstalled, setIsInstalled
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const UseAppContext = () => {
    return useContext(AppContext)
}

export default AppContextProvider