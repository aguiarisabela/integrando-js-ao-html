

const form = document.getElementById('form-depositos')

function validaNome(nomeCompleto){
 const nomeComoArray =  nomeCompleto.split (' ')
 return nomeComoArray.length >= 2
}

form.addEventListener('submit', function(e) {
    e.preventDefault() // Impede o envio padrão do formulário

    let formValido = false

    const nomeBeneficiario = document.getElementById('nome-beneficiario')
    const numeroContabeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value}`
    
    /* No código, o value está sendo usado para acessar o valor digitado pelo usuário nos campos de input de um formulário HTML. Se o usuário digitou "1000" no campo de valor do depósito e "João Silva" no campo de nome do beneficiário, então:
        valoDeposito.value será "1000"
        nomeBeneficiario.value será "João Silva".*/

    // Verifica se o nome é válido usando a função validaNome
    formValido = validaNome (nomeBeneficiario.value)
    if (formValido){
        alert(mensagemSucesso)
        nomeBeneficiario.value = ''
        numeroContabeneficiario.value = ''
        valorDeposito.value = ''
    } else{

        alert('O nome não está completo.')
    }
})