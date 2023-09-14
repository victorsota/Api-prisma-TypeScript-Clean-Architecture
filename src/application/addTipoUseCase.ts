import Tipo from "../entities/Tipo";
import TipoRepositoryInterface from "../interfaces/TipoRepositoryInterface";

interface AddTipoInputDto {
  name: string;
  description: string;
}

interface AddTipoOutputDto {
  tipo: Tipo;
}

export default class AddTipoUseCase {
  private _tipoRepository: TipoRepositoryInterface;

  constructor(tipoRepository: TipoRepositoryInterface) {
    this._tipoRepository = tipoRepository;
  }

  async execute(input: AddTipoInputDto): Promise<AddTipoOutputDto> {
    try {
      const newTipo = new Tipo({
        name: input.name,
        description: input.description,
      });
      await this._tipoRepository.add(newTipo);
      const output: AddTipoOutputDto = {
        tipo: newTipo,
      };
      return output;
    } catch (error) {
      throw new Error("Erro ao adicionar tipo");
    }
  }
}
