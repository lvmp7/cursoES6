const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(item => item.idade);
console.log( idades);

const usersRocketseat = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18 );
console.log(usersRocketseat);

const usersGoogle = usuarios.find(item => item.empresa === 'Google');
console.log(usersRocketseat);


const testeIdades = usuarios.map(item => {
    item.idade = item.idade *2;
    return item;
})
console.log(testeIdades.filter(testeIdades => testeIdades.idade < 50));