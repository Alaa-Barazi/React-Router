import { useNavigate, Link} from "react-router-dom";
export default function notfound(){
  
    return(
        <>
        <img src='https://cdn2.hubspot.net/hubfs/242200/shutterstock_774749455.jpg' width={"900px"} />
        <Link to="/Product">
        <button>Back</button>
  </Link>
        </>
    )
}