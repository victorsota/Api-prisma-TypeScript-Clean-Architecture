import Equipamento from "../entities/Equipamento";
import Tipo from "../entities/Tipo";
import { SharedUseCaseInterface } from "../shared/shared.use.case.interface";

export interface createdEquipamentoinputDTO {
  name: string;
  tipo: Tipo;
  description: string;
}

export interface createdEquipamentoOutputDTO {
  equipamento: Equipamento;
}

export interface findAllEquipamentoInputDTO {}

export interface findAllEquipamentoOutputDTO {
  equipamentos: Equipamento[];
}

export interface findEquipamentoInputDTO {
  id: string;
}

export interface findEquipamentoOutputDTO {
  equipamento: Equipamento;
}

export interface updateEquipamentoInputDTO {
  id: string;
  name: string;
  tipo: Tipo;
  description: string;
}

export interface updateEquipamentoOutputDTO {
  equipamento: Equipamento;
}

export interface EquipamentoFacadeInterface {
  createEquipamento(
    input: createdEquipamentoinputDTO
  ): Promise<createdEquipamentoOutputDTO>;
  findAllEquipamento(
    input: findAllEquipamentoInputDTO
  ): Promise<findAllEquipamentoOutputDTO>;
  findEquipamento(
    input: findEquipamentoInputDTO
  ): Promise<findEquipamentoOutputDTO>;
  updateEquipamento(
    input: updateEquipamentoInputDTO
  ): Promise<updateEquipamentoOutputDTO>;
}

export interface UseCaseProps {
  addUseCase: SharedUseCaseInterface;
  findUseCase: SharedUseCaseInterface;
  findAllUseCase: SharedUseCaseInterface;
  updateUseCase: SharedUseCaseInterface;
}

export default class EquipamentoFacade implements EquipamentoFacadeInterface {
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

  async createEquipamento(
    input: createdEquipamentoinputDTO
  ): Promise<createdEquipamentoOutputDTO> {
    try {
      const equipamento = await this._addUseCase.execute(input);
      const output = {
        equipamento,
      };
      return output;
    } catch (error) {
      throw new Error("Erro ao criar equipamento");
    }
  }

  async findAllEquipamento(
    input: findAllEquipamentoInputDTO
  ): Promise<findAllEquipamentoOutputDTO> {
    try {
      const equipamentos = await this._findAllUseCase.execute(input);
      const output = {
        equipamentos,
      };
      return output;
    } catch (error) {
      throw new Error("Erro ao buscar equipamentos");
    }
  }

  async findEquipamento(
    input: findEquipamentoInputDTO
  ): Promise<findEquipamentoOutputDTO> {
    try {
      const equipamento = await this._findUseCase.execute(input);
      const output = {
        equipamento,
      };
      return output;
    } catch (error) {
      throw new Error("Erro ao buscar equipamento");
    }
  }

  async updateEquipamento(
    input: updateEquipamentoInputDTO
  ): Promise<updateEquipamentoOutputDTO> {
    try {
      const equipamento = await this._updateUseCase.execute(input);
      const output = {
        equipamento,
      };
      return output;
    } catch (error) {
      throw new Error("Erro ao atualizar equipamento");
    }
  }
}
