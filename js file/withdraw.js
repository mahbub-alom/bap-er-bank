document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawFieldInput = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawFieldInput.value;
    const withdrawField = parseFloat(withdrawFieldString);


    const withdrawFieldTotal = document.getElementById('withdraw-field-total');
    const withdrawTotalString =withdrawFieldTotal.innerText;
    const withdrawBalance = parseFloat(withdrawTotalString);
    
    const balanceTotalElement =document.getElementById('total-amount');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentWithdrawTotal = withdrawField + withdrawBalance;

    withdrawFieldTotal.innerText = currentWithdrawTotal;

    const currentTotalAmount = previousBalanceTotal - withdrawField;

    balanceTotalElement.innerText = currentTotalAmount;

    withdrawFieldInput.value ='';
})