document.getElementById('out-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount=document.getElementById('out-amount').value;
    amountNumber=parseFloat(amount);
    const pin=document.getElementById('out-pin').value;
    if(pin==='1234'){
        const current=document.getElementById('balance').innerText;
        const currentNumber=parseFloat(current);
        const newbalance=currentNumber-amountNumber;
        document.getElementById('balance').innerText=newbalance;
    }
    else{
        alert('wrong pin number..please try again later');
    }
})