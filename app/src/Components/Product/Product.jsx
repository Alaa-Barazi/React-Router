import React, {useEffect, useState} from "react";
import { useParams , useNavigate, Link} from "react-router-dom";

import posts from '../../store';
import Header from "../Header/Header";
const Product = ()=>{
    const [show,setShow] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
   let obj = null;
    // useEffect(() => {
    //     const fetch = async () => {
    //       try {
            
    //         setPost(posts);
           
    //       } catch (err) {
            
    //         console.error(err);
    //       }
    //     };
    //     fetch();
    //   }, []);

      
return (
    <div>
        <Header/>
        {posts.map((pr)=>(
          
                <article key={pr.id}>
                  
                   <Link to={`/ShowP/${pr.id}`}>
                   <button>{pr.title}</button>
            </Link>
            <br/>
        </article>
            ))
        }
        {/* {show && obj!=null && 
        <><div>
        <h1>
          {obj.title}
        </h1>
        <img src={obj.imageUrl} />
        <h3>Price: {obj.price}</h3>
        <h3>Size: {obj.size}</h3>
      </div><button onClick={() => navigate(-1)}>Back</button></>
  && setShow(false)} */}
    </div>
        
)
}
export default Product;