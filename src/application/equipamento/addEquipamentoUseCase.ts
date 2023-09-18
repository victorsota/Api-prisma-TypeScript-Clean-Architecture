import Equipamento from "../../entities/Equipamento";
import Tipo from "../../entities/Tipo";
import EquipamentoRepositoryInterface from "../../interfaces/EquipamentoRepositoryInterface";

interface AddEquipamentoInputDto {
  name: string;
  description: string;
  tipo: Tipo;
}

interface AddEquipamentoOutputDto {
  equipamento: Equipamento;
}

export default class AddEquipamentoUseCase {
  private _equipamentoRepository: EquipamentoRepositoryInterface;

  constructor(equipamentoRepository: EquipamentoRepositoryInterface) {
    this._equipamentoRepository = equipamentoRepository;
  }

  async execute(
    input: AddEquipamentoInputDto
  ): Promise<AddEquipamentoOutputDto> {
    try {
      const newEquipamento = new Equipamento({
        name: input.name,
        description: input.description,
        tipo: input.tipo,
      });
      await this._equipamentoRepository.add(newEquipamento);
      const output: AddEquipamentoOutputDto = {
        equipamento: newEquipamento,
      };
      return output;
    } catch (error) {
      throw new Error("Erro ao adicionar equipamento");
    }
  }
}
