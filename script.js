function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("notif").innerText = "Pesan berhasil dikirim!";
    document.getElementById("notif").style.color = "green";
});