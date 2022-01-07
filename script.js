const word1 = document.getElementById("span1")
const word2 = document.getElementById("span2")

function button1(){
    word1.textContent = "I'm right"
    word2.textContent = ""
}
function button2(){
    word2.textContent = "No, I'm right"
    word1.textContent = ""
}

function q2Function(){
    alert("Hey, I told you not to hover over me!")
}

function q4Function(event){
    event.preventDefault()
    const formData = new FormData(document.querySelector('form'))
    const formHeader = document.getElementById("form-header")
    const password = formData.get("password")

    if(password != 12345678){
        alert("Your password is incorrect")
    }else{
        formHeader.textContent = "Success!"
    }
}