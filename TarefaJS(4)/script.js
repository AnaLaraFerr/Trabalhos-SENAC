Produtos = [];
Quantidades = [];
Valores = [];
posicao = 0;




function add(){
    let Produto = document.getElementById ("Produto").value;
    let Quantidade = document.getElementById ("Quantidade").value;
    let Preço = document.getElementById ("Preço").value;
    Produtos.push(Produto);
    Quantidades.push(Quantidade);
    Valores.push(Preço);
}





function Mostrar(){
    let Local = document.getElementById ("Local");
    Local.textContent = ""
    for(posicao = 0; posicao < Produtos.length; posicao++)
        {
            let lista = document.createElement("li");
            lista.textContent = "Produto: " + Produtos[posicao] + " " + " Quantidade: " + Quantidades[posicao] + " R$" + Valores[posicao];
            Local.appendChild(lista)
        }
    }




function del() {
    let lista = document.getElementById("Local");
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}





function limparElemento(el) {
    el.innerHTML = '';
}

    function criarItem(texto) {
        const li = document.createElement('li');
        li.textContent = texto;
        return li;
    }





function calcularTotal() {
  const produtos = ['Violao', 'Piano', 'Microfone', 'Saxofone', 'Bateria'];
  const precos   = [800, 5000, 206, 228, 1525];

  const areaItens = document.getElementById('resultado-caixa');
  const areaTotal = document.getElementById('total-caixa');
  limparElemento(areaItens);
  limparElemento(areaTotal);

  const lista = document.createElement('ul');
  let total = 0;

  for (let i = 0; i < produtos.length; i++) {
    total += precos[i];
    lista.appendChild(criarItem(produtos[i] + ' — R$ ' + precos[i]));
  }

  areaItens.appendChild(lista);

  const p = document.createElement('p');
  p.textContent = 'Total da compra: R$ ' + total;
  p.className = 'total';
  areaTotal.appendChild(p);
}





function Senha(){
  let Local = document.getElementById ("Sobre")
    let Tentativas = document.createElement("p")
    const demo = document.getElementById("demo");
    let senha = prompt("Digite sua senha: ");
    let tentativas = 0;
    tentativas++
    while (senha !== "vivibora" && tentativas < 4) {
        tentativas++
        alert("Senha errada!")
        senha = prompt("Digite sua senha: ");
    }
      demo.textContent = `Tentativas = ${tentativas}`;
    if (tentativas >= 3)
    {
      Tentativas.textContent = "Erro! Tentativas excedidas!";
      Local.appendChild(Tentativas);
      return;
    }
}





function iniciarConferencia() {
  const area = document.getElementById('resultado-conferencia');
  limparElemento(area);

  const lista = document.createElement('ul');
  let total = 0;
  let entrada;

  while (true) {
    entrada = prompt("Digite um valor (ou 0 para encerrar):");
    if (entrada === null || entrada === '0') break;
    const valor = parseFloat(entrada);
    if (!isNaN(valor) && valor > 0) {
      total += valor;
      lista.appendChild(criarItem('R$ ' + valor.toFixed(2)));
    }
  }

  if (lista.children.length === 0) {
    const p = document.createElement('p');
    p.textContent = 'Nenhum valor foi inserido.';
    area.appendChild(p);
    return;
  }

  area.appendChild(lista);

  const p = document.createElement('p');
  p.textContent = 'Total: R$ ' + total.toFixed(2);
  p.className = 'total';
  area.appendChild(p);
}







function gerarRelatorio() {
  let alunos = ['Ana Lara', 'Isac', 'Alice', 'Gabriela', 'Mariana'];
  let notas  = [100, 99, 34, 83, 53];

  let areaLista = document.getElementById('resultado-notas');
  let areaMedia = document.getElementById('media-notas');
  limparElemento(areaLista);
  limparElemento(areaMedia);

  const lista = document.createElement('ul');
  let soma = 0;

  for (let i = 0; i < alunos.length; i++) {
    soma += notas[i];
    const situacao = notas[i] >= 60 ? 'Aprovado' : 'Recuperação';
    const texto = alunos[i] + ' — Nota: ' + notas[i] + ' — ' + situacao;
    const li = criarItem(texto);
    if (situacao === 'Aprovado') {
      li.style.color = '#1eb600';
    } else {
      li.style.color = '#b81111';
    }
    lista.appendChild(li);
  }

  areaLista.appendChild(lista);

  const media = soma / alunos.length;
  const p = document.createElement('p');
  p.textContent = 'Média da turma: ' + media.toFixed(0);
  p.className = 'total';
  areaMedia.appendChild(p);
}