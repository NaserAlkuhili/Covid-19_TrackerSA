import React, { useEffect, useState } from 'react';
import {Pie} from "react-chartjs-2";

import {getCasesFrom, getRecoveriesFrom} from '../API/useAPI';


var cases_datesI = []
var casesI = []
var recoveriesI = []
var recoveries_datesI = []







const DailyCasesVsRecoveriesPie = () => {
    const [cases, setCases] = useState()
    
    const [recoveries, setRecoveries] = useState()

    const [numOfDays] = useState(1)

    useEffect(()=>{
        //getting number of cases
        const records_cases = getCasesFrom(numOfDays);
        records_cases.then(p=>{
            p.forEach(e=>{
                casesI.push(e.cases)
                cases_datesI.push(e.date)
            })
            setCases(casesI)
        })

        //getting number of recoveries
        const records_recoveries = getRecoveriesFrom(numOfDays);
        records_recoveries.then(p=>{
            p.forEach(e=>{
                recoveriesI.push(e.recoveries)
                recoveries_datesI.push(e.date)
            })
            setRecoveries(recoveriesI)
        })})

    
    //data for daily recoveries vs cases 
    const recoveries_data = {
        labels: ['Recoveries', 'Cases'],
        datasets: [{
            label: 'Daily Cases vs Recoveries',
            data: (recoveries && cases) ? [recoveries[0], cases[0]] : [0,0],
            backgroundColor: ["rgba(0,255,0,0.2)", "rgba(255,0,0,0.2)"],
            borderColor: ["green", "red"],
            borderWidth: 1,
        },
        ],
    };

    
    return (
        <div className = "pie_chart">
            <Pie
            data = {recoveries_data} 
            height = {500}
            width={600}/>
            
        </div>

    );
}



export default DailyCasesVsRecoveriesPie;