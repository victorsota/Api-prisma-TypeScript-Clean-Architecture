import Tipo from "../../entities/Tipo";
import TipoRepositoryInterface from "../../interfaces/TipoRepositoryInterface";
import { SharedUseCaseInterface } from "../../shared/shared.use.case.interface";

interface FindAllTipoOutputDto {
  tipo: Tipo[];
}

export default class FindAllTipoUseCase implements SharedUseCaseInterface {
  private _tipoRepository: TipoRepositoryInterface;

  constructor(tipoRepository: TipoRepositoryInterface) {
    this._tipoRepository = tipoRepository;
  }

  async execute(): Promise<FindAllTipoOutputDto> {
    try {
      const tipos = await this._tipoRepository.findAll();

      console.log(tipos);
      const output: FindAllTipoOutputDto = {
        tipo: tipos,
      };
      return output;
    } catch (error) {
      throw new Error("Erro ao buscar tipos");
    }
  }
}
