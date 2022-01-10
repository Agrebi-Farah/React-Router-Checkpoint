import React from 'react' ;
import './movies.css';
function Rate({Rating,setrating}) {
    const RatingArr = [1,2,3,4,5]
    return (
            <div>
               {RatingArr.map((el)=> 
               <span onClick={()=>{setrating(el)}}>
                { el<=Rating ? (<i class="fas fa-star"></i>) : ( <i class="far fa-star"></i>)}
                
               </span>
              
                ) }
            </div>
        )
    }
    
export default Rate

