let btn = document.querySelector(".refresh-btn")
let text = document.querySelector(".advice-text")
let adviceNumber = document.querySelector(".advice-number")
let url = "https://api.adviceslip.com/advice"


async function generateAdvice(){
  
        const response = await fetch(url);
        const data = await response.json()
        const Slip = data.slip.advice
        const advId = data.slip.id
        adviceNumber.innerHTML = `ADVICE #${advId}`
        text.innerHTML = Slip
    
}

generateAdvice()

btn.addEventListener("click", (event)=>{
    
    location.reload()
})

