 class Sprite {
    constructor(x, y, largura, altura, imagem) {
        this.y = y;
        this.x = x;
        this.largura = largura;
        this.altura = altura;
        this.imagem = imagem;
    }
}
Sprite.prototype.metadeLargura = function(){
    return this.largura/2
}
Sprite.prototype.metadeAltura = function(){
    return this.altura/2
}
Sprite.prototype.centroX = function(){
    return this.x + this.metadeLargura();
}
Sprite.prototype.centroY = function(){
    return this.y + this.metadeAltura();
}



var tela = document.querySelector("canvas");
var ctx = tela.getContext("2d");

//teclas
var LEFT=37, UP=38, RIGHT=39, DOWN=40, SPACE=32;

//movimento
var mvLeft = mvUp = mvRight = mvDown = bomba = false;
var velocidade = 2;
//arrays
var mapa = [
    [4,3,3,3,3,3,3,3,3,3,3,3,3,3,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,5,0,0,0,4],
    [4,5,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,6,0,4],
    [4,0,0,0,0,0,0,6,0,0,0,0,0,0,4],
    [4,0,0,0,0,5,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,6,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,6,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,6,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]         
]
var x;
var y;
var xBomba;
var yBomba;   
var xMonstro;
var yMonstro;      
var sprites = [];
var monstrosR = [];
var paredes = [];
var paredesD = [];
var paredesNeve = [];
var paredesSnow = [];
var paredesGelo = [];
var paredesGeladas = [];
for(var linhas in mapa){
    for(var colunas in mapa[linhas]){
        var bloco = mapa[linhas][colunas];

        if(bloco === 1){
            x = colunas*50;
            y = linhas*50;
            var parede = new Sprite(x,y,50,50,imagemBoneco);
            paredes.push(parede);
        }
        if(bloco === 2){
            x = colunas*50
            y = linhas*50
            var paredeD = new Sprite(x, y, 50, 50, imagemParedeD)
            paredesD.push(paredeD);
        }

        if(bloco === 3){
            x = colunas*50
            y = linhas*50
            var paredeNeve = new Sprite(x, y, 50, 50, imagemParedeNeve)
            paredesNeve.push(paredeNeve);
        }
        if(bloco === 4){
            x = colunas*50
            y = linhas*50
            var paredeSnow = new Sprite(x, y, 50, 50, imagemParedeSnow)
            paredesSnow.push(paredeSnow);
        }
        if(bloco === 5){
            x = colunas*50
            y = linhas*50
            var paredeGelo = new Sprite(x, y, 50, 50, imagemParedeGelo)
            paredesGelo.push(paredeGelo);
        }
        if(bloco === 6){
            x = colunas*50
            y = linhas*50
            var paredeGelada = new Sprite(x, y, 50, 50, imagemParedeGelada)
            paredesGeladas.push(paredeGelada);
        }
        if(bloco === 7){
            x = colunas*50
            y = linhas*50
            var monstroR = new Sprite(x, y, 50, 50, imagemMonstroR)
            monstrosR.push(monstroR);
        }

        
        
        
    }  
} 
//entradas
window.addEventListener("keydown",function (e){
    var key = e.keyCode;
    switch(key){
        case LEFT:
            mvLeft = true;
            break;
        case UP:
            mvUp = true;
            break;
        case RIGHT:
            mvRight = true;
            break;
        case DOWN:
            mvDown = true;
            break;
        case SPACE:
            bomba = true;
            xBomba = Math.floor(boneco.centroX()/50)*50; 
            yBomba = Math.floor(boneco.centroY()/50)*50;
            this.setTimeout(pararBomba,3000); // usando timeout para fazer a bomba desaparecer.
            break;           
    }
    
}, false)
window.addEventListener("keyup",function (e){
    var key = e.keyCode;
    switch (key){
        case LEFT:
            mvLeft = false;
            break;
        case UP:
            mvUp = false;
            break;
        case RIGHT:
            mvRight = false;
            break;
        case DOWN:
            mvDown = false;
            break; 
                
    }

}, false)

//objetos
var imagemBoneco = new Image();
imagemBoneco.src ="https://art.pixilart.com/c5e4d357e30cf9d.png";
var boneco = new Sprite(100,100,40,40,imagemBoneco);
sprites.push(boneco);

var imagemParede = new Image();
imagemParede.src = "https://imgur.com/EkleLlt.png";

var imagemParedeD = new Image();
imagemParedeD.src = "https://imgur.com/C46n8aY.png";

var imagemBomba = new Image();
imagemBomba.src = "https://opengameart.org/sites/default/files/styles/medium/public/Bomb_anim0001.png"

var imagemParedeNeve = new Image();
imagemParedeNeve.src = "https://imgur.com/cIIPEIw.png";

var imagemParedeSnow = new Image();
imagemParedeSnow.src = "https://imgur.com/LQ6Ob6s.png";

var imagemParedeGelo = new Image();
imagemParedeGelo.src = "https://imgur.com/Pc1X7HZ.png";

var imagemParedeGelada = new Image();
imagemParedeGelada.src = "https://imgur.com/xsuM7Er.png";

var imagemMonstroR = new Image();
imagemMonstroR = ctx.fillRect(xMonstro, yMonstro, 50, 50);



//funções 
function loop (){
    window.requestAnimationFrame(loop,tela);
    atualiza();
    desenha();
    
    
}

function atualiza(){
    if(mvLeft && !mvRight && !mvDown && !mvUp){
        boneco.x -= velocidade;
    }
    if(mvRight && !mvLeft && !mvDown && !mvUp){
        boneco.x += velocidade;
    }
    if(mvUp && !mvDown){
        boneco.y -= velocidade;
    }
    if(mvDown && !mvUp){
        boneco.y += velocidade;
    }

  
    //movimentação do monstro
    var horizontal = Math.round(Math.random());

    //colisões
    for(let i in paredes){
        let prd = paredes[i];
        colisao(boneco,prd);
    }
    for (let i in paredesD) {
       let prd = paredesD[i];
       colisao(boneco, prd);
    }
    for (let i in paredesNeve) {
        let prd = paredesNeve[i];
        colisao(boneco, prd);
     }
     for (let i in paredesSnow) {
        let prd = paredesSnow[i];
        colisao(boneco, prd);
     }
     for (let i in paredesGelo) {
        let prd = paredesGelo[i];
        colisao(boneco, prd);
     }
     for (let i in paredesGeladas) {
        let prd = paredesGeladas[i];
        colisao(boneco, prd);
     }
    
}



function desenha() {
    var x;
    var y;
    ctx.clearRect(0,0,tela.width,tela.height);
    for(var i in sprites){
        var spr = sprites[i];
        ctx.drawImage(imagemBoneco,spr.x, spr.y, spr.largura, spr.altura); 
    }

    for(var linhas in mapa){
        for(var colunas in mapa[linhas]){
            var bloco = mapa[linhas][colunas];
            if(bloco === 1){
                x = colunas*50;
                y = linhas*50;
                ctx.drawImage(imagemParede,x,y,50,50);
            }
            if(bloco === 2){
                x = colunas*50;
                y = linhas*50;
                ctx.drawImage(imagemParedeD,x,y,50,50);
            }
            if(bloco === 3){
                x = colunas*50;
                y = linhas*50;
                ctx.drawImage(imagemParedeNeve,x,y,50,50);
            }
            if(bloco === 4){
                x = colunas*50;
                y = linhas*50;
                ctx.drawImage(imagemParedeSnow,x,y,50,50);
            }
            if(bloco === 5){
                x = colunas*50;
                y = linhas*50;
                ctx.drawImage(imagemParedeGelo,x,y,50,50);
            }
            if(bloco === 6){
                x = colunas*50;
                y = linhas*50;
                ctx.drawImage(imagemParedeGelada,x,y,50,50);
            }
        }
    }
   
    if(bomba){
        ctx.drawImage(imagemBomba,xBomba,yBomba,50,50);
    }
}

function colisao(r1,r2){
    var catX = r1.centroX() - r2.centroX();
    var catY = r1.centroY() - r2.centroY();

    //soma das metades
    var smMetadeLargura = r1.metadeLargura() + r2.metadeLargura();
    var smMetadeAltura = r1.metadeAltura() + r2.metadeAltura();

    if(Math.abs(catX) < smMetadeLargura && Math.abs(catY) < smMetadeAltura){
        var diferencaX = smMetadeLargura - Math.abs(catX);
        var diferencaY = smMetadeAltura - Math.abs(catY);

        if(diferencaX >= diferencaY){//colisão por cima ou por baixo
            if(catY > 0){//por cima
                r1.y += diferencaY;
            } else {
                r1.y -= diferencaY;
            }
        } else {// colisão pela esquerda ou direita
            if(catX > 0){//pela esquerda
                r1.x += diferencaX;
            } else {
                r1.x -= diferencaX;
            }
        }
    }

}
// Função para deixar a variável da bomba false, para ser usada no setTimeOut.
function pararBomba(){
    bomba = false;
}

loop();

//imagemParede.src = "https://imgur.com/EkleLlt.png";

   
//ctx.drawImage(imagemBoneco,x,y,50,50);
