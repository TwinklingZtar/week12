// const clickMeButton = document.querySelector(".click-me");

// function clickHandler() {
//     alert("You clicked me!");
 
// };
// function backgroundPink() {
//     document.body.classList.add("pinkBackground")
// };

// clickMeButton.addEventListener("click", clickHandler, {once:true})
// clickMeButton.addEventListener("click", backgroundPink)
// clickMeButton.addEventListener("click", updateImage)


// function updateImage(e) {
//     const image = document.querySelector("#shoppingCart");
//     image.removeAttribute("hidden")
//     image.height = 50
//     image.width = 50
//     console.log(e.target)

// }  
const buttonContainer = document.querySelector(".button-container") 

function buttonGreenHover(e) {
    if (e.target.tagName === "BUTTON") {
        // e.target.style.backgroundColor = "green"
        e.target.classList.toggle("greenBackground")
    }
}

function textColor(e) {
    e.target.style.color = e.target.textContent
}

buttonContainer.addEventListener("mouseover", buttonGreenHover)

buttonContainer.addEventListener("click", textColor)