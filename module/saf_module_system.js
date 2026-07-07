<script>
function animateCard(el) {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";

  setTimeout(() => {
    el.style.transition = "0.6s ease";
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  }, 100);
}
</script>
========================================
<script>
function typeText(el, text, speed = 80) {
  let i = 0;
  el.innerHTML = "";

  function typing() {
    if (i < text.length) {
      el.innerHTML += text[i];
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}
</script>
========================================

 <script>
function scramble(el, finalText) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  let iterations = 0;

  const interval = setInterval(() => {
    el.innerText = finalText
      .split("")
      .map((_, i) => {
        if (i < iterations) return finalText[i];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    if (iterations >= finalText.length) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
  }, 30);
}
</script> 
