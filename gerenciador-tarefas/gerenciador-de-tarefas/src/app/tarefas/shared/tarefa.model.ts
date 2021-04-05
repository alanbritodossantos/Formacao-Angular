export class Tarefa{

  //o "?" quer dizer que o atributo é opcional ou seja, não é obrigatório, caso seja retirado o "?", tornará a atributo obrigatório
  constructor(
    public id?: number,
    public nome?: string,
    public concluida?: boolean)
  {
  }
}
