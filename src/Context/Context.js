import { useState, createContext, useContext } from 'react'

const ToggleContext = createContext()

export const useToggleContext = () => {
  const context = useContext(ToggleContext)
  const [toggle, setToggle] = context.toggle
  
  const handleTheme = () => {
    setToggle((prev) => !prev)
  }
  return { toggle, handleTheme }
}


export const ToggleProvider = ({ children }) => {
    let [toggle, setToggle] = useState(false)
    return (
        <ToggleContext.Provider
            value={{toggle: [toggle, setToggle]}}>
                {children}
        </ToggleContext.Provider>
    )
}
