const R={
  molho:{e:"🌶️",n:"O baiano tem o molho",cor:"#e8590c",t:"Animada e cheia de molho: onde você chega, a festa começa."},
  nego:{e:"🍯",n:"Nego Doce",cor:"#f5c26b",t:"Doce e carinhosa: você conquista todo mundo com o seu jeito."},
  fraq:{e:"😏",n:"Fraquinha",cor:"#f4a6b7",t:"Brincalhona e descontraída: você leva a vida na leveza e no bom humor."},
  calado:{e:"🍀",n:"Calado Vence 777",cor:"#6fbf73",t:"Calma e esperta: você vence no seu tempo, sem fazer barulho."},
  trafi:{e:"🔥",n:"Traficante de Desejos",cor:"#7b3f61",t:"Intensa e sedutora: você tem um charme que ninguém ignora."}
};
const Q=[
  ["Qual é o seu clima?",[["Animada e cheia de molho","molho"],["Doce e carinhosa","nego"],["Brincalhona e descontraída","fraq"],["Calma e esperta","calado"],["Intensa e sedutora","trafi"]]],
  ["Qual seria o seu programa ideal?",[["Pagodão no paredão","molho"],["Roda de samba com os amigos","nego"],["Pipoca no Carnaval","fraq"],["Ficar em casa de boa","calado"],["Festa até amanhecer","trafi"]]],
  ["Qual cor você prefere?",[["Laranja","molho"],["Dourado","nego"],["Rosa","fraq"],["Verde","calado"],["Roxo","trafi"]]],
  ["Qual palavra define você?",[["Molho","molho"],["Doçura","nego"],["Leveza","fraq"],["Sorte","calado"],["Desejo","trafi"]]],
  ["Qual roupa você escolhe?",[["Camisa colorida","molho"],["Linho claro","nego"],["Look de bloco","fraq"],["Moletom confortável","calado"],["Preto e brilho","trafi"]]]
];
function txt(h){const n=parseInt(h.slice(1),16),l=((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000;return l>140?'#222':'#fff';}
const caixa=document.getElementById('caixa'),prog=document.getElementById('prog');
let i=0,pts={};
function mostrar(){
  if(i>=Q.length)return fim();
  prog.textContent='Pergunta '+(i+1)+' de '+Q.length;
  caixa.innerHTML='<h2>'+Q[i][0]+'</h2>';
  Q[i][1].forEach(([t,k])=>{
    const b=document.createElement('button');
    b.className='opcao';b.textContent=t;
    b.onclick=()=>{pts[k]=(pts[k]||0)+1;i++;mostrar();};
    caixa.appendChild(b);
  });
}
function fim(){
  const k=Object.keys(pts).sort((a,b)=>pts[b]-pts[a])[0],r=R[k];
  prog.textContent='';
  caixa.innerHTML='<div class="resultado" style="background:'+r.cor+';color:'+txt(r.cor)+'"><div class="grande">'+r.e+'</div><h2>'+r.n+'</h2><p>'+r.t+'</p></div><p><button class="btn" id="refazer">Refazer o quiz</button></p>';
  document.getElementById('refazer').onclick=()=>{i=0;pts={};mostrar();};
}
mostrar();
