import Equipamento from "../../entities/Equipamento";
import EquipamentoRepositoryInterface from "../../interfaces/EquipamentoRepositoryInterface";
import { SharedUseCaseInterface } from "../../shared/shared.use.case.interface";

interface findAllEquipamentoOutputDto {
  equipamento: Equipamento[];
}
export default class FindAllEquipamentoUseCase
  implements SharedUseCaseInterface
{
  private _equipamentoRepository: EquipamentoRepositoryInterface;

  constructor(equipamentoRepository: EquipamentoRepositoryInterface) {
    this._equipamentoRepository = equipamentoRepository;
  }

  async execute(): Promise<findAllEquipamentoOutputDto> {
    try {
      const equipamentos = await this._equipamentoRepository.findAll();

      console.log(equipamentos);
      const output: findAllEquipamentoOutputDto = {
        equipamento: equipamentos,
      };
      return output;
    } catch (error) {
      throw new Error("Erro ao buscar equipamentos");
    }
  }
}
