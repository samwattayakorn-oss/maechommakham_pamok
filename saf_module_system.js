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

  
