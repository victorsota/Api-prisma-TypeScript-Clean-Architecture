import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export interface Equipamento{
    id: number
    nome: string
    codDominio: string
    tipoId: number
}

export async function createEquipamento(equipamento:Equipamento){
    const newEquipamento = prisma.equipamento.create({
        data: {
            nome: equipamento.nome,
            codDominio: equipamento.codDominio,
            tipoId: equipamento.tipoId
        }
    });
    return newEquipamento;
}