let title=document.querySelector(".title");
let q1=document.querySelector(".questions1");
let q2=document.querySelector(".question2");
let button=document.querySelector(".button");
let Submitbutton=document.querySelector(".Submitbutton");
let lol=document.querySelector(".lol");
let p=document.querySelector(".L1");
let water=document.querySelector(".water");
let age1=document.querySelector(".age1");
let act1=document.querySelector(".act");

lol.onclick = function (){
    p.innerHTML="Why you clicking here?? Try ↑";
};




Submitbutton.onclick = function() {
    q1.style.display="block";
    q2.style.display="block";
    button.style.display="block";
    title.style.display="none";
};

button.onclick = function() {
    let userInput=document.querySelector(".input").value;
    let p1=document.querySelector(".p1").value;
    let p2=document.querySelector(".p2").value;
    let r1=document.querySelector(".r1");
    r1.style.display="block";
    
    console.log(p1);
    console.log(p2);
    
     
     if ( p1 >=20 && p2==="extrovert"){
    q1.style.display="none";
    q2.style.display="none";
    button.style.display="none";
     
     document.querySelector(".Fightingbull").style.display="block";
        r1.innerHTML="Hey " + userInput + " since your age is " + p1 + " and you are " + p2 +" then, you are a Fighting bull!!";
        
    }
 
     else if ( p1>=20 && p2==="introvert"){
 document.querySelector(".Dexter").style.display="block";
 r1.innerHTML="Hey " + userInput + " since your age is " + p1 + " and your are " + p2 + " then, your are a Dexter!!"; 
         }
    
    else if ( p1 <=19 && p2==="introvert"){
      document.querySelector(".BelgianBlueCow").style.display="block";
    r1.innerHTML="Hey " + userInput + " since your age is " + p1 + " and you are  "+ p2 +" then, you are a Belgian Blue Cow ";
    }
    
    else if ( p1 <= 19 && p2 === "extroverted") {
     q1.style.display="none";
    q2.style.display="none";
    button.style.display="none";
     document.querySelector(".Nelore").style.display="block";
    r1.innerHTML="Hey " + userInput + " since your age is " + p1 + " and your are " + p2 +" then, you are a Nelore";
   
}
    
    
};

