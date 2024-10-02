document.getElementById('add-money').addEventListener('click',function(event){
event.preventDefault();
const addmoney=document.getElementById('amount').value;
const pinNumber=document.getElementById('pin').value;
if(pinNumber=='1234'){
    const balance=document.getElementById('balance').innerText;
    const money=parseFloat(addmoney);
    const balanceNumber=parseFloat(balance);
    const newbalance=balanceNumber+money;
    console.log(newbalance);
    document.getElementById('balance').innerText=newbalance;

}
else{
    alert("Invalid pin number...Please try again");
}
})