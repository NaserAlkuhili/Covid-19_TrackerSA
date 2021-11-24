import React, { Component} from 'react';
import "./App.css";
import { RiGoogleFill, RiTwitterFill, RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

import LineCharts from './components/LineCharts';
import RegionList from './components/RegionList';
import DailyCasesVsRecoveriesPie from './components/DailyCasesVsRecoveriesPie';



class App extends Component {


    render() {

        return (
            <div className = "main_background">
                <h1 className = "main_title"> احصائيات كوفيد-19 في السعوديه <img src="/assets/SAFlag.png" alt="Saudi_flag" className = "flag"></img> </h1>
                
                <div className = "content">
                    <div className="data">
                        <h1 className = "title">:حالات الشفاء و الاصابه في اخر 30 يوم</h1>
                        <LineCharts/>
                    </div>
                    <div className="data">
                        <h1 className = "title">:الشفاء اليوم vs الإصابه</h1>
                        <DailyCasesVsRecoveriesPie/>
                    </div>
                </div>
                <RegionList/>
                <footer>
                    <a href="mailto:k4gam3r@gmail.com"> {/* Email */}
                        <RiGoogleFill className="icon" size = {45}/>
                    </a>
                    <a href="https://twitter.com/NasserAlkuhili"> {/* Twitter */}
                        <RiTwitterFill className="icon" size = {45}/>
                    </a>
                    <a  href="https://github.com/NaserAlkuhili"> {/* Github */}
                        <RiGithubFill className="icon" size = {45}/>
                    </a>
                    <a  href="https://www.linkedin.com/in/naser-alkuhili-b10461181/"> {/* Linkedin */}
                        <RiLinkedinBoxFill className="icon" size = {45}/>
                    </a>
                </footer>
            </div>
        );
    }
}

export default App;
