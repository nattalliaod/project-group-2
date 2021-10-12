const read = document.querySelector(".about__read");
const about = document.querySelector(".reviews__about")

read.addEventListener("click",(e)=>{
    about.classList.toggle("more-text");
    if (read.innerText === "Read more") {
        read.innerText = "Read less";
    } else {
        read.innerText = "Read more";
    }
})