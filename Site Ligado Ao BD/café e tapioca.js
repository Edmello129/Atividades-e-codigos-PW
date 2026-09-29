
const btnTema = document.getElementById('btn-tema');
const descricaoTema = document.getElementById('descricao-tema');
const body = document.body;


btnTema.addEventListener('click', () => {
    
    body.classList.toggle('tema-cafe');

    if (body.classList.contains('tema-cafe')) {
        btnTema.textContent = 'Mudar para Modo Tapioca 🥞';
        if (descricaoTema) {
            descricaoTema.textContent = 'O ambiente escureceu, perfeito para focar no aroma do Café.';
        }
    } else {
        btnTema.textContent = 'Mudar para Modo Café ☕';
        if (descricaoTema) {
            descricaoTema.textContent = 'Ambiente claro e leve, ideal para apreciar nossas Tapiocas.';
        }
    }
});


const supabaseUrl = "https://quiztyshowiwxhecrclw.supabase.co"; 
const supabaseKey = "sb_publishable_Le4GorG7P-t28W05nbZ-8w_1pc4IK7T";


const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);


async function carregarCardapio() {
    r
    const gradeCartoes = document.querySelector('.grade-cartoes');
    

    if (!gradeCartoes) return; 

    
    const { data: produtos, error } = await supabase
        .from('produtos')
        .select('*');

    if (error) {
        console.error("Erro ao buscar os produtos:", error);
        return;
    }

  L
    gradeCartoes.innerHTML = ''; 

 
    produtos.forEach(produto => {
        const cartaoHTML = `
            <a href="${produto.link_pagina}" class="link-cartao">
                <div class="cartao">
                    <h3>${produto.nome}</h3>
                    <img src="${produto.imagem_url}" alt="Imagem de ${produto.nome}" class="imagem-cartao">
                    <p>${produto.descricao}</p>
                    <span class="veja-mais">Ver detalhes ➔</span>
                </div>
            </a>
        `;
      
        gradeCartoes.innerHTML += cartaoHTML;
    });
}


carregarCardapio();