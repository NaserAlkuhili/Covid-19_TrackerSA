import React from 'react';

// import { getCasesByCity } from '../API/useAPI';
// const data = getCasesByCity();


// {data.map(function(d, idx){
//     return (<li key={idx}>{d.name}</li>)
//   })}





const CityCases = ({city, cases}) => {
    
        return (
            <div className="city_cases">
                <h1 className = "city_cases_content">{city}: </h1>
                <h1 className = "city_cases_content">{cases}</h1>
            </div>
        )
    
}


 

export default CityCases