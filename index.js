// Code your solution in this file!
function returnFirstTwoDrivers (drivers){
    return drivers.slice(0, 2);
};

function returnLastTwoDrivers (drivers){
    return drivers.slice(2);
};
const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

const createFareMultiplier=function(transport){
    return function (integer){
        return transport*integer
    };
};
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers , returnLastTwoDrivers){
    return returnLastTwoDrivers (drivers);
};