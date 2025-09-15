document.addEventListener("DOMContentLoaded", function() {
  const el = document.querySelector('.blur-text');
  if (el) {
    setTimeout(() => {
      el.classList.add('visible');
      console.log('Animation completed!');
    }, 150);
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const text = "Bienvenue sur mon Portefolio, Je suis Dembele Issa, Développeur Web";
  const typedText = document.getElementById("typed-text");
  const cursor = document.getElementById("typed-cursor");
  let i = 0;

  function type() {
    if (i < text.length) {
      typedText.textContent += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
});

document.querySelectorAll('.bts-sio-tab').forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');

    // Onglets
    document.querySelectorAll('.bts-sio-tab').forEach(tab => tab.classList.remove('active'));
    button.classList.add('active');

    // Contenus
    document.querySelectorAll('.bts-sio-tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
  });
});


