document.getElementById('deposit-btn').addEventListener('click', function () {

    
        // To know the new deposit value by calling getValueOfInputField()
    const getDepositInputFieldValue = getValueOfInputField('deposit-input-field');

    if(isNaN(getDepositInputFieldValue)){
        alert('Please input a number');
    }

    else{
    // To know the current deposit value by calling currentValue()
    const currentDepositValue = currentValue('deposit-amount');
    
    // Add current deposit value and new deposit value by calling add()
    const newAmountOfDeposit = add(getDepositInputFieldValue , currentDepositValue);
    document.getElementById('deposit-amount').innerText = newAmountOfDeposit;

    // To know the current balance value by calling currentValue()
    const currentBalanceValue = currentValue('balance-amount');

    // Add current balance value and new deposit value by calling add()
    const newBalance = add(getDepositInputFieldValue , currentBalanceValue);
    document.getElementById('balance-amount').innerText = newBalance;
    }

})