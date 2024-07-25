// import { useState } from "react";
// //import Review from "./review";
// import Eight from "./Eight";
// import Nine from "./Nine";
// function Input(){
//     const [getInput, setInputValue] = useState(""); 
//     const [getReviews, setReviews] = useState([]);
//     const inputValueChange = (event) => {
//         setInputValue(event.target.value);
//         // console.log(event.target.value);
//     }
//     const addReview = () => {
//         setReviews([getReviews, { name: "Reviewer", text: getInput}]);
//         setInputValue("");
//     }
//     return (
//         <div>
//             <h1>Product Name</h1>
//             <div style={{ marginTop: "30px" }}></div>
//             <Eight />

//             <div style={{ marginTop: "30px" }}></div>
//             <Nine />
            
//             <h5>Reviews</h5>
//             <div style={{ marginTop: "10px" }}>
            
//             </div>
//             <input type="text" placeholder="Enter a review" onChange={inputValueChange} value={getInput}  />
//             <button className="btn btn-dark" onClick={addReview}>Add Review</button>
//             <div>
//                 {getReviews.map((review, index) => (
//                     <div>
//                     <h6 key={index}>{review.name}</h6>
//                     <p>{review.text}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
// export default Input;
import React, { useState } from 'react';
import Review from "./review";
import Eight from "./Eight";
import Nine from "./Nine";
function ReviewInput() {
    
    const [review, setReview] = useState('');  
    const [reviews, setReviews] = useState([]); 

    const addReview = () => {
       
            setReviews([...reviews, {name:'Reviewer name',text:review}]);  
            setReview('');  
            
        
    }

    const inputTextChange = (event) => {
        setReview(event.target.value);  
    }

    return (
        <div className='review-container'>
            <Eight />
            <Nine />
            <h3 style={{padding:'8px',fontSize:'20px'}}>Reviews</h3>
            <input 
                type="text" 
                placeholder="Enter a review" 
                value={review} 
                onChange={inputTextChange}
            style={{marginRight:'8px',width:'85%',height:'35px',borderRadius:'9px',borderWidth:'1px',borderColor:'gray'}}/>
            
            <button className="btn btn-dark" onClick={addReview}>Add Review</button>
            <div>
                {reviews.map((item, index) => (
                    <div key={index} style={{ margin: '10px 0' }}>
                        <p style={{ margin: '0', display: 'inline', marginRight: '5px' }}>{item.name}</p>
                        <br/>
                        <span>{item.text}</span>
                    </div> 
                ))}
            </div>
        </div>
    );
}

export default ReviewInput;