import './../Header/style.css';
import { Link } from "react-router-dom";
import Product from '/src/Components/Product/Product';
import Home from '/src/Components/Home/Home';
export default function Header(){
    return (
        <>
        <nav>
        <ul>
        <Link to="/Home">
  <li><a className="active" href="">Home</a></li>
  </Link>
  <Link to="/Product">
  <li><a href="">Products</a></li>
  </Link>
 
</ul>
       
        
        
      </nav>
      
       
</>
    )
}