import { Endereco } from "./endereco"

export abstract class Pessoa {
    id!:Number
    nome!: string
    dataNascimento!: Date
    documento!: string
    telefone!: string
    enderecoPessoa: Endereco = new Endereco()
}