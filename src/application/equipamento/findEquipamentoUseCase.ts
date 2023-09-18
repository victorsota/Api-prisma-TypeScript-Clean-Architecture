import Equipamento from "../../entities/Equipamento";
import EquipamentoRepositoryInterface from "../../interfaces/EquipamentoRepositoryInterface";
import { SharedUseCaseInterface } from "../../shared/shared.use.case.interface";

export interface FindEquipamentoInputDto {
  id: string;
}
export interface FindEquipamentoOutputDto {
  equipamento: Equipamento;
}
export default class FindEquipamentoUseCase implements SharedUseCaseInterface {
  private _equipamentoRepository: EquipamentoRepositoryInterface;
  constructor(equipamentoRepository: EquipamentoRepositoryInterface) {
    this._equipamentoRepository = equipamentoRepository;
  }
  async execute(
    input: FindEquipamentoInputDto
  ): Promise<FindEquipamentoOutputDto> {
    try {
      const equipamento = await this._equipamentoRepository.find(input.id);
      const output = {
        equipamento,
      };
      return output;
    } catch (error) {
      throw new Error("Erro ao buscar equipamento");
    }
  }
}
