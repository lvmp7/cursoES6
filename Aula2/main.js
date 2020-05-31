class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(data);
    }
}

class TodoList extends List{
    constructor(){
        super();
        this.usuario = "Vinicius";
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaTodoList = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaTodoList.add('Novo Todo');
}

MinhaTodoList.mostraUsuario();