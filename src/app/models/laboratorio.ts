import { Endereco } from "./endereco"

export abstract class Laboratorio {
    id!: number
    nomeLaboratorio!: string
    especialidade!: string
    enderecoLaboratorio: Endereco = new Endereco();
}