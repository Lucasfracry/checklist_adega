function enviarWhatsApp() {
    const marcados = document.querySelectorAll('input[type="checkbox"]:checked');
    
    if (marcados.length === 0) {
        alert("Selecione os itens que estão faltando primeiro!");
        return;
    }

    let texto = "🚨 *FALTANDO NO ESTOQUE* 🚨%0A%0A";
    
    marcados.forEach((item) => {
        texto += `✅ ${item.value}%0A`;
    });

    const url = `https://wa.me/?text=${texto}`;
    window.open(url, '_blank');
}