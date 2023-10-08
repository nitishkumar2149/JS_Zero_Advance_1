const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    } else if( weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = ((weight/(height * height)) * 10000).toFixed(2);

        if(bmi < 18.60){
            results.innerHTML = `BMI is <span>${bmi}</span> , Under Weight.`
        } else if(bmi > 18.60  && bmi <= 24.90){
            results.innerHTML = `BMI is <span>${bmi}</span> , Normal Range.`
        } else{
            results.innerHTML = `BMI is <span>${bmi}</span> , Over Weight.`
        }
    }
});



