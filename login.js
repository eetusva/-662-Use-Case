
const käyttäjätunnus = "admin";
const salasana = "admin123";

// Sisäänkirjautuminen
document.getElementById("loginForm").addEventListener("submit", login);

function login(event) {
    event.preventDefault();
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    if(userName === käyttäjätunnus && password === salasana) {
        window.location.href = "adminPage.html";
    } else {
        alert("Annettu käyttäjätunnus tai salasana on virheellinen!")
    }
} 
