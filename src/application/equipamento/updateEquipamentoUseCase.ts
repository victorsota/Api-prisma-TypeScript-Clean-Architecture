import Equipamento from "../../entities/Equipamento";
import Tipo from "../../entities/Tipo";
import EquipamentoRepositoryInterface from "../../interfaces/EquipamentoRepositoryInterface";
import { SharedUseCaseInterface } from "../../shared/shared.use.case.interface";

interface UpdateEquipamentoInputDto {
  id: string;
  name: string;
  tipo: Tipo;
  description: string;
}
interface UpdateEquipamentoOutputDto {
  equipamento: Equipamento;
}
export default class UpdateEquipamentoUseCase
  implements SharedUseCaseInterface
{
  private _equipamentoRepository;
  constructor(equipamentoRepository: EquipamentoRepositoryInterface) {
    this._equipamentoRepository = equipamentoRepository;
  }
  async execute(
    input: UpdateEquipamentoInputDto
  ): Promise<UpdateEquipamentoOutputDto> {
    try {
      const equipamento = await this._equipamentoRepository.update(input.id);
      if (!equipamento) {
        throw new Error("Equipamento não encontrado");
      }
      const equipamentoUpdate = new Equipamento({
        name: input.name,
        tipo: input.tipo,
        description: input.description,
      });
      await this._equipamentoRepository.update(equipamentoUpdate);
      const output = {
        equipamento: equipamentoUpdate,
      };
      return output;
    } catch (error) {
      throw new Error("Erro ao atualizar equipamento");
    }
  }
}
