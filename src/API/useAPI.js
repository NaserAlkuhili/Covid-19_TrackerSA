const getCasesFrom =  async (day) => {
    var cases = []
    var URL = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&q=&rows="+day+"&sort=date&refine.daily_cumulative=Daily&refine.indicator=Cases&refine.region_en=Total"
    await fetch(URL).then(Response=>{
        return Response.json()
    }).then(data=>{
        for (let record of data.records){
            cases.push({date: record.fields.date, cases: record.fields.case_value})
        }
    }).catch(err=>{console.error(err)})
    
    return (cases)
    
}

const getRecoveriesFrom =  async (day) => {
    var recoveries = []
    var URL = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&q=&rows="+day+"&sort=date&facet=daily_cumulative&facet=indicator&facet=date&facet=event&facet=city_en&facet=region_en&refine.region_en=Total&refine.indicator=Recoveries&refine.daily_cumulative=Daily&refine.city_en=Total"
    await fetch(URL).then(Response=>{
        return Response.json()
    }).then(data=>{
        for (let record of data.records){
            recoveries.push({date: record.fields.date, recoveries: record.fields.case_value})
        }
    }).catch(err=>{console.error(err)})
    
    return (recoveries)
    
}

// https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&q=date%3A%5B2021-10-13+TO+2021-10-14%5D&rows=60&sort=date&refine.daily_cumulative=Daily&refine.indicator=Cases

const getCasesByCity =  async () => {
    const todays_date = new Date().toISOString().slice(0, 8) + (Number(new Date().getDate())).toString();
    const yesterdays_date = new Date().toISOString().slice(0, 8) + (Number(new Date().getDate()) - 1).toString();

    var cityCases = []
    // https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&q=date%3A%5B2021-10-20+TO+2021-10-21%5D&rows=67&sort=date&facet=city_en&refine.indicator=Cases&refine.daily_cumulative=Daily
    var URL = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&q=date%3A%5B"+yesterdays_date+"+TO+"+todays_date+"%5D&rows=67&sort=date&facet=city_en&refine.indicator=Cases&refine.daily_cumulative=Daily"
    console.log("today: " + todays_date)
    console.log("yest: " + yesterdays_date)

    await fetch(URL).then(Response=>{
        return Response.json()
    }).then(data=>{
        for (let record of data.records){
            if (record.fields.city_en !== "Total"){
            cityCases.push({city: record.fields.city_en, cases: record.fields.case_value})
            }
        }
    }).catch(err=>{console.error(err)})

    return (cityCases)
}
    
export {getCasesFrom, getRecoveriesFrom, getCasesByCity}