import { create } from "domain";
import { Equipamento, createEquipamento } from "../entities/Equipamento";


export class EquipamentoRepository{
    async createEquipamento(equipamento : Equipamento): Promise<Equipamento | null>{
        return await createEquipamento(equipamento)
    }
}