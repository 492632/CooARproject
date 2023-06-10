function DialogueState() {
    this.userName = "";
    this.rps = "";
    this.userNumber = null;
}

DialogueState.prototype.setUserName = function(str) {
    this.userName = str;
}

DialogueState.prototype.setRPS = function(str) {
    if (str != 'rock' && str != 'paper' && str != 'scissors') {
        return;
    }
    this.rps = str;
}

var dialogueState = new DialogueState();