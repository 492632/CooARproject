AFRAME.registerComponent('simple-dialogue', {
    init: function() {
        this.el.addEventListener("markerFound", showDialogueSimple);
        this.el.addEventListener("markerLost", hideDialogueSimple);
    }
  });

function showDialogueSimple() {
    let cooBubbleOther = document.querySelector("#cooBubbleOther");
    let danceMarker = document.querySelector("#danceMarker");
    let jumpMarker = document.querySelector("#jumpMarker");
    let boredMarker = document.querySelector("#boredMarker");
    if (danceMarker && danceMarker.object3D.visible) {
        cooBubbleOther.innerHTML = "One of our colleagues taught me this dance. It's cool, right?";
    }
    else if (jumpMarker && jumpMarker.object3D.visible) {
        cooBubbleOther.innerHTML = "Have you fixed the bug in your code already? I'm happy for you!";
    }
    else {
        cooBubbleOther.innerHTML = "I'm waiting for my friend Lev, he's always late.";
    }
    cooBubbleOther.style.display = "block";
}

function hideDialogueSimple() {
    let dialogueDiv = document.querySelector("#cooBubbleOther");
    dialogueDiv.style.display = "none";
}