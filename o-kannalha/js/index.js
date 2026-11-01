const OPCOES=[
  {e:'🎧',t:'Convite para ouvir O Kannalha',u:'convite.html'},
  {e:'🔮',t:'Qual música dele é você?',u:'quiz.html'},
  {e:'📅',t:'Linha do tempo da carreira',u:'timeline.html'},
  {e:'⏳',t:'Contagem para o Carnaval',u:'contagem.html'},
  {e:'🃏',t:'Jogo da memória',u:'memoria.html'}
];
const menu=document.getElementById('menu');
OPCOES.forEach((o,i)=>{
  const a=document.createElement('a');
  a.className='op';a.href=o.u;
  a.innerHTML='<i>'+(i+1)+'</i><span>'+o.e+' '+o.t+'</span>';
  menu.appendChild(a);
});
addEventListener('keydown',e=>{const o=OPCOES[+e.key-1];if(o)location.href=o.u;});
