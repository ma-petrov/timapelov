/* Portfolio open and close */

function getTop(i, n, clientHeight) {
    return `${(clientHeight * ((n - 1 - i)/n)).toString()}px`;
}

function getHeight(i, n, clientHeight) {
    return `${(clientHeight * ((i + 1)/n)).toString()}px`;
}

function openPortfolio() {
    console.log("go-to-portfolio-button was pressed");

    const portfolioContainer = document.getElementById("portfolio");
    portfolioContainer.style.display = "block";

    let n = 10;
    const clientHeight = document.documentElement.clientHeight;
    const clientWidth = document.documentElement.clientWidth;
    portfolioContainer.style.width = `${clientWidth}px`;
    for (let i = 0; i < n; i++) {
        setTimeout(() => {
            portfolioContainer.style.top = getTop(i, n, clientHeight);
            portfolioContainer.style.height = getHeight(i, n, clientHeight);
        }, 20 * (i + 1));
    }
}

function closePortfolio() {
    console.log("go-to-portfolio-button was pressed");

    const portfolioContainer = document.getElementById("portfolio");

    let n = 10;
    const clientHeight = document.documentElement.clientHeight;
    const clientWidth = document.documentElement.clientWidth;
    portfolioContainer.style.width = `${clientWidth}px`;
    for (let i = 0; i < n; i++) {
        setTimeout(() => {
            portfolioContainer.style.top = getTop(n - 1 - i, n, clientHeight);
            portfolioContainer.style.height = getHeight(n - 1 - i, n, clientHeight);
        }, 20 * (i + 1));
    }
    setTimeout(() => {portfolioContainer.style.display = "none"}, n * 20);
}

document.getElementById("go-to-portfolio-button").addEventListener("click", openPortfolio);
document.getElementById("close-portfolio-button").addEventListener("click", closePortfolio);



/* Resizing */

const centerColumnContainer = document.getElementsByClassName("container");
const avatar = document.getElementById("avatar");

function setCenterColumnContainersWidth(width) {
    [...centerColumnContainer].forEach(c => {
        c.style.width = `${width.toString()}px`;
    });
}

function setAvatarSize(width) {
    const avatarSize = `${Math.round(width/2, 3).toString()}px`;
    const avatarRadius = `${Math.round(width/4, 3).toString()}px`;
    console.log(`avatar size == ${avatarSize}`)
    avatar.style.width = avatarSize;
    avatar.style.height = avatarSize;
    avatar.style.borderRadius = avatarRadius;
}

function resize() {
    const clientWidth = document.documentElement.clientWidth;
    setCenterColumnContainersWidth(Math.min(clientWidth - 20, 800));
    setAvatarSize(Math.min(clientWidth, 600));
}

window.onresize = resize;

window.onload = () => {
    resize();
}