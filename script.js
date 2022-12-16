let batu = document.getElementById("batu");
let gunting = document.getElementById("gunting");
let kertas = document.getElementById("kertas");
let computerchoice = document.getElementById("computerchoice");
let options = ["batu", "gunting", "kertas"];

batu.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = options[random];
    computerchoice.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption) {
            case "batu":
                alert("seri");
                break;
    
            case "gunting":
                alert("kamu menang!");
                break;
                
        
            default:
                alert("komputer menang!");
                break;
    }
    }, 300);
    
})


gunting.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = options[random];
    computerchoice.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption) {
            case "batu":
                alert("komputer menang!");
                break;
    
            case "gunting":
                alert("seri");
                break;
                
        
            default:
                alert("kamu menang");
                break;
    }
    }, 300);
    
})

kertas.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = options[random];
    computerchoice.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption) {
            case "batu":
                alert("kamu menang!");
                break;
    
            case "gunting":
                alert("komputer menanag!");
                break;
                
        
            default:
                alert("seri");
                break;
    }
    }, 300);
    
})


