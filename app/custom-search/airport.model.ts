export default class Airport {

    constructor(t:String) {
        this.titulo = t;
    }

    private titulo: String;

    public getTitulo(): String {
        return this.titulo;
    }

    public setTitulo(t:String) {
        this.titulo = t;
    }

}
