function enviarWhatsApp() {
    // Seleciona todos os checkboxes que estão marcados
    const itensMarcados = document.querySelectorAll('input[type="checkbox"]:checked');
    
    // Verifica se algum item foi selecionado
    if (itensMarcados.length === 0) {
        alert("Ops! Selecione os itens que estão faltando primeiro.");
        return;
    }

    // Monta o cabeçalho da mensagem
    let mensagem = "🛒 *CHECKUP DE COMPRAS* %0A";
    mensagem += "Estes itens estão faltando em casa:%0A%0A";
    
    // Varre os itens marcados e adiciona na mensagem
    itensMarcados.forEach((item) => {
        mensagem += `✅ ${item.value}%0A`;
    });

    // Número configurado: 55 (Brasil) + 11 (DDD) + 977477557
    const numeroTelefone = "5511977477557"; 
    
    // Cria o link final para o WhatsApp
    const link = `https://wa.me/${numeroTelefone}?text=${mensagem}`;

    // Abre o WhatsApp (aplicativo ou versão web)
    window.open(link, '_blank');
}