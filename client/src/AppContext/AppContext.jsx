import { createContext, useContext, useState } from "react"

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {

    const [count, setCount] = useState(0)
    const value = {
        count, setCount
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const UseAppContext = () => {
    return useContext(AppContext)
}

export default AppContextProvider