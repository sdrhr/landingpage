const a=document.getElementById('ijowk-7');
const b=document.getElementById('indfi-5');
const c=document.getElementById('ipmgh-7');
const d=document.getElementById('imgis-6');
const E=document.getElementById('i5vyy-7');
function button(){
    if(a.value == ""){
  document.getElementById('usererror').innerHTML="flied is empty";
}
else  {
    document.getElementById('usererror').innerHTML="";
   
}

if(b .value== ""){
    document.getElementById('passerror').innerHTML="flied is empty";
  }
  else  {
      document.getElementById('passrror').innerHTML="";
  }
  if(c .value == ""){
    document.getElementById('geterror').innerHTML="flied is empty";
  }
  else  {
      document.getElementById('geterror').innerHTML="";
  }
  if(d.value == ""){
    document.getElementById('getusererror').innerHTML="flied is empty";
  }
  else  {
      document.getElementById('getusererror').innerHTML="";
    
  }
  
  return false;
  
}

button.addEventlistener("click",()=>{
  const value1= a.value;
  const value2= b.value;
  const value3= c.value;
  const value4= d.value;
  localStorage.setItem("first-name",value1);
  localStorage.setItem("last-name",value2);
  localStorage.setItem("Email",value3);
  localStorage.setItem("phone Number",value4);
  location.reload();
});

window.addEventListener("load",()=>{
  const value8 = localStorage.setItem("name",value1);
  const value5 = localStorage.setItem("name",value2);
  const value6 = localStorage.setItem("name",value3);
  const value7 = localStorage.setItem("name",value4);

});

