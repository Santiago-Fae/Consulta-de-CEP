document.getElementById('cep').addEventListener('focusout', pesquisarcep)

const cepValido = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep)


async function pesquisarcep() {
    limparFormulario()

    let cep = document.getElementById('cep').value
    let url = `https://viacep.com.br/ws/${cep}/json/`
    if(cepValido(cep)) {

        let dados = await fetch(url)
        let endereco = await dados.json()
        
        if(endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'CEP não encontrado!'
    
        } else {
            preencher(endereco)
        }
      
        console.log(endereco)
    } else {
        document.getElementById('endereco').value = 'CEP incorreto!'
    }
 
    
}

function limparFormulario(endereco) {
    document.getElementById('endereco').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('estado').value = ''

}

function preencher(endereco) {
    
    document.getElementById('endereco').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf

}

