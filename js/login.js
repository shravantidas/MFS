document.getElementById('button-id').addEventListener('click',function(event){
    event.preventDefault();
  const phonenNumber=document.getElementById('phone').value;
  console.log(phonenNumber);
  const pinNumber=document.getElementById('pin')
.value;
console.log(pinNumber);
if(phonenNumber==='5' && pinNumber==='1234'){
    console.log('You are logged in');
}
else{
    alert("wrong info");
}
})