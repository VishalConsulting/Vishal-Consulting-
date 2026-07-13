const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(value) ? "block" : "none";
    });
  });
}
const toggle=document.getElementById("themeToggle");

if(toggle){
toggle.onclick=()=>{
document.body.classList.toggle("light-mode");
}
}
