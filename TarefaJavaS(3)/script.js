function primeiro(){

    let idade = document.getElementById("num1").value;
    if (idade <= 11 && idade > 0) 
    {
        alert("Criança");
    }
    else if (idade >=12 && idade <=17)
    {
        alert("Adolescente");
    }
    else if(idade >=18 && idade <=59)
    {
        alert("Adulto");
    }
    else if (idade >=60)
    {
        alert("Idoso");
    }
    else
    {
        alert("erro");
    }
}


function segundo(){
    let mudar = document.getElementById("num2").value;
    let senha = document.getElementById("num3").value;
    if (mudar =="admin" && senha == "1234")
    {
            document.getElementById("texto").textContent = "Login realizado com sucesso!";
    }

    else if (mudar =="professor" && senha == "senac")
    {
            document.getElementById("texto").textContent = "Bem-vindo professor!";
    }
    else if (mudar ==0 && senha ==0)
    {
          document.getElementById("texto").textContent = "Preencha todos os campos!";
    }
    else
    {
         document.getElementById("texto").textContent = "Senha ou usuario incorretos!";
    }
}

function terceiro(){
    let valor = document.getElementById("num4").value;
    let vip = document.getElementById("num5").value;
    let cupom = document.getElementById("num6").value;
    let paragrafo = document.getElementById ("paragrafo");
    if (valor >=500 && vip =="Sim")
    {
        paragrafo.textContent = valor - (valor / 20);
    }
    if (valor >=300 && vip =="Nao" && cupom == "Sim")
    {
       paragrafo.textContent = valor - (valor / 10);
    }
    if (valor <= 300 && vip == "Nao" && cupom == "nao")
    {
        paragrafo.textContent = valor;
    }
}

function quarto() {
    let nota = document.getElementById("nota").value;
    let freq = document.getElementById("freq").value;
    let ava = document.getElementById("pavaliacao");
    if(freq > 1 && freq < 75) {
        ava.textContent="Reprovado"
    }
    if ( nota == "" || nota == "" || freq == "" || freq == "") {
        ava.textContent="Valores invalidos"
    } else if (nota >= 60 && freq >= 75) {
        ava.textContent="Aprovado"
    } else if (nota >= 40 && nota < 60 && freq >= 75) {
        ava.textContent="Recuperação"
    } else if (nota < 40 ) {
        ava.textContent="Reprovado"
    }
}

function clima() {
    let temp = document.getElementById("temp").value;
    let cho = document.getElementById("chovendo").value;
    let ven = document.getElementById("ventando").value;
    let p = document.getElementById("aparecer")
    if (temp > 30 && cho == "não"){
        p.textContent=" Bom dia para piscina"
    } else if (cho == "sim" && ven == "sim") {
        p.textContent="Melhor ficar em casa"
    } else if (temp > 18 && temp < 30) {
        p.textContent="Clima agradável"
    } else if(temp < 18) {
        p.textContent="Está frio"
    }
}