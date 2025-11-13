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

// === Scroll suave ao clicar no logo ===
const logoLink = document.querySelector(".logo-link");
if (logoLink) {
  logoLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#planos")?.scrollIntoView({ behavior: "smooth" });
  });
}

// === BOTÃO DO BALTAZAR (abre o WhatsApp) ===
function abrirWhats() {
  const numero = "5531986773819";
  const mensagem = encodeURIComponent(
    "Oi! Sou o Baltazar 💛 Quero saber mais sobre site e Google Business Profile."
  );
  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}

// === PLANOS INTERATIVOS ===
document.querySelectorAll("#planos .card").forEach((card) => {
  // Clique abre o WhatsApp
  card.addEventListener("click", () => {
    const nomePlano = card.querySelector("h3")?.innerText || "plano";
    const msg = encodeURIComponent(
      `Oi! Quero saber mais sobre o ${nomePlano} da Amarelo Limão 🍋`
    );
    window.open(`https://wa.me/5531986773819?text=${msg}`, "_blank");
  });

  // Brilho no hover
  card.addEventListener("mouseenter", () => {
    card.style.transition = "all 0.3s ease";
    card.style.boxShadow = "0 0 25px rgba(180,228,8,0.35)";
    card.style.borderColor = "rgba(180,228,8,0.35)";
    card.style.transform = "translateY(-4px)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 0 10px rgba(0,0,0,.4)";
    card.style.borderColor = "rgba(255,255,255,.08)";
    card.style.transform = "translateY(0)";
  });
});
// === BOTÃO DO BALTAZAR (abre o WhatsApp) ===
function abrirWhats() {
  const numero = "5531986773819";
  const mensagem = encodeURIComponent("Oi! Sou o Baltazar 💛 Quero saber mais sobre site e Google Business Profile.");
  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}
// === BALTZAR ABRE WHATSAPP ===
const balta = document.querySelector('.baltazar');
if (balta) {
  balta.addEventListener('click', () => {
    const numero = '5531986773819';
    const mensagem = encodeURIComponent(
      'Oi! Vim pelo Baltazar 💚 Quero saber mais sobre sites e presença no Google!'
    );
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
  });
}
// === BALTZAR ABRE WHATSAPP ===
document.addEventListener("DOMContentLoaded", function () {
  const balta = document.getElementById("baltazar");

  if (balta) {
    balta.style.cursor = "pointer"; // mostra a “mãozinha”
    balta.addEventListener("click", function () {
      const numero = "5531986773819";
      const mensagem = encodeURIComponent(
        "Oi! Vim pelo Baltazar 💚 Quero saber mais sobre sites e presença digital!"
      );
      const url = `https://wa.me/${numero}?text=${mensagem}`;
      window.open(url, "_blank");
    });
  } else {
    console.warn("⚠️ Baltazar não encontrado no DOM.");
  }
});
