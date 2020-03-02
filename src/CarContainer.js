import React from 'react';
import Car from './Car';
export default function CarContrainer(props){
    
    return (
        <div className='cars'>
                <Car model={props.cars[0].model} year={props.cars[0].year} price={props.cars[0].price}/>
                <Car model={props.cars[1].model} year={props.cars[1].year} price={props.cars[1].price}/>
                <Car model={props.cars[2].model} year={props.cars[2].year} price={props.cars[2].price}/>
                <Car model={props.cars[3].model} year={props.cars[3].year} price={props.cars[3].price}/>
            </div>
    );
}