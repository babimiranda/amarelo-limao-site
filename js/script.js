// Tudo roda depois que o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  // === Atualiza o ano no rodapé ===
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // === Formulário de contato -> leva pro WhatsApp ===
  const form = document.getElementById("lead-form");
  const statusEl = document.getElementById("status");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());

      const leads = JSON.parse(localStorage.getItem("amarelo-leads") || "[]");
      leads.push({ ...data, ts: new Date().toISOString() });
      localStorage.setItem("amarelo-leads", JSON.stringify(leads));

      const mensagem = encodeURIComponent(
        `Oi! Sou ${data.nome}. Negócio: ${data.negocio}. Meu Whats: ${data.whats}. Quero site + GMB.`
      );
      window.open(`https://wa.me/5531986773819?text=${mensagem}`, "_blank");

      if (statusEl)
        statusEl.textContent = "Recebi! Te respondo com a proposta em poucas horas.";
      form.reset();
    });
  }

  // === Scroll suave ao clicar no logo (vai pra planos) ===
  const logoLink = document.querySelector(".logo-link");
  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#planos")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  // === PLANOS INTERATIVOS (cards abrem Whats) ===
  document.querySelectorAll("#planos .card").forEach((card) => {
    card.addEventListener("click", (e) => {
      // Se clicar no botão interno, não precisa duplicar o comportamento
      if (e.target.closest("a")) return;

      const nomePlano = card.querySelector("h3")?.innerText || "plano";
      const msg = encodeURIComponent(
        `Oi! Quero saber mais sobre o ${nomePlano} da Amarelo Limão 🍋`
      );
      window.open(`https://wa.me/5531986773819?text=${msg}`, "_blank");
    });
  });

  // === BALTZAR ABRE WHATSAPP ===
  const balta = document.getElementById("baltazar") || document.querySelector(".baltazar");

  if (balta) {
    balta.style.cursor = "pointer";
    balta.addEventListener("click", (e) => {
      // se clicar no link já nativo, deixa rolar normal
      if (balta.tagName.toLowerCase() === "a") return;

      const numero = "5531986773819";
      const mensagem = encodeURIComponent(
        "Oi! Vim pelo Baltazar 💚 Quero saber mais sobre sites e presença no Google!"
      );
      const url = `https://wa.me/${numero}?text=${mensagem}`;
      window.open(url, "_blank");
    });
  } else {
    console.warn("⚠️ Baltazar não encontrado no DOM.");
  }

  // === MENU MOBILE (hambúrguer) ===
  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("is-open");
      mobileMenu.classList.toggle("is-open");
      document.body.classList.toggle("menu-aberto");
    });

    // Fecha o menu quando clicar em um link
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.classList.remove("is-open");
        mobileMenu.classList.remove("is-open");
        document.body.classList.remove("menu-aberto");
      });
    });
  }
});
