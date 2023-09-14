import Tipo from "../entities/Tipo";
import TipoRepositoryInterface from "../interfaces/TipoRepositoryInterface";
import { SharedUseCaseInterface } from "../shared/shared.use.case.interface";

export interface FindTipoInputDto {
  id: string;
}

export interface FindTipoOutputDto {
  tipo: Tipo;
}

export default class FindTipoUseCase implements SharedUseCaseInterface {
  private _tipoRepository: TipoRepositoryInterface;

  constructor(tipoRepository: TipoRepositoryInterface) {
    this._tipoRepository = tipoRepository;
  }

  async execute(input: FindTipoInputDto): Promise<FindTipoOutputDto> {
    try {
      const tipo = await this._tipoRepository.find(input.id);
      const output: FindTipoOutputDto = {
        tipo,
      };
      return output;
    } catch (error) {
      throw new Error("Erro ao buscar tipo");
    }
  }
}
