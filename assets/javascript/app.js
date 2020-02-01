const firebaseConfig = {
    apiKey: "AIzaSyB_5L5fIeDLmxtZfVMORsaprNOufiLCLVs",
    authDomain: "rpsmultiplayerjs.firebaseapp.com",
    databaseURL: "https://rpsmultiplayerjs.firebaseio.com",
    projectId: "rpsmultiplayerjs",
    storageBucket: "rpsmultiplayerjs.appspot.com",
    messagingSenderId: "339747505216",
    appId: "1:339747505216:web:cf4c46b8d66dc692b40ba5"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database();
let userConnected = database.ref('.info/connected');
let connectedUsers = database.ref('/users');

let playerName;
let player1connected = false;
let player2connected = false;
let playerNumber;
let playerObject;



userConnected.on('value', function(snapshot) {
    if(snapshot.val()) {
        
        renderSignIn();
        connectedUsers.push(true).onDisconnect().remove();
        
    }
}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
})

connectedUsers.on('value', function(snapshot) {
    
    console.log(connectedUsers);
    console.log(snapshot.numChildren());
}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});

function renderSignIn() {
    $('.connecting').hide();
    let inputName = $('<div class="input-group align-items-center mb-3">');
    $('#menu').append(inputName);
    let inputForm = $('<input type="text" class="form-control" id="playerName" placeholder="enter player username" aria-label="player" aria-describedby="button-addon2"><div class="input-group-append"><button class="btn btn-outline-secondary" type="button" id="button">Submit</button></div>');
    $(inputName).append(inputForm);
}