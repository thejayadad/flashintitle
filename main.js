let alert = false;
let title = "The Chat & Chew";
let message = "New Chat";

let change = setInterval(() => {
    document.title = alert ? title : message;

    alert = !alert;

}, 1000)
