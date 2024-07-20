const form  = document.querySelector('form')

// const height = document.getElementById('height')
// const weight = document.getElementById('weight')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    if(height === '' || height < 0 || isNaN(height)){
        alert('Please give a valid height !')
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        alert('Please give a valid weight !')
    } else {
        const h_in_meters = height*0.01
        let bmi = (weight / (h_in_meters*h_in_meters)).toFixed(2)
        if(bmi < 18.6){
            alert(`${bmi} (Under Weight)`)
        }else if(bmi >= 18.6 && bmi <= 24.9){
            alert(`${bmi} (Normal)`)
        }else if(bmi > 24.9){
            alert(`${bmi} (OverWeight)`)
        }
        console.log(bmi);
    } 
})