import React, { useEffect, useState } from 'react';
import "./App.css";
import {Line} from "react-chartjs-2";

import {getCasesFrom, getRecoveriesFrom} from '../API/useAPI';


var cases_datesI = []
var casesI = []
var recoveriesI = []
var recoveries_datesI = []


// const findTotal = (arr) => {
//     var total = 0
//     for(let i = 0; i < arr.length; i++){
//         total += arr[i]
//     }
//     return total
// }






const LineCharts = () => {
    const [cases, setCases] = useState()
    const [cases_dates, setCases_dates] = useState()
    
    const [recoveries, setRecoveries] = useState()

    const [numOfDays, setNumOfDays] = useState(30)

    useEffect(()=>{
        //getting number of cases
        const records_cases = getCasesFrom(numOfDays);
        records_cases.then(p=>{
            p.forEach(e=>{
                casesI.push(e.cases)
                cases_datesI.push(e.date)
            })
            setCases(casesI)
            setCases_dates(cases_datesI)
        })

        //getting number of recoveries
        const records_recoveries = getRecoveriesFrom(numOfDays);
        records_recoveries.then(p=>{
            p.forEach(e=>{
                recoveriesI.push(e.recoveries)
                recoveries_datesI.push(e.date)
            })
            setRecoveries(recoveriesI)
        })
        
    })
    //Cases Line chart.
    const cases_data = {
        labels: cases_dates,
        datasets: [{
            label: 'الحالات اليوميه',
            data: cases,
            backgroundColor: "rgba(255,0,0,0.2)",
            fill:true,
            borderColor: "Red",
            borderWidth: 1,
            
        },
        {
            label: 'حالات التعافي اليوميه',
            data: recoveries,
            fill: true,
            backgroundColor: "rgba(0,255,0,0.2)",
            borderColor: "Green",
            borderWidth: 1,

        }
        ],
    };

    

    return (
        <div className="line_chart">
            <Line
                data = {cases_data}
                height={500}
                width={600}
            />            
        </div>

    );
}



export default LineCharts;