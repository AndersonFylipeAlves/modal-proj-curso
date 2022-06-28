//Botão do menu
$(function () {
    $('.main_header_content_menu_mobile_obj').on('click', function () {
        $('.main_header_content_menu_mobile_sub').toggleClass('ds_none');
        $(this).toggleClass('main_header_content_menu_mobile_obj_active');
    });
});


// window.addEventListener("load", inicia);

// botão mudar background 

let solzinho = document.getElementById('solzinho')

solzinho.addEventListener('mouseenter', entrarsol)
solzinho.addEventListener('mouseout', sairsol)
solzinho.addEventListener('click', chargeBackground)

function entrarsol() {
    if (document.getElementById('solzinho').className === 'bgDark') {
        document.getElementById('solzinho').classList.remove('bgDark');
        document.getElementById('solzinho').classList.add('bgLight');
    } else {
        document.getElementById('solzinho').classList.remove('bgLight');
        document.getElementById('solzinho').classList.add('bgDark');
    }
}
function sairsol() {
    if (document.getElementById('solzinho').className === 'bgDark') {
        document.getElementById('solzinho').classList.remove('bgDark');
        document.getElementById('solzinho').classList.add('bgLight');
    } else {
        document.getElementById('solzinho').classList.remove('bgLight');
        document.getElementById('solzinho').classList.add('bgDark');
    }
}
function chargeBackground() {
    if (document.body.className === 'bgDark') {
        document.getElementById('body1').classList.remove('bgDark');
        document.getElementById('body1').classList.add('bgLight');
    } else {
        document.getElementById('body1').classList.remove('bgLight');
        document.getElementById('body1').classList.add('bgDark');
    }
    if (document.getElementById('solzinho').className === 'bgLight') {
        document.getElementById('solzinho').classList.remove('bgLight');
        document.getElementById('solzinho').classList.add('bgDark');
    } else {
        document.getElementById('solzinho').classList.remove('bgDark');
        document.getElementById('solzinho').classList.add('bgLight');
    }
    if (document.getElementById('carrinho').className === 'bgLight') {
        document.getElementById('carrinho').classList.remove('bgLight');
        document.getElementById('carrinho').classList.add('bgDark');
    } else {
        document.getElementById('carrinho').classList.remove('bgDark');
        document.getElementById('carrinho').classList.add('bgLight');
    }
}

// java script carrinho

let carrinho = document.getElementById('carrinho')

carrinho.addEventListener('mouseenter', entrarcar)
carrinho.addEventListener('mouseout', saircar)

function entrarcar() {
    if (document.getElementById('carrinho').className === 'bgDark') {
        document.getElementById('carrinho').classList.remove('bgDark');
        document.getElementById('carrinho').classList.add('bgLight');
    } else {
        document.getElementById('carrinho').classList.remove('bgLight');
        document.getElementById('carrinho').classList.add('bgDark');
    }
}
function saircar() {
    if (document.getElementById('carrinho').className === 'bgLight') {
        document.getElementById('carrinho').classList.remove('bgLight');
        document.getElementById('carrinho').classList.add('bgDark');
    } else {
        document.getElementById('carrinho').classList.remove('bgDark');
        document.getElementById('carrinho').classList.add('bgLight');
    }
}



// function banner

function slide1() {
    document.getElementById('banner').src = "prop1.png";
    setTimeout("slide2()", 4000)
}

function slide2() {
    document.getElementById('banner').src = "prop2.png";
    setTimeout("slide3()", 4000)
}

function slide3() {
    document.getElementById('banner').src = "prop3.png";
    setTimeout("slide1()", 4000)
}


// modal js alternar imagens

const produto_rtx_3080 = [
    {
        nome: "Placa de Vídeo Zotac NVIDIA GeForce RTX 3080 TRINITY LHR, 10GB, 19...",
        foto1: 'foto1.png',
        foto2: 'foto2.png',
        foto3: 'foto3.png',
        foto4: 'foto4.png',
        foto5: 'foto5.png',
        foto6: 'foto6.png',
        imgfoto1: 'foto1.png',
        preco: 'À vista no PIX com até 15% OFF R$ 5.058,71 Em até 10x de R$505,87 sem juros no cartão Ou em 1x no cartão com até 10% OFF',
        detalhes: 'Placa de Vídeo ZOTAC GAMING GeForce RTX 3080 Trinity LHR. Amplie-se com o ZOTAC GAMING GeForce RTX 30 Series baseado na arquitetura NVIDIA Ampere.Construído com núcleos RT e núcleos tensores aprimorados, novos multiprocessadores de streaming e memória GDDR6X super rápida, o ZOTAC GAMING GeForce RTX 3080 Trinity LHR dá origem a jogos amplificados com ultra fidelidade gráfica. O Estado da Arte Ray Tracing e IA NVIDIA RTX é a plataforma mais avançada para ray tracing e tecnologias de IA que está revolucionando a forma como jogamos e criamos. Mais de 150 jogos e aplicativos de primeira linha usam RTX para fornecer gráficos realistas com desempenho extremamente rápido ou novos recursos de IA de última geração, como NVIDIA DLSS e NVIDIA Broadcast. RTX é o novo padrão. Desempenho com o NVIDIA DLSS Obtenha um aumento de desempenho com NVIDIA DLSS (Deep Learning Super Sampling). Tensor Cores com IA especializada em GPUs GeForce RTX aumentam a velocidade dos seus jogos sem comprometer a qualidade da imagem. Isso permite que você intensifique as configurações e a resolução para uma experiência de visualização ainda melhor. Ray Tracing O Ray Tracing simula o comportamento da luz no mundo real para produzir os gráficos mais realistas e envolventes para jogadores e criadores. A série GeForce RTX 30 apresenta núcleos RT de 2ª geração para desempenho máximo de rastreamento de raios.'
    }]

let rtx_3080 = document.getElementById('rtx_3080')
rtx_3080.addEventListener('click', rtx_3080_com_objeto)

function rtx_3080_com_objeto() {
    // titulo
    // document.getElementById('abreModalLabel').remove()
    // var delElem = document.getElementById('modal-header');
    // delElem.parentNode.removeChild(delElem);
    let pd_rtx_3080 = document.createElement('h5');
    pd_rtx_3080.setAttribute('class', "modal-title");
    pd_rtx_3080.setAttribute('id', "abreModalLabel");
    pd_rtx_3080.innerText = produto_rtx_3080[0].nome;
    document.getElementById('modal-header').appendChild(pd_rtx_3080);
    // mini imagem 1
    let liImg1 = document.createElement('li');
    liImg1.setAttribute('class', "list-group-item");
    liImg1.setAttribute('id', "list-group-item1");
    document.getElementById('miniImgProd1').appendChild(liImg1)

    // document.getElementById('foto1').remove()
    let Img1 = document.createElement('img');
    Img1.setAttribute('class', "foto1");
    Img1.setAttribute('id', "foto1");
    Img1.src = produto_rtx_3080[0].foto1;
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
    Img2.src = produto_rtx_3080[0].foto2;
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
    Img3.src = produto_rtx_3080[0].foto3;
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
    Img4.src = produto_rtx_3080[0].foto4;
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
    Img5.src = produto_rtx_3080[0].foto5;
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
    Img6.src = produto_rtx_3080[0].foto6;
    document.getElementById('list-group-item6').appendChild(Img6);
    // imagem grande
    // document.getElementById('card-img-top').remove()
    let imgLarge = document.createElement('img');
    imgLarge.setAttribute('class', "card-img-top");
    imgLarge.setAttribute('id', "card-img-top");
    imgLarge.src = produto_rtx_3080[0].foto1;
    document.getElementById('imgGrande').appendChild(imgLarge);
    // preço
    let preço_rxt_3080 = document.createElement('p');
    preço_rxt_3080.setAttribute('class', 'preco-rxt-3080')
    preço_rxt_3080.innerText = produto_rtx_3080[0].preco;
    document.getElementById('preco_prod').appendChild(preço_rxt_3080);
    // descrição rxt 3080
    let detal_rxt_3080 = document.createElement('p');
    detal_rxt_3080.setAttribute('class', 'descricao_produto')
    detal_rxt_3080.innerText = produto_rtx_3080[0].detalhes;
    document.getElementById('txtDetalhes').appendChild(detal_rxt_3080);
}



document.querySelector('#miniImgProd1').addEventListener('click', function () {
    document.querySelector('#card-img-top').setAttribute("src", 'foto1.png')
})
document.querySelector('#miniImgProd2').addEventListener('click', function () {
    document.querySelector('#card-img-top').setAttribute('src', 'foto2.png')
})
document.getElementById('miniImgProd3').addEventListener('click', function () {
    document.getElementById('card-img-top').setAttribute('src', 'foto3.png')
})
document.getElementById('miniImgProd4').addEventListener('click', function () {
    document.getElementById('card-img-top').setAttribute('src', 'foto4.png')
})
document.getElementById('miniImgProd5').addEventListener('click', function () {
    document.getElementById('card-img-top').setAttribute('src', 'foto5.png')
})
document.getElementById('miniImgProd6').addEventListener('click', function () {
    document.getElementById('card-img-top').setAttribute('src', 'foto6.png')
})
function removeElement() {
    let removeTitulo = document.getElementById("abreModalLabel");
    removeTitulo.remove();

    let  removeimg1 = document.getElementById("foto1");
    removeimg1.remove()

    let  removeimg2 = document.getElementById("foto2");
    removeimg2.remove()

    let  removeimg3 = document.getElementById("foto3");
    removeimg3.remove()

    let  removeimg4 = document.getElementById("foto4");
    removeimg4.remove()

    let  removeimg5 = document.getElementById("foto5");
    removeimg5.remove()

    let  removeimg6 = document.getElementById("foto6");
    removeimg6.remove()

    let  removeli1 = document.getElementById("list-group-item1");
    removeli1.remove()

    let  removeli2 = document.getElementById("list-group-item2");
    removeli2.remove()

    let  removeli3 = document.getElementById("list-group-item3");
    removeli3.remove()

    let  removeli4 = document.getElementById("list-group-item4");
    removeli4.remove()

    let  removeli5 = document.getElementById("list-group-item5");
    removeli5.remove()

    let  removeli6 = document.getElementById("list-group-item6");
    removeli6.remove()

    let  removeimgGrande = document.getElementById("card-img-top");
    removeimgGrande.remove()

    let  removepreco = document.querySelector(".preco-rxt-3080");
    removepreco.remove()

    let  removedescricao = document.querySelector(".descricao_produto");
    removedescricao .remove()
    
}
