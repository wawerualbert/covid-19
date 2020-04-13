const covid19ImpactEstimator = (data) => {
   const input = {
    region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
        },
        periodType: "days",
        timeToElapse: 58,
        reportedCases: 674,
        population: 66622705,
        totalHospitalBeds: 1380614
     }  
};


const estimatorFunction = (input) => {
return {
        impact: {
           currentlyInfected: impact.currentlyInfected = data.reportedCases * 10,
           infectionsByRequestedTime: impact.currentlyInfected * 512,
           severeCasesByRequestedTime: impact.infectionsByRequestedTime * 0.15,
           hospitalBedsByrequestedTime: (impact.totalHospitalBeds * 0.35) - impact.severeCasesByRequestedTime,
           casesForICUByRequestedTime: impact.infectionsByRequestedTime * 0.05,
           casesForVentilatorsByRequestedTime: impact.infectionsByRequestedTime * 0.02,
           dollarsInFlight: (impact.infectionsByRequestedTime * 0.65 * 1.5) / 30,
        },
        severeImpact: {
           currentlyInfected: severeImpact.currentlyInfected = reportedCases * 50,
           infectionsByRequestedTime: severeImpact.currentlyInfected * 512,
           severeCasesByRequestedTime: severeImpact.infectionsByRequestedTime * 0.15,
           hospitalBedsByrequestedTime: (severeImpact.totalHospitalBeds * 0.35) - severeImpact.severeCasesByRequestedTime,
           casesForICUByRequestedTime: severeImpact.infectionsByRequestedTime * 0.05,
           casesForVentilatorsByRequestedTime: severeImpact.infectionsByRequestedTime * 0.02,
           dollarsInFlight: (severeImpact.infectionsByRequestedTime * 0.65 * 1.5) / 30, 
        }

    }
}

export default covid19ImpactEstimator;
