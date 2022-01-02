const readlineSync = require("readline-sync");
const Constants = require("./constants");

function index() {

    readlineSync.question(Constants.WELCOME_MESSAGE);

}

index();