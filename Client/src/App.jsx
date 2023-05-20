import { ToastContextProvider } from "./Components/context/ToastContext"
import Home from "./Components/Home/Home"

export const App = () => {
  return (
    <ToastContextProvider>
      <Home/>
    </ToastContextProvider>
  )
}


export default App;