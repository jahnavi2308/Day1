import {useContext, useState,useRef} from "react";
import "./card.css";
import { globalContext } from "./App";
function Register(){
    const idRef = useRef(null);
    const passwordRef = useRef(null);
    const emailRef = useRef(null);

    const [collegeIdValue,setCollegeId] = useState('');
    const [passwordValue,setPassword] =useState('');
    const [emailValue,setEmail] = useState('');
    const [branchValue,setBranch] = useState('');
    const [yearValue,setYear] = useState('');
    const [genderValue,setGender] = useState('Female');
    const [userValue,setUser] = useState({});
    const {globalObject,setGlobalObject} = useContext(globalContext);
    const getCollegeId =(event) => {
    setCollegeId(event.target.value)
    console.log(event.target.value);
    }
    const getPassword =(event) => {
    setPassword(event.target.value)
    console.log(event.target.value);
}
    const getEmail =(event) => {
    setEmail(event.target.value)
    console.log(event.target.value);
}
    const getBranch =(event) => {
    setBranch(event.target.value)
    console.log(event.target.value);
}
const getYear =(event) => {
    setYear(event.target.value)
    console.log(event.target.value);
}
const getGender =(event) =>{
    setGender(event.target.value)
    console.log(event.target.value);
}
const submitData =(event) => {
    event.preventDefault();
    const obj = {
        collegeIdValue,passwordValue,emailValue,branchValue,genderValue
    }
    console.log(obj);
    setUser(obj)
    
    console.log(userValue);
    setGlobalObject(obj);
    idRef.current.value = "";
    passwordRef.current.value = "";
    emailRef.current.value = "";

    setBranch("");
    setYear("");
    setGender("");
}

    return (
        <div style={{display:"flex",alighItems:"center",justifyContent:"center",marginTop:"25px"}}>
            <div className="card" style ={{height:"42rem",width:"350px"}}>
                <h1>Register</h1>
                <p>Provide your details to register</p>
                <form style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                    <h6>College Id</h6>
                    <input type="text" placeholder="College Id"  ref={idRef} onChange={getCollegeId}/>
                    <h6>Password</h6>
                    <input type="password" placeholder="Password" ref={passwordRef} onChange={getPassword}/>
                    <h6>Email Address</h6>
                    <input type="text"  placeholder="Email Address" ref={emailRef} onChange={getEmail}/>
                    <h6>Branch</h6>
                    <select className="form-select"  value = {branchValue} aria-label="Default select example" onChange={getBranch}>
                    <option value ="">Select Branch</option>
                    <option value="AIML">AIML</option>
                    <option value="AIDS">AIDS</option>
                    <option value="CSE">CSE</option>
                    </select>
                    <h6>Year</h6>
                    <select className="form-select" aria-label="Default select example" value ={yearValue} onChange={getYear}>
                    <option >Select Year</option>
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    </select>
                    <h6>Gender</h6>
                    <div>
                        <input type="radio" checked={genderValue === "Female"} value="Female" onChange={getGender}></input>Female
                        <input type="radio" checked={genderValue === "Male"} value="Male" onChange={getGender}></input>Male
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: '10px' }}>
                    <button type='submit' className="btn btn-primary" style={{ width: 'auto' }} onClick={submitData}>Register</button>
                    </div>    
                </form>
            </div>
        </div>
    );
}
export default Register;