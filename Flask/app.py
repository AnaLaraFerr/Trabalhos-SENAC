from flask import Flask, render_template,request
import datetime

app = Flask(__name__)

@app.route("/")
def inicio():
    return render_template("index.html")

@app.route("/sobre.html")
def sobre():
    return render_template("sobre.html")

@app.route("/contato.html")
def contato():
    return render_template("contato.html")

@app.route("/cardapio.html")
def imagens():
    listaprodutos = []
    with open("produtos.txt", "r") as arquivo:
        for linhas in arquivo:
            frase = linhas.strip().split(";")
            nome = frase[0]
            preco = frase [1]
            imagem = frase[2]

            produto = {
                "nome":nome,
                "preco":preco,
                "imagem":imagem
            }

            listaprodutos.append(produto)
        return render_template("cardapio.html",listaprodutos=listaprodutos)

@app.route("/cadastro.html", methods=["GET","POST"])
def cadastrar():
    if request.method=="POST": 
        nome = request.form["nome"]
        preco = request.form["preco"]
        imagem = request.files["imagem"]

        nome_imagem = imagem.filename

        imagem.save("static/" + nome_imagem)

        with open("produtos.txt", "a") as arquivo:
            arquivo.write(f"{nome};{preco};{nome_imagem}\n")
    return render_template("cadastro.html")


@app.route("/login.html", methods=["GET","POST"])
def login():
    if request.method == "POST":
        senhadigita = request.form["senha"]

        with open("senhas.txt", "r", encoding="utf-8") as arquivo:
            for linha in arquivo:
                senha = linha.strip()

                if senhadigita == senha:
                    return render_template("cadastro.html")

    return render_template("login.html")



app.run(debug=True)