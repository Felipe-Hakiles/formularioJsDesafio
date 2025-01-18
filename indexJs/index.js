function enviarFormulario(){
    let inputNome = document.getElementById("nome-completo");

    let camposValidos = true;

    if(inputNome.value === ""){
        inputNome.classList.add('invalid');
        camposValidos = false
    }else{
        inputNome.classList.remove('invalid');
        inputNome.classList.add('valid');
    }

    let inputEmail = document.getElementById("email");

    if(inputEmail.value ==="") {
        inputEmail.classList.add('invalid');
        camposValidos =false
    }else{
        inputEmail.classList.remove('invalid')

    }
     
    let inputTelefone = document.getElementById("telefone");

    if(inputTelefone.value === ""){
        inputTelefone.classList.add('invalid');
        camposValidos = false
    }else{
        inputTelefone.classList.remove('invalid');
        inputTelefone.classList.add('valid');
    }

    let inputTextArea = document.getElementById("menssagem");
    let textAreaErro = document.getElementById("erro-message")
        
    if(inputTextArea.value ===""){
        inputTextArea.classList.add('invalid');
        textAreaErro.classList.add('active');
        camposValidos = false
    }else{
        inputTextArea.classList.remove('invalid');
        inputTextArea.classList.add('valid');
        textAreaErro.classList.remove('active');
    }

    if(camposValidos){
        alert("Todas informações enviadas com sucesso!")
    }
}