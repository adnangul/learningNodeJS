

let customProperties = {
    "subscriptiontype" : "abc" ,
    "datesubscriptionwillbecanceled" : "today",
    "programenddate" : "activeSubscription.endDate" ,
    "TRANSACTIONGALLONSUSED" : "activeSubscription.gallonsUsed" ,
    "TRANSACTIONSUBSCRIPTIONSAVINGSTODATE" : 10
} ;

// customProperties.forEach(element => {
//     console.log("Custom prop name: " + element.name) ;
    if(customProperties["TRANSACTIONGALLONSUSED"]){
        console.log("worked") ;
    }else{
        console.log("Missing values for :" + element.name) ;
    }
// }); 


