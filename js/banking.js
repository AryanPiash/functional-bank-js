// get inputs value
   function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const inputAmountText = inputField.value
    const inputAmountValue = parseFloat(inputAmountText)
    // clear input value
    inputField.value = '';
    return inputAmountValue
}
// get total value
   function updateTotalValue(totalId,amount){
    const totalElement = document.getElementById(totalId)
    const totalText = totalElement.innerText
    const previousTotal = parseFloat(totalText)

    // adding the value of input to deposit innertext
    const totalDepositAmmount = previousTotal + amount
    totalElement.innerText = totalDepositAmmount
}

// update balance
   function updateBalance(depositAmount,addition){
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalAmmount = currentBalance()

    if(addition == true){
        const balanceTotalAvailable = balanceTotalAmmount + depositAmount
        balanceTotal.innerText = balanceTotalAvailable
    }else{
        const balanceTotalAvailable = balanceTotalAmmount - depositAmount
        balanceTotal.innerText = balanceTotalAvailable
    }
}
// handle over value of withdraw
   function currentBalance(){
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const balanceTotalAmmount = parseFloat(balanceTotalText)
    return balanceTotalAmmount
}

    document.getElementById('deposit-btn').addEventListener('click',function(){
    
    const newDepositAmount = getInputValue('deposit-input')
    if(newDepositAmount > 0){
        updateTotalValue('deposit-total', newDepositAmount)
        updateBalance(newDepositAmount, true)
    }
    
})

// withdraw
    document.getElementById('withdraw-btn').addEventListener('click',function(){
   
    const balanceTotalAmmount = currentBalance()
    const previousWithdrew = getInputValue('withdraw-input')
    if(previousWithdrew > 0 && previousWithdrew < balanceTotalAmmount){
        updateTotalValue('withdraw-total', previousWithdrew)
        updateBalance(previousWithdrew, false)
    }
    if(previousWithdrew > balanceTotalAmmount){
        document.getElementById('error').style.display = 'block'
    }else{
        document.getElementById('error').style.display = 'none'
    }
    

})

