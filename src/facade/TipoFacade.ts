import Tipo from "../entities/Tipo";
import { SharedUseCaseInterface } from "../shared/shared.use.case.interface";

export interface createTipoFacadeInputDTO {
  name: string;
  description: string;
}
export interface createTipoFacadeOutputDTO {
  tipo: Tipo;
}

export interface findAllTipoFacadeInputDTO {}

export interface findAllTipoFacadeOutputDTO {
  tipos: Tipo[];
}

export interface findTipoFacadeInputDTO {
  id: string;
}

export interface findTipoFacadeOutputDTO {
  tipo: Tipo;
}

export interface updateTipoFacadeInputDTO {
  id: string;
  name: string;
  description: string;
}

export interface updateTipoFacadeOutputDTO {
  tipo: Tipo;
}

export interface TipoFacadeInterface {
  createTipo(
    input: createTipoFacadeInputDTO
  ): Promise<createTipoFacadeOutputDTO>;
  findAllTipo(
    input: findAllTipoFacadeInputDTO
  ): Promise<findAllTipoFacadeOutputDTO>;
  findTipo(input: findTipoFacadeInputDTO): Promise<findTipoFacadeOutputDTO>;
  updateTipo(
    input: updateTipoFacadeInputDTO
  ): Promise<updateTipoFacadeOutputDTO>;
}

export interface UseCaseProps {
  addUseCase: SharedUseCaseInterface;
  findUseCase: SharedUseCaseInterface;
  findAllUseCase: SharedUseCaseInterface;
  updateUseCase: SharedUseCaseInterface;
}

export default class TipoFacade implements TipoFacadeInterface {
  private _addUseCase: SharedUseCaseInterface;
  private _findUseCase: SharedUseCaseInterface;
  private _findAllUseCase: SharedUseCaseInterface;
  private _updateUseCase: SharedUseCaseInterface;

  constructor(props: UseCaseProps) {
    this._addUseCase = props.addUseCase;
    this._findUseCase = props.findUseCase;
    this._findAllUseCase = props.findAllUseCase;
    this._updateUseCase = props.updateUseCase;
  }

  async createTipo(
    input: createTipoFacadeInputDTO
  ): Promise<createTipoFacadeOutputDTO> {
    const tipo = await this._addUseCase.execute(input);
    return { tipo };
  }

  async findAllTipo(
    input: findAllTipoFacadeInputDTO
  ): Promise<findAllTipoFacadeOutputDTO> {
    const tipos = await this._findAllUseCase.execute(input);
    return { tipos };
  }

  async findTipo(
    input: findTipoFacadeInputDTO
  ): Promise<findTipoFacadeOutputDTO> {
    const tipo = await this._findUseCase.execute(input);
    return { tipo };
  }

  async updateTipo(
    input: updateTipoFacadeInputDTO
  ): Promise<updateTipoFacadeOutputDTO> {
    const tipo = await this._updateUseCase.execute(input);
    return { tipo };
  }
}
