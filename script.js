//  Home page script

const tabBar = document.getElementById('tab-bar');
const nav = document.getElementById('navbar');
const cross = document.getElementById('cross');

if (tabBar) {
    tabBar.addEventListener('click', () => {
        nav.style.right = 0;
    })
}

if (cross) {
    cross.addEventListener('click', () => {
        nav.style.right = '-300px';
    })
}


// Shop page script



//  Single Product page script

let mainImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].addEventListener("click", () => {
        mainImg.src = smallImg[i].src
    });
}


// script for slider

let nxtBtn = document.querySelector(".nxt-btn");
let preBtn = document.querySelector(".pre-btn");
const proContainer = document.querySelectorAll(".featured-section");

proContainer.forEach((item, i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width;

    nxtBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
    })
})