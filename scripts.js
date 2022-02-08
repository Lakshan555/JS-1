// Switch 

var empName = 'Ishanka';
var jobRole = 'Doctor';


switch(jobRole.toLocaleLowerCase()){
    case 'teacher': console.log(empName + 'is a teacher');
    break;
    case 'doctor':
    case 'profeser': console.log(empName + 'is a doctor');
    break;
    case 'enginer' :  console.log(empName + 'is a teacher');
    break;
    case 'singer' : console.log(empName + 'is a singer');
    break;
    default: console.log(empName + ' is a somthing else');
    break;
}

//-------------------------------
var age = 20;

switch(ture){
    case age < 20 :
        console.log(empName + 'is under Age');
        break;
    case age >= 20 && age < 30 : 
        console.log(empName + 'is in pefect Age');
        break;
    case age >= 30 && age < 50:
        console.log(empName + 'is in Mature Age');
        break;
    default :
        console.log(empName + 'is Too old');
    

} 