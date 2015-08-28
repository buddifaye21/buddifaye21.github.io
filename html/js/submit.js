function submit(){
    var x = window.alert("This method is working");
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');
    var contactinfo = document.getElementById('contact');
    if (subject == " ") {
        window.alert("I would love to know what your contacting me about, please enter a subject.");
    } else if (message == " ") {
        window.alert("Oops, you for got to write me a message!");
    } else {
        window.alert("Thanks for contacting me, I will get back to oyu as soon as I can! :smile:");
    }
}