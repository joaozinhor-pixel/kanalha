const ALBUNS=[
  [2022,"🔢","Século Kannalha 777","#f5c26b","Álbum lançado em 2022."],
  [2023,"☀️","Verão Doce","#ffd8a8","EP lançado em 2023."],
  [2024,"💃","De Ladin","#f4a6b7","Single lançado em 2024."],
  [2025,"🌶️","O Molho do Maridão","#e8590c","EP que reúne o maior sucesso da carreira dele, \"O baiano tem o molho\"."],
  [2026,"✈️","Primeira turnê internacional","#a5d8ff","Shows na Europa em março de 2026, com datas em Milão e Genebra."],
  [2026,"🤝","Mostra Que Cê Sabe","#b2f2bb","Parceria com Parangolé e Igor Kannário, em maio de 2026."],
  [2026,"☕","Café PQG","#d0bfff","Single lançado depois de um mistério nas redes sociais."]
];
function txt(h){const n=parseInt(h.slice(1),16),l=((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000;return l>140?'#222':'#fff';}
const lista=document.getElementById('lista');
ALBUNS.forEach(([ano,e,nome,cor,c])=>{
  const b=document.createElement('button');
  b.className='album';b.setAttribute('aria-expanded','false');
  b.style.setProperty('--c',cor);b.style.setProperty('--t',txt(cor));
  b.innerHTML=e+' <b>'+nome+'</b> ('+ano+')<small>'+c+'</small>';
  b.onclick=()=>b.setAttribute('aria-expanded',b.getAttribute('aria-expanded')==='false');
  lista.appendChild(b);
});
