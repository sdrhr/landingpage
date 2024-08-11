const a=document.getElementById('input-1');
const b=document.getElementById('input-2');
const c=document.getElementById('input-3');
const d=document.getElementById('input-4');

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
