let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Validation du formulaire d'authentification
document.querySelector('.auth-form form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Tableau des utilisateurs autorisés
    const validUsers = [
        { name: "AMADOU Yazid", password: "20001G" },
        { name: "SAKA Matinou", password: "20002G" },
        { name: "FATOMBI Olivier", password: "20003G" },
        { name: "OGBANKOTAN Placide", password: "20004G" },
    ];

    // Vérifier si les informations sont valides
    const user = validUsers.find(user => user.name === username && user.password === password);

    if (user) {
        alert("Connexion réussie !");
        // Stocker le nom de l'utilisateur dans le localStorage
        localStorage.setItem('userFirstName', user.name.split(' ')[0]);
        localStorage.setItem('userLastName', user.name.split(' ')[1]);
    
        // Rediriger vers la page du tableau de bord
        window.location.href = "user_dashboard.html";
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect.");
    }
});
