import Tipo from "../entities/Tipo";
import TipoRepositoryInterface from "../interfaces/TipoRepositoryInterface";
import { SharedUseCaseInterface } from "../shared/shared.use.case.interface";

interface UpdateTipoInputDto {
  id: string;
  name: string;
  description: string;
}

interface UpdateTipoOutputDto {
  tipo: Tipo;
}

export default class UpdateTipoUseCase implements SharedUseCaseInterface {
  private _tipoRepository: TipoRepositoryInterface;

  constructor(tipoRepository: TipoRepositoryInterface) {
    this._tipoRepository = tipoRepository;
  }

  async execute(input: UpdateTipoInputDto): Promise<UpdateTipoOutputDto> {
    try {
      const tipo = await this._tipoRepository.update(input.id);
      if (!tipo) {
        throw new Error("Tipo não encontrado");
      }
      const TipoUpdate = new Tipo({
        name: input.name,
        description: input.description,
      });
      await this._tipoRepository.update(TipoUpdate);
      const output: UpdateTipoOutputDto = {
        tipo: TipoUpdate,
      };
      return output;
    } catch (error) {
      throw new Error("Erro ao atualizar tipo");
    }
  }
}
