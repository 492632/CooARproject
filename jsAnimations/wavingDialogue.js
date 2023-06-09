AFRAME.registerComponent('waving-dialogue', {
    init: function() {
        this.el.addEventListener("markerFound", showDialogueWaving);
        this.el.addEventListener("markerLost", hideDialogue);

        let cooBubbleWaving = document.querySelector("#cooBubbleWaving");
        cooBubbleWaving.addEventListener("click", answerDialogueWaving);
    }
  });

function showDialogueWaving() {
    if (dialogueState.userName != null && dialogueState.userName != ""){
        let cooBubbleWaving = document.querySelector("#cooBubbleWaving");
        cooBubbleWaving.innerHTML = "Nice to meet you, " + dialogueState.userName + "! Feel free to look around the lab.";
        cooBubbleWaving.style.display = "block";
    }
    else if (document.querySelector("#userNameInpt").value != null && document.querySelector("#userNameInpt").value != "") {
        let userNameDiv = document.querySelector("#userNameDiv");
        userNameDiv.style.display = "block";
    }
    else {
        startDialogueWaving();
    }
}

function startDialogueWaving() {
    let cooBubbleWaving = document.querySelector("#cooBubbleWaving");
    cooBubbleWaving.innerHTML = "Hello, I'm COO, a valuable member of the HCI Lab team! What's your name? <br><br><i>Tap here</i>"
    cooBubbleWaving.style.display = "block";
}

function answerDialogueWaving() {
    let cooBubbleWaving = document.querySelector("#cooBubbleWaving");
    let userNameDiv = document.querySelector("#userNameDiv");
    let userNameBtn = document.querySelector("#userNameBtn");
    
    cooBubbleWaving = document.querySelector("#cooBubbleWaving");
    cooBubbleWaving.style.display = "none";
    userNameBtn.addEventListener("click", enterUserName);
    userNameDiv.style.display = "block";
}

function enterUserName() {
    dialogueState.setUserName(document.querySelector("#userNameInpt").value);

    let cooBubbleWaving = document.querySelector("#cooBubbleWaving");
    cooBubbleWaving.removeEventListener("click", answerDialogueWaving);
    cooBubbleWaving.removeEventListener("touchend", answerDialogueWaving);
    cooBubbleWaving.innerHTML = "Nice to meet you, " + dialogueState.userName + "! Feel free to look around the lab.";
    let userNameDiv = document.querySelector("#userNameDiv");
    userNameDiv.style.display = "none"
    cooBubbleWaving.style.display = "block";
}

function hideDialogue() {
    let dialogueDiv = document.querySelector("#cooBubbleWaving");
    dialogueDiv.style.display = "none"
    
    let dialogueBtnsDiv = document.querySelector("#dialogueBtnsDiv");
    dialogueBtnsDiv.style.display = "none"

    let userNameDiv = document.querySelector("#userNameDiv");
    userNameDiv.style.display = "none"
}