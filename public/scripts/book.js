// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 8;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-33.5825vh)";
    nextBtn.style.transform = "translateX(33.5825vh)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function setIndexDelay(paper, index) {
    setTimeout(function() {
        paper.style.zIndex = index;
    }, 500)
}    

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                setIndexDelay(paper1, 1)
                break;
            case 2:
                paper2.classList.add("flipped");
                setIndexDelay(paper2, 2)
                break;
            case 3:
                paper3.classList.add("flipped");
                setIndexDelay(paper3, 3)
                break;
            case 4:
                paper4.classList.add("flipped");
                setIndexDelay(paper4, 4)
                break;
            case 5:
                paper5.classList.add("flipped");
                setIndexDelay(paper5, 5)
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                break;
            case 8:
                paper8.classList.add("flipped");
                paper8.style.zIndex = 8;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 8;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 7;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 6;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 5;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 4;
                break;
            case 7:
                paper6.classList.remove("flipped");
                setIndexDelay(paper6, 3)
                //paper6.style.zIndex = 3;
                break;
            case 8:
                paper7.classList.remove("flipped");
                //paper7.style.zIndex = 2;
                setIndexDelay(paper7, 2)
                break;
            case 9:
                openBook();
                paper8.classList.remove("flipped");
                //paper8.style.zIndex = 1;
                setIndexDelay(paper8, 1)
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}