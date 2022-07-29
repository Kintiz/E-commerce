
    let clicked = false
    heart.addEventListener('click', () =>{
        const heart = document.getElementById('heart')
    
        if(!clicked){
            clicked = true;
            heart.style.color='#e23a3a'
        } else {
            clicked = false;
            heart.style.color='gray'
        }
    })
    heart.addEventListener('mouseenter', () =>{
        const heart = document.getElementById('heart')
    
        if(!clicked){
            clicked = true;
            heart.style.color='#e23a3a'
        } else {
            clicked = false;
            heart.style.color='gray'
        }
        
    })
    heart.addEventListener('mouseout', () =>{
        const heart = document.getElementById('heart')
    
        if(!clicked){
            clicked = true;
            heart.style.color='#e23a3a'
        } else {
            clicked = false;
            heart.style.color='gray'
        }
        
    })
    