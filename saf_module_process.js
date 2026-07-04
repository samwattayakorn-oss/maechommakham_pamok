<script>
function renderProducts() {
  const container = document.getElementById("productContainer");

  productData.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
    `;

    container.appendChild(card);

    animateCard(card);
  });
}
</script>
