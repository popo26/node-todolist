
exports.getDate =  function (){

    const today = new Date();
    
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
   
   return today.toLocaleDateString("en-NZ", options); 
}

exports.getDay = function() {

    const today = new Date();
    
    const options = {
        weekday: "long",
      
    };
   
    return today.toLocaleDateString("en-NZ", options);
}


 
// for(let month = 0;month < calendar.length;month++) { 
//         for(let x = 0;x < calendar[month].length;x++) { 
//             for(let y = 0;y < calendar[month][x].length;y++) {
//                     calendar[month][x][y]
//             }
//         }
//     }
