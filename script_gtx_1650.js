const produto_gtx_1650Oc = [
    {
        nome: 'Placa de Vídeo Asus Phoenix NVIDIA GeForce GTX 1650 OC Edition, 4GB, GDDR6 - PH-GTX1650-O4GD6',
        gtx_1650Oc1: 'gtx1650Oc1.png',
        gtx_1650Oc2: 'gtx1650Oc2.png',
        gtx_1650Oc3: 'gtx1650Oc3.png',
        gtx_1650Oc4: 'gtx1650Oc4.png',
        gtx_1650Oc5: 'gtx1650Oc5.png',
        gtx_1650Oc6: 'gtx1650Oc6.png',
        imggtx_1650Oc1: 'gtx1650Oc1.png',
        preco: 'À vista no PIX com até 15% OFF R$ 9.999,99 R$ 2.588,12 R$ 2.199,90 Em até 10x de R$ 258,81  sem juros no cartão Ou em 1x no cartão com até 10% OFF',
        detalhes: 'Placa de Vídeo Asus Phoenix NVIDIA GeForce GTX 1650 OC Edition, 4GB, GDDR6 Tenha um desempenho para seu trabalho e gameplay com a Placa de Vídeo Asus Phoenix NVIDIA GeForce GTX 1650 OC Edition é equipada com uma memória de 4GB GDDR6, Velocidade de Memória de 12 Gbps. e Boost Clock de 1635 MHz em OC e de 1605 MHz no modo Jogo. Projeto de Ventilador de Tecnologia Axial. Recém-projetados para a última geração de placas gráficas ROG de última geração,esses ventiladores apresentam um hub menor que facilita as lâminas mais longas e um anel de barreira para aumentar a pressão do ar para baixo. Turing Shaders. Apresentando execução simultânea de operações de ponto flutuante e inteiro, tecnologia de sombreamento adaptável e uma nova arquitetura de memória unificada com o dobro do cache de seu antecessor, os sombreadores NVIDIA Turing permitem incríveis aumentos de desempenho nos jogos atuais. Tecnologia NVIDIA G-SYNC . Esta placa gráfica suporta a tecnologia de exibição NVIDIA G-SYNC para uma experiência de taxa de atualização variável super suave. Desfrute de jogos AAA sem o incômodo de rasgos na tela ou gagueira. Aproveite essa oportunidade e adquira sua Placa de Vídeo GeForce GTX 1650 no KaBuM!'
    }]

let gtx_1650Oc = document.getElementById('gtx_1650')
gtx_1650Oc.addEventListener('click',gtx_1650Oc_com_objeto)

function gtx_1650Oc_com_objeto() {
    // titulo
    // document.getElementById('abreModalLabel').remove()
    let pd_gtx_1650Oc = document.createElement('h5');
    pd_gtx_1650Oc.setAttribute('class', "modal-title");
    pd_gtx_1650Oc.setAttribute('id', "abreModalLabel");
    pd_gtx_1650Oc.innerText = produto_gtx_1650Oc[0].nome;
    document.getElementById('modal-header').appendChild(pd_gtx_1650Oc);
// mini imagem 1
    let liImg1 = document.createElement('li');
    liImg1.setAttribute('class', "list-group-item");
    liImg1.setAttribute('id', "list-group-item1");
    document.getElementById('miniImgProd1').appendChild(liImg1)

    // document.getElementById('foto1').remove()
    let Img1 = document.createElement('img');
    Img1.setAttribute('class', "foto1");
    Img1.setAttribute('id', "foto1");
    Img1.src = produto_gtx_1650Oc[0].gtx_1650Oc1;
    document.getElementById('list-group-item1').appendChild(Img1);
// mini imagem 2
    let liImg2 = document.createElement('li');
    liImg2.setAttribute('class', "list-group-item");
    liImg2.setAttribute('id', "list-group-item2");
    document.getElementById('miniImgProd2').appendChild(liImg2)

    // document.getElementById('foto2').remove()
    let Img2 = document.createElement('img');
    Img2.setAttribute('class', "foto2");
    Img2.setAttribute('id', "foto2");
    Img2.src = produto_gtx_1650Oc[0].gtx_1650Oc2;
    document.getElementById('list-group-item2').appendChild(Img2);
// mini imagem 3
    let liImg3 = document.createElement('li');
    liImg3.setAttribute('class', "list-group-item");
    liImg3.setAttribute('id', "list-group-item3");
    document.getElementById('miniImgProd3').appendChild(liImg3)

    // document.getElementById('foto3').remove()
    let Img3 = document.createElement('img');
    Img3.setAttribute('class', "foto3");
    Img3.setAttribute('id', "foto3");
    Img3.src = produto_gtx_1650Oc[0].gtx_1650Oc3;
    document.getElementById('list-group-item3').appendChild(Img3);
    // mini imagem 4
    let liImg4 = document.createElement('li');
    liImg4.setAttribute('class', "list-group-item");
    liImg4.setAttribute('id', "list-group-item4");
    document.getElementById('miniImgProd4').appendChild(liImg4)

    // document.getElementById('foto4').remove()
    let Img4 = document.createElement('img');
    Img4.setAttribute('class', "foto4");
    Img4.setAttribute('id', "foto4");
    Img4.src = produto_gtx_1650Oc[0].gtx_1650Oc4;
    document.getElementById('list-group-item4').appendChild(Img4);
    // mini imagem 5
    let liImg5 = document.createElement('li');
    liImg5.setAttribute('class', "list-group-item");
    liImg5.setAttribute('id', "list-group-item5");
    document.getElementById('miniImgProd5').appendChild(liImg5)

    // document.getElementById('foto5').remove()
    let Img5 = document.createElement('img');
    Img5.setAttribute('class', "foto5");
    Img5.setAttribute('id', "foto5");
    Img5.src = produto_gtx_1650Oc[0].gtx_1650Oc5;
    document.getElementById('list-group-item5').appendChild(Img5);
    // mini imagem 6
    let liImg6 = document.createElement('li');
    liImg6.setAttribute('class', "list-group-item");
    liImg6.setAttribute('id', "list-group-item6");
    document.getElementById('miniImgProd6').appendChild(liImg6)

    // document.getElementById('foto6').remove()
    let Img6 = document.createElement('img');
    Img6.setAttribute('class', "foto6");
    Img6.setAttribute('id', "foto6");
    Img6.src = produto_gtx_1650Oc[0].gtx_1650Oc6;
    document.getElementById('list-group-item6').appendChild(Img6);
    // imagem grande
    // document.getElementById('card-img-top').remove()
    let imgLarge = document.createElement('img');
    imgLarge.setAttribute('class', "card-img-top");
    imgLarge.setAttribute('id', "card-img-top");
    imgLarge.src = produto_gtx_1650Oc[0].imggtx_1650Oc1;
    document.getElementById('imgGrande').appendChild(imgLarge);
    // preço
    let preço_rxt_3080 = document.createElement('p');
    preço_rxt_3080.setAttribute('class','preco-rxt-3080')
    preço_rxt_3080.innerText = produto_gtx_1650Oc[0].preco;
    document.getElementById('preco_prod').appendChild(preço_rxt_3080);
    // descrição rxt 3080
    let detal_rxt_3080 = document.createElement('p');
    detal_rxt_3080.setAttribute('class','descricao_produto')
    detal_rxt_3080.innerText = produto_gtx_1650Oc[0].detalhes;
    document.getElementById('txtDetalhes').appendChild(detal_rxt_3080);
}



document.querySelector('#miniImgProd1').addEventListener('click',function(){
    document.querySelector('#card-img-top').setAttribute("src",'gtx1650Oc1.png')
})
document.querySelector('#miniImgProd2').addEventListener('click',function(){
    document.querySelector('#card-img-top').setAttribute('src','gtx1650Oc2.png')
})
document.getElementById('miniImgProd3').addEventListener('click',function(){
    document.getElementById('card-img-top').setAttribute('src','gtx1650Oc3.png')
})
document.getElementById('miniImgProd4').addEventListener('click',function(){
    document.getElementById('card-img-top').setAttribute('src','gtx1650Oc4.png')
})
document.getElementById('miniImgProd5').addEventListener('click',function(){
    document.getElementById('card-img-top').setAttribute('src','gtx1650Oc5.png')
})
document.getElementById('miniImgProd6').addEventListener('click',function(){
    document.getElementById('card-img-top').setAttribute('src','gtx1650Oc6.png')
})