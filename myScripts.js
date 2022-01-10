var button1 = document.querySelector("#button1");
button1.addEventListener("click", () => {
    document.getElementById("argument").innerHTML = "I am Right!";
});

var button2 = document.querySelector("#button2");
button2.addEventListener("click", () => {
    document.getElementById("argument").innerHTML = "No I am Right!";

});

function dontDoIt(x) {
    alert("Hey, I told you not to hover over me!");

}

function validate(event) {
    event.preventDefault()
    var data = new FormData(document.querySelector('form'));
    var header = document.getElementById("h1form");
    var password = "12345678";
    if (data.get("password").match(password)) {
        header.textContent = "Victory is Yours!";
        return true;
    } else {
        alert('Wrong Password!');
        return false;
    }
}

function sphereVolume() {
    var radius = document.getElementById("radius").value;
    var volume = ((4 / 3) * Math.PI * Math.pow(radius, 3));
    var answer = document.getElementById("answer");
    answer.textContent = ("The volume of your wonderful sphere is: " + volume);

}