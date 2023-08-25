/*
Validate phone numbers entered into the text field. As the number is entered, check to see if it
 matches these formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn. 
 If the number matches, change the text color from red to green.

Use several different phone numbers to test.

HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
*/

const phoneInput=document.getElementById('phone');

console.log('phone', phoneInput);

const onInputChange=(e)=>{
    const inputValue=e.target.value;
    console.log('event value', inputValue);

    const validPhoneRegex=/[(]?\d{3}[)]?[-.]?\d{3}[-.]?\d{4}/;
    console.log('validPhoneRegex', validPhoneRegex);

    if(validPhoneRegex.test(inputValue)){
        phoneInput.setAttribute('class', 'green');
    }else{
        phoneInput.setAttribute('class', 'red');  
    }
};

phoneInput.addEventListener('input', onInputChange)