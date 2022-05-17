class Anotacoes {
    constructor(titulo, notas){
        this.titulos = this.verificaTipoDoItem(titulo);
        this.notas = this.verificaTipoDoItem(notas)
    }
    verificaTipoDoItem(item){
        try{
            if(typeof item === 'string'){
                return item;
            }else {
                throw new Error("Tipo inválido");
            }
        } catch (e){
            console.log(e);
        }
    }
}    

const anotacoes = new Anotacoes(1, '1234');
console.log(anotacoes);