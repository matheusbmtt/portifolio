document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-tema');
  const body = document.body;

  // Alternar tema
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });

  const projetos = [
    {
      nome: "Cinemattos",
      link: "projetos/Projeto1/index.html",
      imagem: "imagens/projeto1.jpg"
    },
    {
      nome: "JB Site",
      link: "projetos/projeto2/index.html",
      imagem: "imagens/projeto2.jpg"
    },
    {
      nome: "Casa do Terror",
      link: "projetos/projeto3/index.html",
      imagem: "imagens/projeto3.jpg"
    }
  ];

  const containerProjetos = document.getElementById('lista-projetos');
  containerProjetos.innerHTML = ''; // limpa antes

  projetos.forEach(p => {
    const card = document.createElement('div');
    card.classList.add('projeto');

    card.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}" class="foto-projeto" />
      <h3><a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.nome}</a></h3>
      <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="btn-ver-projeto">Ver projeto</a>
    `;

    containerProjetos.appendChild(card);
  });

  // Formulário e validação (mantém igual ao seu código original)
  const form = document.getElementById('form-contato');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome) {
      alert('Por favor, preencha seu nome.');
      form.nome.focus();
      return;
    }

    if (!email || !validateEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
      form.email.focus();
      return;
    }

    if (!mensagem) {
      alert('Por favor, escreva sua mensagem.');
      form.mensagem.focus();
      return;
    }

    alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});
