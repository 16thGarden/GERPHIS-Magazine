const book = document.querySelector("#book");
const clue = document.querySelector("#clue");
$("#book").click(function(e){
    var pWidth = $(this).innerWidth(); //use .outerWidth() if you want borders
    var pOffset = $(this).offset(); 
    var x = e.pageX - pOffset.left;
    if(pWidth / 1000000 > x)
        goPrevPage()
    else
        goNextPage()
});

var papers = Array.from(document.querySelectorAll(".paper"))
for (var i = 1; i < papers.length; i++) {
    papers[i].style.zIndex = papers.length - i
}

let currentLocation = 1;
let numOfPapers = papers.length - 1;
let maxLocation = papers.length;
var interacted = false;
showClue();

function showClue() {
    setTimeout(function() {
        if (!interacted) {
            clue.style.color = "black";
            clue.style.border = "1px solid black";
        }
    }, 5000);
}

function hideClue() {
    clue.style.color = "azure";
    clue.style.border = "";
}

function openBook() {
    book.style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
}

function setIndexDelay(paper, index) {
    setTimeout(function() {
        paper.style.zIndex = index;
    }, 500)
}    

function goNextPage() {
    interacted = true;
    hideClue();
    if(currentLocation < maxLocation) {
        if (currentLocation == 1) {
            openBook();
        } else if (currentLocation == maxLocation - 1) {
            closeBook(false);
        }

        papers[currentLocation].classList.add("flipped");

        if (currentLocation == maxLocation / 2 + 1) {
            papers[currentLocation].style.zIndex = currentLocation;
        } else if (currentLocation > Math.floor(maxLocation / 2) + 1) {
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

        if (currentLocation == maxLocation / 2 + 2) {
            setIndexDelay(papers[currentLocation - 2], maxLocation - currentLocation + 1)
        } if (currentLocation > Math.floor(maxLocation / 2) + 2) {
            setIndexDelay(papers[currentLocation - 1], maxLocation - currentLocation + 1)
        } else {
            papers[currentLocation - 1].style.zIndex = maxLocation - currentLocation + 1;
        }

        currentLocation--;
    }
}