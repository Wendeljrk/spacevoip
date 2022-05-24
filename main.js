
const KEY_BD = '@usuarioNvoip'

// variaveis
var listaRegistros = {
    ultimoIdGerado: 0,
    clientes:[ ]
}

// função para salvar na memoria do navegador

function gravarBD(){
    localStorage.setItem(KEY_BD, JSON.stringify(listaRegistros) )
}

function lerBD(){
    const data = localStorage.getItem(KEY_BD)
    if(data){
        listaRegistros = JSON.parse(data)
    }
    desenhar()
}


// função para criar a tabela
function desenhar() {
    const tbody = document.getElementById('listaRegistrosBody')
    if (tbody){
        tbody.innerHTML = listaRegistros.clientes.map(cliente=> {

                return `<tr>
                        <td>${cliente.id}</td>
                        <td>${cliente.cpf}</td>
                        <td>${cliente.nome}</td>
                        <td>${cliente.fone}</td>

                        <td>
                        <button class="trigger" onclick="showModal()">SMS</button>
                        </td>
                </tr>`

            }) .join('')

    }
    
}
// função para inserir as informações na tabela

function insert(cpf,nome,fone) {
    const id = listaRegistros.ultimoIdGerado + 1;
    listaRegistros.ultimoIdGerado = id
    listaRegistros.clientes.push({
        id,cpf,nome,fone
    
    })
    gravarBD()
    desenhar()
    visualizar('lista')
}


// função para o botão salvar

function submeter(e) {
    e.preventDefault()
    const data = {
        id: document.getElementById('id').value || listaRegistros.ultimoIdGerado + 1,
        cpf: document.getElementById('cpf').value,
        nome: document.getElementById('nome').value,
        fone: document.getElementById('fone').value,
    }
    insert(data.cpf, data.nome, data.fone)
    
} 
//


//função para o botão novo cliente

function visualizar(pagina, ) {
    document.body.setAttribute('page',pagina)
    if (pagina ==='cadastro'){
        document.getElementById('cpf').focus()
    }
}
//função para mostrar a tabela
window.addEventListener('load', () =>{
    lerBD()
    desenhar()

    document.getElementById('cadastroRegistro').addEventListener('submit',submeter)
})



// função para mostrar o Modal do input da msg



function showModal() {
    var element = document.getElementById("modal");
    element.classList.add("show-modal");
}

function closeModal() {
    var element = document.getElementById("modal");
    element.classList.remove("show-modal");
}



// tentativa de implementar a api

// const axios = require('axios');

//     (async function(){
//         const sms = await axios({
//             url: 'https://api.nvoip.com.br/v1/sms',
//             method: 'post',
//             Headers: {
//                 'token_auth':'211718131b8d420b13943298bbfb09b71ddd1'


//             },
//             data:{
//                 'celular':"celular",
//                 'msg':'sms'
//             }
//         })
//     })


