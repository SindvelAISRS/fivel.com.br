// Função para carregar componentes HTML via fetch com callback
function loadComponent(selector, file, callback) {
  fetch(`components/${file}`)
    .then(response => response.text())
    .then(data => {
      console.log("Conteúdo carregado de " + file + ":", data); // Verifique o conteúdo aqui
      document.querySelector(selector).innerHTML = data;
      if (typeof callback === 'function') {
        callback(); // Executa o callback após inserir o componente
      }
    })
    .catch(error => console.error('Erro ao carregar componente:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  // Carrega o header e, em seguida, inicializa o menu mobile
  loadComponent('#header', 'header.html', () => {
    initMobileMenu();
  });
  loadComponent('#hero', 'hero.html');
  loadComponent('#footer', 'footer.html');
});

// Função que inicializa o menu mobile
function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-btn');
  const menuIcon = document.getElementById('menu-icon');

  if (menuBtn && mobileMenu && closeBtn) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('opacity-100');
      if (isOpen) {
        mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
        mobileMenu.classList.add('opacity-0', 'invisible', 'translate-y-full');
      } else {
        mobileMenu.classList.remove('opacity-0', 'invisible', 'translate-y-full');
        mobileMenu.classList.add('opacity-100', 'visible', 'translate-y-0');
      }
    });
 
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
      mobileMenu.classList.add('opacity-0', 'invisible', 'translate-y-full');
    });
  }
}
