import { Tipo } from "../entities/Tipo";
import { TipoRepository } from "../repositories/TipoRepository";

export class TipoUseCase {
  private tipoRepository: TipoRepository;

  constructor() {
    this.tipoRepository = new TipoRepository();
  }

  async createTipo(tipo: Tipo) {
    return await this.tipoRepository.createTipo(tipo);
  }
}
