
function contactMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been submitted.");

    event.target.reset();

}
