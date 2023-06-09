function DialogueState() {
    this.userName = "";
}

DialogueState.prototype.setUserName = function(str) {
    this.userName = str;
}


var dialogueState = new DialogueState();