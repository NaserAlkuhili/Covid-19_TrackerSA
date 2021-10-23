import React, { Component} from 'react';
import "./App.css";
import { RiGoogleFill } from "react-icons/ri";

import BarCharts from './components/BarCharts';
import CityList from './components/CityList';
import DailyCasesVsRecoveriesPie from './components/DailyCasesVsRecoveriesPie';



class App extends Component {


    render() {

        return (
            <div className = "main_background">
                <h1 className = "main_title"> احصائيات كوفيد-19 في السعوديه <img src="/assets/SAFlag.png" alt="Saudi_flag" className = "flag"></img> </h1>
                

                <div className = "content">
                    <div className="data">
                        <h1 className = "title">:حالات الشفاء و الاصابه في اخر 30 يوم</h1>
                        <BarCharts />
                    </div>
                    <div className="data">
                        <h1 className = "title">:الشفاء اليوم vs الإصابه</h1>
                        <DailyCasesVsRecoveriesPie style = {{width:400, height:400}}/>
                    </div>
                </div>
                <CityList/>

                <footer>
                    <RiGoogleFill className="icon"/>
                </footer>
            </div>
        );
    }
}

export default App;
