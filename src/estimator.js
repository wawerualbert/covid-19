const covid19ImpactEstimator = (data) => {
const { reportedCases, timeToLapse, periodType, totalHospitalBeds } = data;
const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = data.region;

const estimate;
 if(periodType === 'months') {
   estimate = Math.ceil(timeToLapse * 30);
 } else if (periodType === 'weeeks') {
   estimate = timeToLapse * 7;
 } else {
   estimate = timeToLapse;
 };

const factor = Math.trunc(estimate / 3);
const results = 2 ** factor;

const impact =  {};
const severeimpact = {};

const noOfCases = (reportedCases, estimatedNumber) => reportedCases * estimatedNumber;

impact.currentlyInfected = noOfCases(reportedCases ,10);
impact.infectionsByRequestedTime = noOfCases(impact.currentlyInfected, results);


}

export default covid19ImpactEstimator;
