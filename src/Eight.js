import Six from "./six";
function Eight(){
    const text = "Description Description Description Description Description Description Description Description Description Description Description"
    // const textBelow = "Description Description Description Description Description Description"
    return(
        <div style={{display:"flex",alignItems:"flex-start",borderWidth:"0.3px",border:'solid',borderColor:'lightgrey'}}>
            <div style ={{marginRight :"20px",textAlign:"left"}}>
            
            <img src ="lap_image.jpeg" alt="Description" style={{marginRight:"20px"}} />
            <div style={{ marginTop: "20px" }}></div>
            
            </div>
            <div>
                <h4>Product Name</h4>
                <p>{text}</p>
                <div style={{ marginTop: "50px" }}></div>
                <h2>$500.00</h2>
                <Six />
            </div>
            

        </div>
    );
}
export default Eight;