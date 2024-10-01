document.getElementById('button-id').addEventListener('click',function(event){
    event.preventDefault();
  console.log('Login button clicked');
  const phonenNumber=document.getElementById('phone').value;
  console.log(phonenNumber);
})