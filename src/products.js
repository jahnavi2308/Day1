import { useEffect, useState } from "react";
import "./product.css";
import Navigation from "./Navigation";
import Six from "./six";
// import { globalContext } from "./app";
function Products(){
    const [counts, setCounts] = useState([]); // Initialize counts for each product
    const [data, setData] = useState([]);
    // const {globalCount,setGlobalCount} = useContext(globalContext)
    
    useEffect(()=>{
        //setCount(5);
        console.log('use effect is called');
    },[]);
    const buttonClickAdd = (index) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
        // setGlobalCount(globalCount+1);
    }
    const buttonClickSubtract = (index) => {
        if(counts[index] > 0){
            const newCounts = [...counts];
            newCounts[index] -= 1;
            setCounts(newCounts);
            // setGlobalCount(globalCount-1);
        }
    }
    // const btnAddToCard =()=>{
    //     setCounts(1);
    //     setGlobalCount(globalCount+1);
    // }
    useEffect(()=>{
        const fetchMyData = async () => { //async: When you tell a function it’s async, you're saying, "This function might take some time, so get ready to wait."
                const res = await fetch('https://fakestoreapi.com/products');
                console.log(res);
                console.log(res.ok);
                const resData = await res.json(); //await: This is like a special pause button. When you use await, you're saying, "Okay, I’m going to wait here until this task is done."
                setData(resData);
                console.log(resData)
                setData(resData);
                setCounts(Array(resData.length).fill(0));
        } 
        fetchMyData();
    },[])
    return (
        <div className="card-container">
            <Navigation />
                {data.map((dataItem,index)=> (
                <div className="card" key={index}>
                    <div className='image-container'>
                        <img className="card-img-top" src={dataItem.image} alt='Foldsack'/>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{dataItem.title}</h5>
                      <div class="stars">
                        ★★★★☆
                      </div>
                      <p className="card-text">({dataItem.rating?.count} reviews)</p>
                      <p className='card-text'>₹{dataItem.price}</p>
                    </div>
                    <Six />
                    {/* <div>
                            {
                            counts[index] === 0 ? 
                                    (<div>
                                        <button className="cart-button" onClick={() => buttonClickAdd(index)}>Add to Cart</button>
                                    </div>) :
                                    (<div style={{display:'flex' , height:'40px',marginTop:'40px'}}>
                                        <button className="btn btn-dark" onClick={() => buttonClickAdd(index)}>+</button>
                                        <h1 style={{margin:'0px 15px'}}>{counts[index]}</h1>
                                        <button className="btn btn-primary" onClick={() => buttonClickSubtract(index)}>-</button>
                                    </div>)
                            }
                        </div> */}
                </div>
                ))}
        </div>
    );
}
export default Products;