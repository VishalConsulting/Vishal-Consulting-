function copyLink(link) {
  navigator.clipboard.writeText(link);
  alert("✅ Referral Link Copied!");
}

const search = document.getElementById("search");

if (search) {
  search.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
      const text = card.innerText.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

const openButtons = document.querySelectorAll(".open");

openButtons.forEach(function(button){
  button.addEventListener("click", function(){
    alert("🔗 Affiliate Link will be added after Partner Approval.");
  });
});
