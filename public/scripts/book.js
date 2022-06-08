// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

var papers = Array.from(document.querySelectorAll(".paper"))
for (var i = 1; i < papers.length; i++) {
    papers[i].style.zIndex = papers.length - i
}

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

let currentLocation = 1;
let numOfPapers = papers.length - 1;
let maxLocation = papers.length;

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
        if (currentLocation == 1) {
            openBook();
        } else if (currentLocation == maxLocation - 1) {
            closeBook(false);
        }

        papers[currentLocation].classList.add("flipped");
        if (currentLocation > Math.floor(maxLocation / 2) + 1) {
            papers[currentLocation].style.zIndex = currentLocation;
        } else {
            setIndexDelay(papers[currentLocation], currentLocation)
        }

        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        if (currentLocation == 2) {
            closeBook(true);
        } else if (currentLocation == maxLocation) {
            openBook();
        }
        
        papers[currentLocation - 1].classList.remove("flipped");

        if (currentLocation > Math.floor(maxLocation / 2) + 2) {
            setIndexDelay(papers[currentLocation - 1], maxLocation - currentLocation + 1)
        } else {
            papers[currentLocation - 1].style.zIndex = maxLocation - currentLocation + 1;
        }

        currentLocation--;
    }
}