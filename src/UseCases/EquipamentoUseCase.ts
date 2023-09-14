import { Equipamento } from "../entities/Equipamento";
import { EquipamentoRepository } from "../repositories/EquipamentoRepository";

export class EquipamentoUseCase{
    private equipamentoRepository : EquipamentoRepository;

    constructor(){
        this.equipamentoRepository = new EquipamentoRepository();
    }

    async createEquipamento(equipamento: Equipamento){
        return await this.equipamentoRepository.createEquipamento(equipamento)
    }
 }