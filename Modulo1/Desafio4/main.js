const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nome, endereco: {cidade,estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

const usuario = {nome: 'Vinicius', idade : 20}

function mostraUsuario( {nome,idade}){
    return `${nome} tem ${idade} anos.`; 
}

console.log(mostraUsuario(usuario));