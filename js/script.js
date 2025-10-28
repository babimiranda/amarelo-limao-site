document.getElementById('year').textContent = new Date().getFullYear();

    const form = document.getElementById('lead-form');
    const statusEl = document.getElementById('status');
    if(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        const leads = JSON.parse(localStorage.getItem('amarelo-leads') || '[]');
        leads.push({ ...data, ts: new Date().toISOString() });
        localStorage.setItem('amarelo-leads', JSON.stringify(leads));
        const mensagem = encodeURIComponent(`Oi! Sou ${data.nome}. Negócio: ${data.negocio}. Meu Whats: ${data.whats}. Quero site + GMB.`);
        const numero = '5531986773819';
        window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
        if(statusEl) statusEl.textContent = 'Recebi! Te respondo com a proposta em poucas horas.';
        form.reset();
      });
    }