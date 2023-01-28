function validateFormgym()
{
    var date1=document.forms["myForm"]["date1"].value;
    var date2=document.forms["myForm"]["date2"].value;
    var a;
    if(date1==""&&date2==""){
        a=0;
    }
    else{
        a=1;
    }
    if(a==1){
        alert("Booking Successfull");
        window.location.href="../foodapp.html";
    }
    else{
        alert("Please choose date");
    }
}
function validateFormseminar()
{
    var date1=document.forms["seminar"]["date1"].value;
    var date2=document.forms["seminar"]["date2"].value;
    var date3=document.forms["seminar"]["date3"].value;
    var date4=document.forms["seminar"]["date4"].value;
    var date5=document.forms["seminar"]["date5"].value;
    var date6=document.forms["seminar"]["date6"].value;
    var date7=document.forms["seminar"]["date7"].value;
    var a;
    if(date1==""&&date2==""&&date3==""&&date4==""&&date5==""&&date6==""&&date7==""){
        a=0;
    }
    else{
        a=1;
    }
    
    if(a==1){
        alert("Booking Successfull");
        window.location.href="../foodapp.html";
    }
    else{
        alert("Please choose date");
    }
}
function validateFormsports()
{
    var date1=document.forms["sports"]["date1"].value;
    var date2=document.forms["sports"]["date2"].value;
    var date3=document.forms["sports"]["date3"].value;
    var date4=document.forms["sports"]["date4"].value;
    var date5=document.forms["sports"]["date5"].value;
    var a;
    if(date1==""&&date2==""&&date3==""&&date4==""&&date5==""){
        a=0;
    }
    else{
        a=1;
    }
    
    if(a==1){
        alert("Booking Successfull");
        window.location.href="../foodapp.html";
    }
    else{
        alert("Please choose date");
    }
}
function validateFormcafeteria()
{
    var c1=document.forms["cafeteria"]["c1"].value;
    if(c1){
        alert("Booking Successfull");
        window.location.href="../foodapp.html";
    }
    else{
        alert("Please choose");
    }
}
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }