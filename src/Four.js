import "./card.css"
function Card(props){
    // const width = 400;
    return(
    
        <div className="card" style={{width:'1700px',height:"790px",textAlign:"left"}}>
            {/* <img src ="/profilepic.jpeg" width="100px" style = {{border:"1px solid #FF0000",borderRadius:"20px"}}/> */}
            <div>
            {/* <h1 class="card-title">{props.userFromArray}</h1> */}
            {props.content}
            {/* <p class="card-text">Some </p> */}
            </div>
            {/* <button type="button" className="btn btn-primary">Connect</button> */}
        </div>

       
        
    );

}
export default Card;