// Perguntas do quiz (correta: 0 = primeira opção, 1 = segunda...)
// Lista de perguntas do quiz
const perguntas = [
  {
    pergunta: "Quem derrotou as forças especiais ginyu?", imagem: "img/dragon-z.jpg",
    opcoes: ["vegeta", "Goku", "gohan", "piccolo"],
    correta: 0 // 0 = primeira, 1 = segunda, 2 = terceira, 3 = quarta
  },
  {
    pergunta: "a saga namek se passou quanto tempo?",imagem: "img/saga-frieza.jpg",
    opcoes: ["1 hora", "5 segundos", "5 minutos"],
    correta: 2
  },
  {
    pergunta: "qual era o desejo de frieza?",imagem: "img/saga-frieza.jpg",
    opcoes: ["ficar mais alto", "rebolar lentinho", "ser imortal"],
    correta: 2
  },{
  pergunta: "quem é o pai de goku?",imagem: "img/saga-frieza.jpg",
    opcoes: ["kakarotto", "bardock","karin","kami"],
    correta: 1
  },
  {
  pergunta: "como goku fugiu de namek?",imagem: "img/saga-frieza.jpg",
    opcoes: ["teletransporte", "nave de frieza", "nave de ginyu"],
    correta: 2
  },
  {
  pergunta: "o que aconteceu com goku na linha original",imagem: "img/cell.jpg",
    opcoes: ["derrotado pelos androids", "doença do coração","traição de vegeta (falso aliado)"],
    correta: 1
  },{
  pergunta: "quantos androids existe na saga cell? (essa pergunta conta até os non-canon)",imagem: "img/gero.jpg",
    opcoes: ["10", "9","6","20"],
    correta: 0
  },{
  pergunta: "cell vem de qual linha do tempo",
    opcoes: ["linha principal", "linha do futuro","pós futuro","passado"],
    correta: 2
  },{
  pergunta: "o que cell quis ser?",imagem: "img/cell.jpg",
    opcoes: ["imperador do universo","imperador do multiverso","guerreiro perfeito","mestre das esferas"],
    correta: 2
  },{
  pergunta: "como cell foi derrotado?", imagem: "img/cell-b.jpg",
    opcoes: ["por ser fraco", "pelo kamehameha em distração e ajuda dos z ","com poder do ssj2","por ser muito forte"],
    correta: 1
  },{
  pergunta: "por que majin boo ficou incompleto?", imagem: "img/boo-3.jpg",
    opcoes: ["o Babidi o liberou cedo demais", "tava em processo de parto","danificado pelo kamehameha","por conta do majin vegeta"],
    correta: 2
  },{
  pergunta: "qual o nome da segunda forma de majin buu?",imagem: "img/buu.jpg",
    opcoes: ["ubb", "super buu","evil buu","ultra buu"],
    correta: 1
  },{
  pergunta: "como gohan derrotou o Buu rosa ?",imagem: "img/buu.jpg",
    opcoes: ["Kamehameha", "Treinando","ultimate","Forma Besta"],
    correta: 2
  },{
  pergunta: "qual é o buu mais poderoso?", imagem: "img/buu.jpg",
    opcoes: ["Majin Buu (gordo)", "buutenks (fusão de Gotenks e Boo)","kid buu (forma criança)","buuhan(Gohan Ultimate)"],
    correta: 3
  },{
  pergunta: "como o Kid Boo foi derrotado?", imagem: "img/boo-4.jpg",
    opcoes: ["Vegeta com o Big Bang", "Vegetto com Final Kamehameha","Gohan com o Masenko","Goku com a Genki Dama"],
    correta: 3
  },
  
  
];

let i=0,pontos=0,travado=false;
function mostrar(){
  const a=perguntas[i];travado=false;
  document.getElementById('prog').textContent='Pergunta '+(i+1)+' de '+perguntas.length;
  document.getElementById('qimg').innerHTML=a.imagem&&a.imagem?'<img src="'+a.imagem+'" alt="">':'';
  document.getElementById('pergunta').textContent=a.pergunta;
  const box=document.getElementById('opcoes');box.innerHTML='';
  a.opcoes.forEach((t,k)=>{const bt=document.createElement('button');bt.className='opcao';bt.textContent=t;bt.onclick=()=>responder(k,bt);box.appendChild(bt)});
}
function responder(k,bt){
  if(travado)return;travado=true;
  const c=perguntas[i].correta,bs=document.querySelectorAll('.opcao');
  if(k===c)pontos++;else bt.classList.add('no');
  bs[c].classList.add('ok');
  setTimeout(()=>{i++;i<perguntas.length?mostrar():fim()},1100);
}
function fim(){
  document.getElementById('quiz').innerHTML='<h3 style="font-size:2rem;margin-bottom:10px">Fim do quiz</h3><p style="margin-bottom:16px">Você acertou <b>'+pontos+'</b> de <b>'+perguntas.length+'</b> perguntas.</p><button class="btn" id="again">Jogar de novo</button>';
  document.getElementById('again').onclick=()=>location.reload();
}
mostrar();
