/* 
Case Sensitive
por Tag: getElementByTagName()
por ID: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector() - mais utilizado

*/
let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk;
let emailOk;
let assuntoOk;
let imagem1 = document.querySelector("#imagem1")
let imagem2 = document.querySelector("#imagem2")
let imagem3 = document.querySelector("#imagem3")
let imagem4 = document.querySelector("#imagem4")
let imagem5 = document.querySelector("#imagem5")
let imagem6 = document.querySelector("#imagem6")
let imagem7 = document.querySelector("#imagem7")
let imagem8 = document.querySelector("#imagem8")
let imagem9 = document.querySelector("#imagem9")
let imagem10 = document.querySelector("#imagem10")

nome.style.width= '70%'
email.style.width= '70%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
       txtNome.innerHTML = "Nome inválido";
       txtNome.style.color = "red";
       nomeOk = false;
    } else {
        txtNome.innerHTML = "Nome válido";
        txtNome.style.color = "green";
        nomeOk = true;
    }
}
function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
       txtEmail.innerHTML = "E-mail inválido";
       txtEmail.style.color = "red";
       emailOk = false;
    } else {
        txtEmail.innerHTML = "E-mail válido";
        txtEmail.style.color = "green";
        emailOk = true;
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 101){
       txtAssunto.innerHTML = "Quantidade de caracteres excedidos. Digite no máximo 100 caracteres";
       txtAssunto.style.color = "red";
       txtAssunto.style.display = "block";
       assuntoOk = false;
    } else {
        txtAssunto.style.display = "none";
        assuntoOk = true;
    }
}
function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!")
    } else{
        alert("Preencha corretamente todos os campos")
    }
}


function imagemZoom(img) {
    img.style.width = "450px"
    img.style.height = "450px"
    
}
function imagemNormal(img) {
    img.style.width = "300px"
    img.style.height = "300px"
   
}

