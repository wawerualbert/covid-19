const covid19ImpactEstimator = (data) => {
  const { 
    reportedCases, timeToLapse, periodType, totalHospitalBeds 
   } = data;
  const {
    avgDailyIncomeInUSD, avgDailyIncomePopulation 
   } = data.region;

  const estimate

  if (periodType === 'months') {
    estimate = Math.ceil(timeToLapse * 30);
   } else if (periodType === 'weeeks') {
    estimate = timeToLapse * 7;
   } else{
    estimate = timeToLapse;
   };

  const factor = Math.trunc(estimate / 3);
  const results = 2 ** factor;

  const impact =  {};
  const severeImpact = {};

  const noOfCases = (reportedCases, estimatedNumber) => reportedCases * estimatedNumber;

  impact.currentlyInfected = noOfCases(reportedCases, 10);
  impact.infectionsByRequestedTime = noOfCases(impact.currentlyInfected, results);

  let severeCases = noOfCases(impact.infectionsByRequestedTime, 0.15);
  severeCases = Math.trunc(severeCases);

  const casesForICU = noOfCases(impact.infectionsByRequestedTime, 0.05);
  const caseForVentilators = noOfCases(impact.infectionsByRequestedTime, 0.02);

  const populationIncome = avgDailyIncomePopulation * avgDailyIncomeInUSD;
  const moneyLoss = (impact.infectionsByRequestedTime * populationIncome) / estimate;

  let hospitalBeds = noOfCases(totalHospitalBeds, 0.35);
  hospitalBeds = Math.trunc(hospitalBeds - severeCases);


  impact.severeCasesByRequestedTime = severeCases;
  impact.hospitalBedsByRequestedTime = hospitalBeds;
  impact.casesForICUByRequestTime = Math.trunc(casesForICU);
  impact.caseForVentilatorsByRequestTime = Math.trunc(caseForVentilators);
  impact.dollarsInFlight = Math.trunc(moneyLoss);

  severeImpact.currentlyInfected = noOfCases(reportedCases, 50);
  severeImpact.infectionsByRequestedTime = noOfCases(severeImpact.currentlyInfected, results);

  let severeImpactCases = noOfCases(severeImpact.infectionsByRequestedTime, 0.15);
  severeImpactCases = Math.trunc(severeImpactCases);

  const severeCasesForICU = noOfCases(severeImpact.infectionsByRequestedTime, 0.05);
  const severeCasesForVentilators = noOfCases(severeImpact.infectionsByRequestedTime, 0.02);
  const severeIncome = avgDailyIncomePopulation * avgDailyIncomeInUSD;
  const severeMoneyLoss = (severeImpact.infectionsByRequestedTime * severeIncome) / estimate;
  const severeImpactHospitalBeds = noOfCases(totalHospitalBeds * 0.35);
  severeImpactHospitalBeds = Math.trunc(severeImpactHospitalBeds - severeImpactCases);

  severeImpact.severeCasesByRequestedTime = severeImpactCases;
  severeImpact.hospitalBedsByRequestedTime = severeImpactHospitalBeds;
  severeImpact.casesForICUByRequestTime = Math.trunc(severeCasesForICU);
  severeImpact.caseForVentilatorsByRequestTime = Math.trunc(severeCasesForVentilators);
  severeImpact.dollarsInFlight = Math.trunc(severeMoneyLoss);

  return { data, impact, severeImpact };

};

export default covid19ImpactEstimator;
