import Login from "./loginfrom";
import Navigation from "./Navigation";
import Register from "./registerform";
import {useState} from "react";
function Tabfun(){
    const [isLogin,setIsLogin] = useState(true);
    const showLogin =() => {setIsLogin(true)};
    const showRegister =() => {setIsLogin(false)};

    return(
        <div>
            <div style={{textAlign:"center",marginTop:"20px"}}>
                {/* <Navigation /> */}
            <button onClick={showLogin} className="btn btn-primary" style={{ width: 'auto',marginRight:"10px",marginLeft:"30px" }} > Login</button>
            <button onClick={showRegister} className="btn btn-primary" style={{ width: 'auto' }} >Register</button>
            </div>
            {isLogin ?
            // <div>Login Message</div>
            <Login />
            :
            // <div>Register Message</div>
            <Register />

            }
        </div>
    );
}
export default Tabfun;
