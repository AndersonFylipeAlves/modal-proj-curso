const produto_gtx_1050ti = [
    {
        nome: 'Placa de Vídeo Galax NVIDIA GeForce GTX 1050 Ti 1-Click OC, 4GB, DDR5, Dual Fan, Preto - 50IQH8DSQ3CC',
        gtx1050ti1: 'gtx1050ti1.png',
        gtx1050ti2: 'gtx1050ti2.png',
        gtx1050ti3: 'gtx1050ti3.png',
        gtx1050ti4: 'gtx1050ti4.png',
        gtx1050ti5: 'gtx1050ti5.png',
        gtx1050ti6: 'gtx1050ti6.png',
        imggtx1050ti1: 'gtx1050ti1.png',
        preco: 'À vista no PIX com até 15% OFF R$ 9.999,99 R$ 1.882,24 R$ 1.599,90 Em até 10x de R$ 188,22  sem juros no cartão Ou em 1x no cartão com até 10% OFF',
        detalhes: 'Placa de Vídeo Galax NVIDIA GeForce GTX 1050 Ti 1-Click OC, 4GB, DDR5, Dual Fan, Preto Tenha um desenhempenho com ótimo custo benefício, a Placa de Vídeo Galax NVIDIA GeForce GTX 1050 Ti 1-Click OC é equipada com uma memória de 4GB DDR5, com clock de 3504MHz, a velocidade para aumentar os gráficos na sua gameplay. Microsoft DirectX 12 (DX12) Tenha gráficos imersivos com máximo desempenho Com o Microsoft DirectX 12 (DX12), você consegue ter um desempenho incrivelmente rápido, mais frames por segundo e latência reduzida em todas as placas de vídeo AMD Radeon. Arquitetura NVIDIA Pascal. A revolucionária arquitetura Pascal da NVIDIA foi desenvolvida especificamente para o mecanismo de computadores que aprendem, veem e simulam nosso mundo — um mundo com um apetite infinito por computação. Do computador ao software, a arquitetura Pascal é elaborada com inovação em todos os níveis. Compacta e de Alta Compatibilidade A Galax NVIDIA GeForce GTX 1050 possui projeto de design compacto e simples. A placa ainda conta com DisplayPort 1.4, HDMI 2.0b, DVI-D. Aproveite essa oportunidade e adquira sua Placa de Vídeo GTX 1050 no KaBuM!'
    }]

let gtx_1050ti = document.getElementById('gtx_1050ti')
gtx_1050ti.addEventListener('click',gtx_1050ti_com_objeto)

function gtx_1050ti_com_objeto() {
    // titulo
    let pd_gtx_1050ti = document.createElement('h5');
    pd_gtx_1050ti.setAttribute('class', "modal-title");
    pd_gtx_1050ti.setAttribute('id', "abreModalLabel");
    pd_gtx_1050ti.innerText = produto_gtx_1050ti[0].nome;
    document.getElementById('modal-header').appendChild(pd_gtx_1050ti);
// mini imagem 1
    let liImg1 = document.createElement('li');
    liImg1.setAttribute('class', "list-group-item");
    liImg1.setAttribute('id', "list-group-item1");
    document.getElementById('miniImgProd1').appendChild(liImg1)

    let Img1 = document.createElement('img');
    Img1.setAttribute('class', "foto1");
    Img1.setAttribute('id', "foto1");
    Img1.src = produto_gtx_1050ti[0].gtx1050ti1;
    document.getElementById('list-group-item1').appendChild(Img1);
// mini imagem 2
    let liImg2 = document.createElement('li');
    liImg2.setAttribute('class', "list-group-item");
    liImg2.setAttribute('id', "list-group-item2");
    document.getElementById('miniImgProd2').appendChild(liImg2)

    let Img2 = document.createElement('img');
    Img2.setAttribute('class', "foto2");
    Img2.setAttribute('id', "foto2");
    Img2.src = produto_gtx_1050ti[0].gtx1050ti2;
    document.getElementById('list-group-item2').appendChild(Img2);
// mini imagem 3
    let liImg3 = document.createElement('li');
    liImg3.setAttribute('class', "list-group-item");
    liImg3.setAttribute('id', "list-group-item3");
    document.getElementById('miniImgProd3').appendChild(liImg3)

    let Img3 = document.createElement('img');
    Img3.setAttribute('class', "foto3");
    Img3.setAttribute('id', "foto3");
    Img3.src = produto_gtx_1050ti[0].gtx1050ti3;
    document.getElementById('list-group-item3').appendChild(Img3);
    // mini imagem 4
    let liImg4 = document.createElement('li');
    liImg4.setAttribute('class', "list-group-item");
    liImg4.setAttribute('id', "list-group-item4");
    document.getElementById('miniImgProd4').appendChild(liImg4)

    let Img4 = document.createElement('img');
    Img4.setAttribute('class', "foto4");
    Img4.setAttribute('id', "foto4");
    Img4.src = produto_gtx_1050ti[0].gtx1050ti4;
    document.getElementById('list-group-item4').appendChild(Img4);
    // mini imagem 5
    let liImg5 = document.createElement('li');
    liImg5.setAttribute('class', "list-group-item");
    liImg5.setAttribute('id', "list-group-item5");
    document.getElementById('miniImgProd5').appendChild(liImg5)

    let Img5 = document.createElement('img');
    Img5.setAttribute('class', "foto5");
    Img5.setAttribute('id', "foto5");
    Img5.src = produto_gtx_1050ti[0].gtx1050ti5;
    document.getElementById('list-group-item5').appendChild(Img5);
    // mini imagem 6
    let liImg6 = document.createElement('li');
    liImg6.setAttribute('class', "list-group-item");
    liImg6.setAttribute('id', "list-group-item6");
    document.getElementById('miniImgProd6').appendChild(liImg6)

    let Img6 = document.createElement('img');
    Img6.setAttribute('class', "foto6");
    Img6.setAttribute('id', "foto6");
    Img6.src = produto_gtx_1050ti[0].gtx1050ti6;
    document.getElementById('list-group-item6').appendChild(Img6);
    // imagem grande
    let imgLarge = document.createElement('img');
    imgLarge.setAttribute('class', "card-img-top");
    imgLarge.setAttribute('id', "card-img-top");
    imgLarge.src = produto_gtx_1050ti[0].imggtx1050ti1;
    document.getElementById('imgGrande').appendChild(imgLarge);
    // preço
    let preço_rxt_3080 = document.createElement('p');
    preço_rxt_3080.setAttribute('class','preco-rxt-3080')
    preço_rxt_3080.innerText = produto_gtx_1050ti[0].preco;
    document.getElementById('preco_prod').appendChild(preço_rxt_3080);
    // descrição rxt 3080
    let detal_rxt_3080 = document.createElement('p');
    detal_rxt_3080.setAttribute('class','descricao_produto')
    detal_rxt_3080.innerText = produto_gtx_1050ti[0].detalhes;
    document.getElementById('txtDetalhes').appendChild(detal_rxt_3080);
}



document.querySelector('#miniImgProd1').addEventListener('click',function(){
    document.querySelector('#card-img-top').setAttribute("src",'gtx1050ti1.png')
})
document.querySelector('#miniImgProd2').addEventListener('click',function(){
    document.querySelector('#card-img-top').setAttribute('src','gtx1050ti2.png')
})
document.getElementById('miniImgProd3').addEventListener('click',function(){
    document.getElementById('card-img-top').setAttribute('src','gtx1050ti3.png')
})
document.getElementById('miniImgProd4').addEventListener('click',function(){
    document.getElementById('card-img-top').setAttribute('src','gtx1050ti4.png')
})
document.getElementById('miniImgProd5').addEventListener('click',function(){
    document.getElementById('card-img-top').setAttribute('src','gtx1050ti5.png')
})
document.getElementById('miniImgProd6').addEventListener('click',function(){
    document.getElementById('card-img-top').setAttribute('src','gtx1050ti6.png')
})