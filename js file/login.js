    // step 1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2 get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    // step 3: get password
    // step 3.a: set id on the html element
    // step 3.b: get the element
    // step 3.c: get the value from the element
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    // DANGER: do not verify email password on the client side
    // step 4: verify email and password
    if(email === 'mahbub@gmail.com' && password === '1234'){
        window.location.href = 'bank.html'
    }
    else{
        alert('email:mahbub@gmail.com, pass:1234, এটা দিয়ে একবার চেষ্টা করে দেখ, কি আছে জীবনে !!!')
    }
})