day = "Wednesday"
kerst = true

switch(day && kerst){
 case "Monday" && false:
 case "Thursday " && false:
 case "Friday" && false:
     console.log(`falafel met salade`);
 break;

 case "Tuesday" && false:
 case "Wednesday" &&false:
    console.log(`spinazie`);
 break;

 case "Saturday" && false:
 case "Sunday" && false: 
    console.log(`linzensoep`);
break;
 case true:
        console.log( `kalkoen `);
break;
default: 
 console.log( `not a valid day!`)
}