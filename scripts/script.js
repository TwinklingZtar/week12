const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton);
function clickHandler() {
    alert("You clicked me!");
    // clickMeButton.removeEventListener("click", clickHandler);
};
function backgroundPink() {
    document.body.classList.add("pinkBackground")
};

clickMeButton.addEventListener("click", clickHandler, {once:true})
clickMeButton.addEventListener("click", backgroundPink)

