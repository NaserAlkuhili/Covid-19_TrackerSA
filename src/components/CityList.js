import React, {useEffect, useState} from 'react';


import { getCasesByCity } from '../API/useAPI';
import CityCases from './CityCases';





const CityList = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        getCasesByCity().then(json=>setData(json))
    }, [])
    
    
    return (
        <div className="row">
            {data.map((item) => <CityCases cases={item.cases.toString()} city = {item.city.toString()}/>)}
        </div>
    )

}



 

export default CityList