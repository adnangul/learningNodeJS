
const moment = require('moment')


const today = moment().utc().startOf('day');
const tomorrow = moment().add(1, 'days').endOf('day').utc() ;

console.log("Today" + today.toISOString()) ;
console.log("today:" + today.toDate()) ;

console.log("tomorrow:" + tomorrow.toISOString()) ;
console.log("tomorrow:" + tomorrow.toDate()) ;
