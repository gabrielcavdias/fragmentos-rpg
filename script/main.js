let personagens = [
    arannyr = {
        nome: "Arannyr da Silva",
        atributos: [10,12,12,20,15,10],//for,des,con,int,sab,car
        pv: 23,
        pm: 20, 
        fort: 12,
        ref: 13,
        von: 12,
        nm_armadura: 'Armadura Completa',
        vl_armadura: 10,
        nm_escudo: 'Escudo Pesado',
        vl_escudo: 3,
        armas : [
            florete ={
                nm_arma: 'Florete',
                bonus: 1, 
                max_dano: [6], 
                critico: 20,
                dano_extra: 0,
                dado_extra: [0], 
                mult_critico: 3 
            },
            espada_longa = {
                nm_arma: 'Espada Longa',
                bonus: 1, 
                max_dano: [6], 
                critico: 20,
                dano_extra: 0,
                dado_extra: [0],
                mult_critico: 3
            },
            arco_curto={
                nm_arma: 'Arco curto',
                bonus: 1, 
                max_dano: [6], 
                critico: 20,
                dano_extra: 0,
                mult_critico: 3
            }
        ],
        descricao : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit at obcaecati et magnam! Autem omnis sapiente, in fuga amet harum nam repellat quas iure dicta consequatur, similique blanditiis, distinctio aspernatur?'
    }
]
console.log("GOD PLIS")
//let personagens = document.querySelectorAll('li img')   
//personagens.forEach(personagem => personagem.addEventListener("click", () => ativar(personagem)))

function ativar(char){
    personagens.forEach(personagem => personagem.parentElement.classList.remove("ativo"))
    //console.log(char.attributes[1].value)
    char.parentElement.classList.add('ativo')
    let nomepersonagem = document.querySelector('.conteudo-personagem h3')
    let imgpersonagem = document.querySelector('.conteudo-personagem img')
    let txtpersonagem = document.querySelector('.conteudo-personagem p')
    nomepersonagem.innerText = char.attributes[1].value
    imgpersonagem.attributes[0].value = `imgs/${char.attributes[1].value}.png`.toLowerCase()
}
