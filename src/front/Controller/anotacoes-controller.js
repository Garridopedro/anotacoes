class AnotacoesController{
    constructor(array){
        this.array = [];

    }
    addAnotacao(){
        const titulo = $("#titulo").val();
        const notas = $("#descricaoTarefa").val()
        const anotacoes = new Anotacoes(titulo, notas);
        console.log(anotacoes);
    }
} 
$()
// const controller = new AnotacoesController()
// controller.addAnotacao()
