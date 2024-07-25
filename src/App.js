import {BrowserRouter,Routes,Route} from "react-router-dom";
import Tabfun from "./Tabfun";
import Products from "./products";
import ReviewInput from "./seven";

function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Tabfun />}/>
            <Route path="/products" element ={<Products />} />
            <Route path="/review" element={<ReviewInput />} />
            
        </Routes>
        </BrowserRouter>
    );
}
export default App;