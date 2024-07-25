import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Tabfun from "./Tabfun";
import Products from "./products";
import ReviewInput from "./seven";
import Home from "./Home";
import { useState,createContext } from "react";
export const globalContext = createContext(); //create context
function App(){
    const [globalCount,setGlobalCount] = useState(0);

    return (
        <globalContext.Provider value={{globalCount,setGlobalCount}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element ={<Products />} />
            <Route path="/review" element={<ReviewInput />} />

        </Routes>
        </BrowserRouter>
        </globalContext.Provider>
    );
}
export default App;