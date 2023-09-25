//const is used so that the form variable value do not get changed as it will get submitted.
const form = document.querySelector('form');
//if we put the height and weight value outside the event listener then it will return an empty value but 
//we want a user defined value thus we must declare it inside the event listner part.

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    //use conditional statement to take the input of height and weight and calculate the bmi.
    if(height === '' || height <0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid Height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid Weight ${weight}`;
    } else {
        const bmi = (weight/ ((height * height) / 10000)).toFixed(2);

     
    //use the conditional statement to print the message if one is normal, underweight, or overweight.
    
    let message = `Your BMI is ${bmi}.<br>`;

    if (bmi < 18.6) {
        message += `You are Underweight!`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        message += `You are in Normal range!`;
    } else if (bmi > 24.9) {
        message += `You are Overweight!`;
    }
    
//show the result
results.innerHTML = message;

    

       
     
}
    


})