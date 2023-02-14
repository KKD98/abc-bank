document.getElementById('withdraw-btn').addEventListener('click', function () {

    // To know the new withdraw value by calling getValueOfInputField()
    const getWithdrawInputFieldValue = getValueOfInputField('withdraw-input-field');

    if(isNaN(getWithdrawInputFieldValue)){
        alert('Please input a number');
    }

    else{
        // To know the current withdraw value by calling currentValue()
    const currentWithdrawValue = currentValue('withdraw-amount');



    // To know the current balance value by calling currentValue()
    const currentBalanceValue = currentValue('balance-amount');

    if (currentBalanceValue >= getWithdrawInputFieldValue) {
        // Add current withdraw value and new deposit value by calling add()
        const newAmountOfWithdraw = add(getWithdrawInputFieldValue, currentWithdrawValue);
        document.getElementById('withdraw-amount').innerText = newAmountOfWithdraw;
        // Subtract new withdraw value from current balance value by calling add()
        const newBalance = sub(currentBalanceValue, getWithdrawInputFieldValue);
        document.getElementById('balance-amount').innerText = newBalance;
    }

    else {
        alert('Not enough balance')
    }
    }

})