function Two(){
    let array = ["A","B","C","D","E"];
    let arrayList = array.map((arr,index) => <li key={index}>{arr}</li>);
    return (
        <div>
            <h1>List of Alphabets</h1>
            <ul>{arrayList}</ul>
            
        </div>
    )
}
export default Two;
