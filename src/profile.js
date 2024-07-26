import { useContext,useEffect,useState } from "react";
import { globalContext } from "./App";
import Navigation from "./Navigation";

function Profile (){
    const [showPassword,setShowPassword] = useState(false);
    const {globalObject} = useContext(globalContext);
    const {setGlobalIsLogin} = useContext(globalContext);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const logoutAction =() => {
        setGlobalIsLogin(false);
    }
    useEffect(() => {
        const name = localStorage.getItem("name");
        // const branch = localStorage.getItem("branch");
        console.log(name);
    })
    return(
        <div>
            <Navigation />
        
        <div style={{display:'flex',justifyContent:'center',marginTop:'60'}}>
            <div className="card" style={{border:'1px solid red',width: "18rem",display: 'flex', flexDirection: 'column', alignItems: 'left',paddingLeft:'20'}}>
            <h1>Profile</h1>
                <p>Your details</p>
                <p>College Id</p>
                <b>{globalObject.collegeIdValue}</b>

                <p>PasswordValue</p>
                <b>
                    {showPassword ? globalObject.passwordValue : '••••••••'}
                    <u style={{ cursor: 'pointer' }} onClick={togglePasswordVisibility}>
                        {showPassword ? ' Hide' : ' Show'}
                    </u>
                </b>
                <p>Email address</p>
                <b>{globalObject.emailValue}</b>

                <p>Branch</p>
                <b>{globalObject.branchValue}</b>

                <p>Year</p>
                <b>{globalObject.yearValue}</b>

                <p>Gender</p>
                <b>{globalObject.genderValue}</b><br/>
                <button className="btn btn-secondary" onClick={logoutAction}>logout</button>
            </div>
        </div> 
        </div>
    );
}
export default Profile;