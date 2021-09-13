const mousemove = document.querySelector(".chocolat");

const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + "%";
    bubble.style.right = Math.random() * 10 + "%";

    setTimeout(() => {
        bubble.remove();
    }, 8000);

    bubble.addEventListener("mouseenter", () => {
        bubble.remove();
    });
};

setInterval(bubbleMaker, 1000);





window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX
    mousemove.style.top = e.pageY
    console.log(e.target);
})



/* eyeball.addEventListener(('mousemove') => {

}) */