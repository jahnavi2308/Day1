import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Tabfun from "./Tabfun";
import Products from "./products";
import ReviewInput from "./seven";
import Home from "./Home";
import Profile from "./profile";
import { useState,createContext } from "react";
export const globalContext = createContext(); //create context
function App(){
    const [globalCount,setGlobalCount] = useState(0);
    const [globalObject,setGlobalObject] = useState({});
    const [globalIsLogin,setGlobalIsLogin] = useState(false);
    return (
        <globalContext.Provider value={{globalCount,setGlobalCount,globalObject,setGlobalObject,globalIsLogin,setGlobalIsLogin}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element ={<Products />} />
            <Route path="/review" element={<ReviewInput />} />
            <Route path ="/profile" element={<Profile /> }/>
        </Routes>
        </BrowserRouter>
        </globalContext.Provider>
    );
}
export default App;