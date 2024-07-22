function Review(){
    const reviews = [{name:"Reviewer name1",comment:"This product is good"},{name:"Reviewer2",comment:"This product is not good"}]
    const nc = reviews.map((Review,index)=> <div key={index}>
        <img src="cam.jpg" alt="cam" height ="100px" width="100px"></img>
        <h3>{Review.name}</h3>
        <p>{Review.comment}</p>
    </div>);
    return (
        <div>
            <h1>Reviews</h1>
            <ul>{nc}</ul>
            
            
        </div>
    )
}
export default Review;