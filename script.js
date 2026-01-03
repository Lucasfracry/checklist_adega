const bancoDeDados = {
    "Cervejas": [
        "Heineken 350ml", "Heineken 269ml", "Budweiser 269ml", "Stella 269ml", "Original 269ml", 
        "Spaten 269ml", "Imperio 269ml", "Spaten 350ml", "Skol 350ml", "Skol 269ml", 
        "Brahama Duplo 350ml", "Amstel 269ml", "Heineken long Neck", "Spaten Long Neck", 
        "Corona Long Neck", "Stella Long Neck", "Becks Long Neck", "Stella S/Gluten Long neck", 
        "Budweiser Long Neck", "Heineken Zero Long Neck", "Eisenbahn Long Neck", 
        "Heineken 600ml", "Stella 600ml", "Budweiser 600ml", "Spaten 600ml", 
        "Corona 600ml", "Imperio 600ml", "Brahma Duplo 600ml"
    ],
    "Bebidas Mistas": [
        "Skol Beats Senses", "Skol Beats GT", "Skol Beats Vermelha", "Smirnoff Ice", "Draft", "Corote Limão", "Corote Puro"
    ],
    "Gelos": [
        "Saco de Gelo", "Gelo de Coco", "Gelo de Maracujá", "Gelo de Melancia"
    ],
    "Utensilios": [
        "Copo 700ml", "Copo Americano"
    ],
    "Energeticos": [
        "Red Bull Tradicional", "Red bull Tropical", "Red bull Melancia", "Red Bull Zero", 
        "Monster Mango Loko", "Monster Tradicional", "Monster Zero", "Vibe 2 Lts", 
        "Bally Melancia 2lt", "Bally Tropical 2lt"
    ],
    "Refrigerantes": [
        "Coca lata", "Coca 2 litros", "Coca zero Lata", "Coca zero 2 lts", "Guarana lata", 
        "Guarana 2 Lts", "Sprite lata", "Sprite 2 Lts", "Fanta laranja lata", 
        "Fanta Laranja 2 lts", "Tonica Lata", "Guaraviton", "Gatorade", "H20 Limoneto", 
        "h20 tradicional", "Suco lata", "Suco 1Lt", "Agua Pequena", "Agua 1,5 Lts"
    ],
    "Whisky": [
        "White Horse", "Jack Daniels", "Jack Daniels Honey", "Jack Daniels Apple", 
        "Jack Daniels Fire", "Ballantines", "Old Parr", "Chivas 12 Anos", 
        "Buchannas", "Black Label", "Red Label", "Gold Label"
    ],
    "Vodka": [
        "Smirnoff 1lt", "Ciroc Tradicional", "Ciroc Vermelha", "Absolut 1lt", 
        "Askov", "Askov Vermelha", "Askov Limão", "Askov Maracuja", "Askov Frutas Roxas"
    ],
    "Gin": [
        "Tanqueray", "Beefeater", "Gordons", "Rocks", "Eternity"
    ],
    "Cachacas": [
        "Velho Barreiro", "51", "Pitu", "Pitu Lata", "São Francisco", "Ipioca Ouro", 
        "Seleta", "Boazinha", "Salinas"
    ],
    "Tabacaria": [
        "Hash", "Sasso", "Amsterdan", "Hi Tobacco", "Acrema", "Rainbown", "Smoking Grande Preta", 
        "Smoking Grande Prata", "Smoking Grande Brown", "Smoking Pequena Brown", "Smoking Pequena Prata", "Smoking Pequena Preta", 
        "Piteira Yellown Finger Roxa", "Piteira Yellow Finger Amarela", "Filtro Longo Slim", "Filtro Slim Curto", "Cuia", "Dichavador de madeira", "Charuto Titan", 
        "Charuto Titan Chocolate", "Bic Grande", "Bic Pequeno", "Tabaco Bolado", "Santropez Tradicional", "Santropez Menta", "Paulistinha Tradicional", 
        "Paulistinha Menta", "Gudang Garan", "Gudang Garan Menta"
    ],

    "Essencias": [
        "Ziggy Uva", "Ziggy Menta", "Ziggy Tropical", "Ziggy Chiclete", "Ziggy 7 Belo", "Ziggy Banana", "Ziggy Frutas Roxas", "Ziggy Frutas Amarelas",
        "Ziggy Limão", "Ziggy Yogurt", "Ziggy Cereja", "Ziggy Duas Maçãs", "Ziggy Duas Goiabas", "Ziggy Maracujá", "Ziggy Melancia", "Carvão 500g", "Carvão 250g", 
        "Carvão 1 Kg", "Pct Aluminio c/25 folhas", "Pct Aluminio c/50 folhas", "Zomo Mint", "Zomo Miami Nights", "Zomo Uva", "Zomo Limão", "Nay Cereja", "Nay Melão", 
        "Nay Chiclete", "Nay Uva", "Nay Maracujá", "Nay 66", "Onix Danone", "Onix Menta", "Onix Banana com Açai", "Onix Pera"
    ],
    
    "Vinhos": ["Itens de Vdddddqui..."],
    "Comidas": ["Suco Mid", "Outros itens..."]
};

function abrirLista(categoria) {
    document.getElementById('tela-categorias').style.display = 'none';
    document.getElementById('tela-lista').style.display = 'block';
    document.getElementById('titulo-categoria').innerText = categoria;

    const listaUl = document.getElementById('lista-itens');
    listaUl.innerHTML = ""; // Limpa a lista anterior

    const itens = bancoDeDados[categoria] || [];
    itens.forEach(item => {
        listaUl.innerHTML += `<li><label><input type="checkbox" value="${item}"> ${item}</label></li>`;
    });
}

function voltar() {
    document.getElementById('tela-categorias').style.display = 'block';
    document.getElementById('tela-lista').style.display = 'none';
}

function enviarWhatsApp() {
    const marcados = document.querySelectorAll('input[type="checkbox"]:checked');
    if (marcados.length === 0) { alert("Marque o que falta!"); return; }

    let texto = `🚨 *FALTANDO: ${document.getElementById('titulo-categoria').innerText}*%0A`;
    marcados.forEach(item => { texto += `• ${item.value}%0A`; });

    window.open(`https://wa.me/?text=${texto}`, '_blank');
}
