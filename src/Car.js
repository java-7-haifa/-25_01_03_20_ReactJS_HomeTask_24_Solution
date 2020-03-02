import React from 'react';


export default function Car({model,year,price}){
    return(
        <div className='car'>
            <h2>{model}</h2>
            <h3>{year}</h3>
            <h3>{price}</h3>
        </div>
    );
}

// export default function Car(props){
//     return(
//         <div className='car'>
//             <h2>{props.model}</h2>
//             <h3>{props.year}</h3>
//             <h3>{props.price}</h3>
//         </div>
//     );
// }