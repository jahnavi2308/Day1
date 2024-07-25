import { useContext, useEffect, useState } from "react";
import { globalContext } from "./app";

function Six(){
    const {globalCount,setGlobalCount} = useContext(globalContext)
    // const count =0;
    const [count,setCount] = useState(0);
    // setCount is a method
    useEffect(() => {
        // setCount(5);
        // console.log("Use effect is called");
    },[count]);
    const btnUpdateCountInc =() => {
        setCount(count+1);
        setGlobalCount(globalCount+1);
    }
    const btnUpdateCountDec =() => {
        setCount(count-1);
        setGlobalCount(globalCount-1);
    }
    const btnAddToCard =()=>{
        setCount(1);
        setGlobalCount(globalCount+1);
    }
    return (
        <div>
            {count===0?(
                <div>

                <button className="btn btn-dark" onClick = {btnAddToCard} style={{marginTop:"20px"}}>Add to Cart</button>
                {/* <div style={{ marginTop: "30px" }}></div> */}
                </div>
            ):(
                <div style ={{display : "flex"}}>
                <button className="btn btn-dark" onClick = {btnUpdateCountDec}>-</button>
                <h1 style = {{margin:'0 20px'}}>{count}</h1>
                <button className="btn btn-dark" onClick = {btnUpdateCountInc}>+</button>
                </div>
        
            )
        
            
            
    }
    </div>
        
    );
}
export default Six;