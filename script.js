function copyLink(link) {
  navigator.clipboard.writeText(link).then(() => {
    alert("✅ Referral Link Copied!");
  });
}

const search = document.getElementById("search");

if (search) {
  search.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const title = card.querySelector("h2").innerText.toLowerCase();

      if (title.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}
