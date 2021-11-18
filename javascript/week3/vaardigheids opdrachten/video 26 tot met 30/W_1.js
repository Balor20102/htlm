const age = 18;
const birthYear = 1988;

switch(true){
    case getResult(age,birthYear):
        console.log("Great!");
        break;
    default:
        console.log("Vos!");
}
function getResult(age, birthYear){
    return age >= 18 && String(birthYear).includes("88")
}
