//update balance
function updateBalance(number,flag)
{
    var currentBalance=document.getElementById("balanceValue").innerText;
    var balanceInNumber=parseFloat(currentBalance);
    if(flag==1){
        totalBalance=balanceInNumber + number;

       }
    else{
        totalBalance=balanceInNumber - number;
    
    }
    return totalBalance;
}
//login button event handeler
document.getElementById('login').addEventListener('click',function(){
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;
    var emailId="muna@gmail.com";
    var password="ilovemuna";
    if(email==emailId && pass==password)
    {
        document.getElementById('login-area').style.display='none';
        document.getElementById('transaction-area').style.display='block';
    }
    else{
        alert("You have entered wrong email or password.");
    }
    
});

//deposit button event handler
var depositBtn=document.getElementById('addDeposit');
depositBtn.addEventListener("click",function(){
    var amount=document.getElementById('depositAmount').value;
    amountInNumber=parseFloat(amount);

    var currentDeposit=document.getElementById("depositValue").innerText;
    valueInNumber=parseFloat(currentDeposit);
    totalDeposit=valueInNumber+amountInNumber;

    var flag=1;
    var totalBalance=updateBalance(amountInNumber,flag);

    document.getElementById("depositValue").innerText=totalDeposit;
    document.getElementById("balanceValue").innerText=totalBalance;

    document.getElementById('depositAmount').value="";
});

//withdraw button event handler
var withdrawBtn=document.getElementById('withdraws');
withdrawBtn.addEventListener("click",function(){
    var withdrawAmount=document.getElementById("withdrawAmount").value;
    withdrawAmountNumber=parseFloat(withdrawAmount);
    
    var currentWithdraws=document.getElementById('withdrawValue').innerText;
    var currentWithdrawNumber=parseFloat(currentWithdraws);

    totalWithdraw=withdrawAmountNumber+currentWithdrawNumber;
    document.getElementById('withdrawValue').innerText=totalWithdraw;

    var flag=2;
    var totalBalance=updateBalance(withdrawAmountNumber,flag);
 
    document.getElementById("balanceValue").innerText=totalBalance;
    document.getElementById("withdrawAmount").value="";

});