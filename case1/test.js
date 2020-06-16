const readline = require('readline');
const inp = readline.createInterface({

     input: process.stdin,

    output: process.stdout

});



inp.question('Enter starting Date & time  ', (date1) => { //taking input of starting date and time

    inp.question('Enter ending date & Time : ', (date2) => {  //taking input of finishing date and time

        inp.question('Enter venue you want to book for the conference or seminar ', (v) => { //taking input of venue number


        let enter  = new Date(date1);  //changing the input into date
        let end = new Date(date2);  //changing input into date
        let venue=v; 
        

        console.log("Start " +enter);
        console.log("Finish " +end);
        console.log("venue: " +venue);



        let start1_time=enter.toTimeString(); 
         
        let start1_date=enter.toDateString();

        let finish1_time=end.toTimeString();
   
        let finish1_date=end.toDateString();

        let ara = new Array(29);

        for (var i= 0; i<3 ;i++){
        ara[i]= new Array(1);
}
        ara[0][venue-1]=enter;
        ara[1][venue-1]=end;



        let moment = require('moment'); // require
        moment().format(); 



        let input_start_time = moment(start1_time, 'HH:mm:ss');
        let input_finish_time = moment(finish1_time, 'HH:mm:ss');
        let closing_time = moment('23:00:00', 'HH:mm:ss');
        let opening_time = moment('08:00:00', 'HH:mm:ss');
        //var beginningdate=moment(enter,'dd-MM-yyyy');
       // var enddate=moment(end,'dd-MM-yyyy');
            let g = input_finish_time-input_start_time;
            let j=g/60000;



        if((input_start_time.isBefore(closing_time) && input_start_time.isAfter(opening_time)) && 
        (input_finish_time.isBefore(closing_time) && input_finish_time.isAfter(opening_time)) 
        && input_start_time.isBefore(input_finish_time) && (start1_date == finish1_date) ) {

            let fs=require("fs");

        let myReader=fs.readFileSync(v+'.txt','utf8');

        const words = myReader.split('\n');

            
             let enter1 = new Date(words[0]);
            
             let end1 = new Date(words[1]);
            
           


        let startp_time=enter1.toTimeString();

        let startp_date=enter1.toDateString();

        let finishp_time=end1.toTimeString();
         
        let finishp_date=end1.toDateString();
         
        
        let txt_start_time = moment(startp_time, 'HH:mm:ss');
        let txt_finish_time = moment(finishp_time, 'HH:mm:ss');




        if (startp_date==start1_date){ 
                 
        if((input_start_time.isBefore(txt_start_time))  && 
        input_start_time.isBefore(txt_finish_time) && 
        input_finish_time.isAfter(txt_start_time) &&
        input_finish_time.isBefore(txt_finish_time) ) {
            console.log('Sorry time is clashing');
            process.exit();

        }

        else if ((input_start_time.isAfter(txt_start_time)) && 
        input_start_time.isBefore(txt_finish_time) && 
        input_finish_time.isAfter(txt_start_time) && 
        input_finish_time.isAfter(txt_finish_time) )
        {
            console.log('Sorry time is clashing');
            process.exit();
        }

        else if ((input_start_time.isAfter(txt_start_time)) && 
        input_start_time.isBefore(txt_finish_time) && 
        input_finish_time.isAfter(txt_start_time) && 
        input_finish_time.isBefore(txt_finish_time) )
        {
            console.log('Sorry time is clashing');
            process.exit();
        }

        else if ((input_start_time.isBefore(txt_start_time)) && 
        input_start_time.isBefore(txt_finish_time) && 
        input_finish_time.isAfter(txt_start_time) && 
        input_finish_time.isAfter(txt_finish_time) )
        {
            console.log('Sorry time is clashing');
            process.exit();
        }

        else if(input_start_time.isSame (txt_start_time) || 
        input_start_time.isSame (txt_finish_time) || 
        input_finish_time.isSame(txt_start_time) || 
        input_finish_time.isSame(txt_finish_time)){
            console.log('Sorry time is clashing');
            process.exit();
        }

        else{
            console.log(`Your session is booked. Staring from ${ara[0][venue-1]} and ending at ${ara[1][venue-1]} `);

            if(j>180){
                let cost_per_minitue = .1;
                cost = j * cost_per_minitue;

            }

            else{
                let cost_per_minitue = .15;
                cost = j * cost_per_minitue;

            }
            console.log(`Your cost is ${cost} RM`);



            fs.writeFileSync(v+'.txt',enter+'\n'+end);
            process.exit();
        }

    }

            console.log(`Your session is booked. Staring from ${ara[0][venue-1]} and ending at ${ara[1][venue-1]} `);

            if(j>180){
                let cost_per_minitue = .1;
                cost = j * cost_per_minitue;

            }

            else{
                let cost_per_minitue = .15;
                cost = j * cost_per_minitue;

            }
            console.log(`Your cost is ${cost} RM`);

            fs.writeFileSync(v+'.txt',enter+'\n'+end);
            process.exit();

        }

        else{
            console.log('Sorry, you cannot reserve at this time range. Our venue operating time is 8am - 11pm and both date must be same but time should be different. Thank You');
        }

        
        inp.close();

    });

});

});