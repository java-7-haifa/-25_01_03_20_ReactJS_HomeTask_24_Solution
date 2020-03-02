import React from 'react';
import CarContrainer from './CarContainer';
import PersonCard from './PersonCard';

const cars = [
    {
        model:'Civic',
        year:2019,
        price:120000
    },
    {
        model:'Civic',
        year:2019,
        price:120000
    },
    {
        model:'Civic',
        year:2019,
        price:120000
    },
    {
        model:'Civic',
        year:2019,
        price:120000
    }
];
export default function App(){
    return(
        <div className='container'>
            <PersonCard person='Vasya'/>
            <hr/>
            <CarContrainer cars={cars}/>
        </div>
    );
}