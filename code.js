document.getElementById('cep').addEventListener('focusout', pesquisarcep)

async function pesquisarcep() {
    let cep = document.getElementById('cep').value
    let url = `https://viacep.com.br/ws/${cep}/json/`
    let dados = await fetch(url)
    let endereco = await dados.json()
    
    if(endereco.hasOwnProperty('erro')) {
        document.getElementById('endereco').value = 'CEP não encontrado!'

    } else {
        preencher(endereco)
    }
  
    console.log(endereco)
    
}

function preencher(endereco) {
    document.getElementById('endereco').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf

   
}

