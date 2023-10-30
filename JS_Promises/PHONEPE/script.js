document.getElementById('pay').addEventListener('click',() => {
    const selectedBank = document.querySelector('.inBank').value;
    const paymentAmount = parseFloat(document.querySelector('.inAmount').value);

    if (selectedBank && !isNaN(paymentAmount)){
        showProcessingUI();

        simulatePayment(selectedBank, paymentAmount)
            .then((paymentStatus) =>{
                hideProcessingUI();
                if (paymentStatus === 'accepted'){
                    displayPaymentSuccessUI();
                } else {
                    displayPaymentFailureUI();
                }
            });
    }
});

function simulatePayment(selectedBank, paymentAmount){
    return new Promise((resolve)=>{
        setTimeout(() => {
            if (paymentAmount % 2 === 0){
                resolve('accepted');
            } else {
                resolve('rejected');
            }
        }, 2000);
    });
}
function showProcessingUI(){
    const output = document.getElementById('output');
    output.innerHTML = '<div class="processing-message">Initiating transaction...</div>';
}

function hideProcessingUI(){
    const output = document.getElementById('output');
    output.innerHTML = '';
}

function displayPaymentSuccessUI(){
    const output = document.getElementById('output');
    output.innerHTML = '<div class="success-message">Payment successful!</div>';
}

function displayPaymentFailureUI(){
    const output = document.getElementById('output');
    output.innerHTML = '<div class="failure-message">Payment failed. Please try again later.</div>';
}
