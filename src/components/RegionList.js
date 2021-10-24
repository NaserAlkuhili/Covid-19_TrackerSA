import React, {useEffect, useState} from 'react';


import { getCasesByRegion } from '../API/useAPI';
import RegionCases from './RegionCases';



const regionTranslator = {
    "Al Bahah": "منطقة الباحة",
    "Al Jawf": "منطقة الجوف",
    "Al Madinah Al Munawwarah": "منطقة المدينة المنورة",
    "Al Qaseem": "منطقة القصيم",
    "Ar Riyad": "منطقة الرياض",
    "Aseer": "منطقة عسير",
    "Eastern Region": "المنطقة الشرقية",
    "Hail": "منطقة حائل",
    "Jazan": "منطقة جازان",
    "Makkah Al Mukarramah": "منطقة مكة المكرمة",
    "Najran": "منطقة نجران",
    "Northern Borders": "منطقة الحدود الشمالية",
    "Tabuk": "منطقة تبوك",
}

const RegionList = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        getCasesByRegion().then(json=>setData(json))
    }, [])
    
    
    return (
        <div className="row">
            {data.map((item) => <RegionCases cases={item.cases.toString()} region = {regionTranslator[item.region.toString()]}/>)}
        </div>
    )

}



 

export default RegionList