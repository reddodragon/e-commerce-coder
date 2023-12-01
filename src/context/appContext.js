import { createContext } from "react"


const EcomerceContext = createContext()

const EcomerceProvider = ({children}) => {



  return (
    <EcomerceContext.Provider
    value={{


    }}>
        {children}
    </EcomerceContext.Provider>
  )
}

export {
    EcomerceProvider
}

export default EcomerceContext