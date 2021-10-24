import React from 'react';







const RegionCases = ({region, cases}) => {
    
        return (
            <div className="region_cases">
                <h1 className = "region_cases_content">{cases}</h1>
                <h1 className = "region_cases_content">:{region}</h1>
            </div>
        )
    
}


 

export default RegionCases