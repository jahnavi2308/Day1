import ReactDOM from "react-dom/client";
// import CardUI from "./CardUI";
// import Input from "./seven";
// import F1 from "./app";
import Login from "./loginfrom";
// import ReviewInput from "./seven";
import Register from "./registerform";
import App from "./App";
// import Tabfun from "./Tabfun";
// import Products from "./janu";

// import Tabfun from "./Tabfun";
const rootElement = document.getElementById('root');
const rootref = ReactDOM.createRoot(rootElement);
// rootref.render(<F1/>);
// rootref.render(<CardUI />);
// rootref.render(<Tabfun />);
// rootref.render(<Products />)
// rootref.render(<ReviewInput />)
rootref.render(<App />)
// rootref.render(<Register />)