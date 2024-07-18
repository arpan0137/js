const body = document.querySelector('body')

const buttons = document.querySelectorAll('.button')

buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        // console.log(e); 
        console.log(e.target);
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id
        } else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id
        }
    })
    // if(btn.style.backgroundColor == 'darkslategray' ){
    //     body.style.backgroundColor = 'darkslategray'
    // }
    // else if(btn.style.backgroundColor == 'white' ){
    //     body.style.backgroundColor = 'white'
    // }
    // else if(btn.style.backgroundColor == 'blue' ){
    //     body.style.backgroundColor = 'blue'
    // }
    // else if(btn.style.backgroundColor == 'yellow' ){
    //     body.style.backgroundColor = 'yellow'
    // }
})