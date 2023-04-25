import { useParams , useNavigate, Link} from "react-router-dom";

import posts from '../../store';
import Header from "../Header/Header";
export default function ShowP(){
    const navigate = useNavigate();
    const { id } = useParams();
   const obj = posts.find(element => element.id == id);
   return (
    <><div>
          <Header/>
        <h1>
          {obj.title}
        </h1>
        <img src={obj.imageUrl} />
        <h3>Price: {obj.price}</h3>
        <h3>Size: {obj.size}</h3>
      </div><button onClick={() => navigate(-1)}>Back</button></>
   )
}
