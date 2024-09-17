const form = document.getElementById('form-depositos')
const nomeBeneficiario = document.getElementById('nome-beneficiario')
let formValido = false


function validaNome(nomeCompleto){
 const nomeComoArray =  nomeCompleto.split (' ')
 return nomeComoArray.length >= 2
}

form.addEventListener('submit', function(e) {
    e.preventDefault() // Impede o envio padrão do formulário

    const numeroContabeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const mensagemSucesso = `Montante de: <strong>${valorDeposito.value}</strong> enviado para o cliente: <strong>${nomeBeneficiario.value}</strong>`
    const mensagemErro = `O nome está incompleto.`
    
    /* No código, o value está sendo usado para acessar o valor digitado pelo usuário nos campos de input de um formulário HTML. Se o usuário digitou "1000" no campo de valor do depósito e "João Silva" no campo de nome do beneficiário, então:
        valoDeposito.value será "1000"
        nomeBeneficiario.value será "João Silva".*/

    // Verifica se o nome é válido usando a função validaNome
    formValido = validaNome (nomeBeneficiario.value)
    if (formValido){

        const containerMensagemSucesso = document.querySelector('.mensagemsucesso') //A variavel "containerMensagemSucesso", armazena uma referencia ao elemento que possui a classe "mensagem sucesso".

      containerMensagemSucesso.innerHTML = mensagemSucesso // a propiedade innerHTML permite acessar ou modificar o conteúdo HTML de um elemento, no caso ele está alterando o containerMensagemSucesso, inserindo nela a mensagem.

      containerMensagemSucesso.style.display = 'block' //Aqui estamos acessando a propriedade de esilo CSS "display" do elemento "containerMensagemSucesso". Na folha de estilo, o elemento vai estar como "none", oculto.

        nomeBeneficiario.value = ''
        numeroContabeneficiario.value = ''
        valorDeposito.value = ''
    } else{

        
     const containerMensagemErro = document.querySelector('.mensagemerro') //A variavel "containerMensagemErro", armazena uma referencia ao elemento que possui a classe "mensagem erro".

       containerMensagemErro.innerHTML = mensagemErro // a propiedade innerHTML permite acessar ou modificar o conteúdo HTML de um elemento, no caso ele está alterando o containerMensagemErro, inserindo nela a mensagem.

       containerMensagemErro.style.display = 'inline-block' //Aqui estamos acessando a propriedade de esilo CSS "display" do elemento "containerMensagemErro". Na folha de estilo, o elemento vai estar como "none", oculto.

       nomeBeneficiario.style.border = '1px solid red' //adiciona borda ao campo do nome caso ele esteja incompleto
    
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value)
    const mensagemErro = `O nome está incompleto.`

    // Verifica se o nome é válido usando a função validaNome
    formValido = validaNome (e.target.value)
  
    if (formValido===false){

       nomeBeneficiario.style.border = '1px solid red' //adiciona borda ao campo do nome caso ele esteja incompleto
       const containerMensagemErro = document.querySelector('.mensagemerro') //apenas repeti o código da função anterior
       containerMensagemErro.innerHTML = mensagemErro 
       containerMensagemErro = document.querySelector('.mensagemerro').style.display = 'inline-block'
    
    } else{
        nomeBeneficiario.style = ' '
        document.querySelector('.mensagemerro').style.display = 'none' //quando o usuário colocar o segundo nome, a mensagem de atenção irá sumir.
    }
})