document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    const totalDepositAmount = newDepositAmount + previousDepositTotal;

    depositTotalElement.innerText = totalDepositAmount;

    const balanceTotalElement =document.getElementById('total-amount');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentTotalBalance = newDepositAmount + previousBalanceTotal;

    balanceTotalElement.innerText = currentTotalBalance;

    depositField.value = '';

})