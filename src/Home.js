import {  useContext } from "react";
import Tabfun from "./Tabfun";
import { globalContext } from "./App";
// import Navigation from "./Navigation";
// import { Link } from "react-router-dom";
import Welcome from "./Welcome";
// export const UserContext = createContext(); //create context
function Home(){
    const {globalIsLogin} = useContext(globalContext);
    return(
        // <UserContext.Provider value={{globalIsLogin,globalIsLogin,globalObject,setGlobalObject}}>
        <div>
            {
                globalIsLogin ?
                // <div>Logged In </div> : <div>Not Logged In</div>
                <div> <Welcome />
                {/* // <h1>Welcome  to SVES Commerce </h1>
                //     <Link to="/products">View Products</Link> */}
                     {/* <Navigation /> */}
                    </div> : <Tabfun /> 
                
            }
        </div>
        // </UserContext.Provider>
    );
}
export default Home;