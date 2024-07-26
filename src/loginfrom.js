import {useRef,useState,useEffect, useContext} from "react";
import "./card.css";
import { globalContext } from "./App";
function Login(){
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const [resultMessage, setResultMessage] = useState('');
    const {setGlobalIsLogin,globalObject} =  useContext(globalContext)
    // use Effect to focus on input field everytime we Refresh
    useEffect(()=>{
        if(firstRef.current)
            firstRef.current.focus();
    },[]);
    const formSubmitted = (event) =>{
        event.preventDefault();
        console.log("Fom Submitted");
        console.log(firstRef.current.value);
        const firstValue = firstRef.current.value;
        const secondValue = secondRef.current.value;

        if (firstValue === globalObject.collegeIdValue && secondValue === globalObject.passwordValue) {
            setResultMessage(' You are Successful logged In');
            setGlobalIsLogin(true);
            localStorage.setItem("name","ReactJs");
        } else {
            setResultMessage('Fail');
            setGlobalIsLogin(false);

        }
        firstRef.current.value='';
        secondRef.current.value='';
    }
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"180px"}}>
        <div className="card" >
            <form onSubmit={formSubmitted}>
                <h1 className="card-title">Login</h1>
                <div style={{ marginTop: "20px" }}></div>
                <p style ={{textAlign:"left"}}>Provide login details</p>
                <div style={{ marginTop: "20px" }}></div>
                <h5>College Id</h5>
                <input type="text" placeholder="College Id" ref={firstRef} />
                <div style={{ marginTop: "20px" }}></div>
                <h5>Password</h5>
                <input type="password" placeholder="Password" ref={secondRef}/>
                <br/>
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: '60px' }}>
                    <button type='submit' className="btn btn-primary" style={{ width: 'auto' }}>Login</button>
                </div>
                
            </form>
            <p>{resultMessage}</p>
        </div>
        </div>
    );
}
export default Login;