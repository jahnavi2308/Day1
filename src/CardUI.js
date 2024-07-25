import Card from "./Four";
import Input from "./seven";
function CardUI(){
    const name = "Jaanu";
    const desc = "Employee";
    const about = {name:"name1",branch:"AIML",college:"SVECW"}
    const users = ["name1"]
    return(
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {
                users.map((user,index) =>(<Card key = {index} program = {name} description = {desc} aboutinfo ={about} userFromArray={user} content={<Input />}/>))
            }
            
            
        </div>
    );
}
export default CardUI;