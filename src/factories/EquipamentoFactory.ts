import AddEquipamentoUseCase from "../application/equipamento/addEquipamentoUseCase";
import FindAllEquipamentoUseCase from "../application/equipamento/findAllEquipamentoUseCase";
import FindEquipamentoUseCase from "../application/equipamento/findEquipamentoUseCase";
import UpdateEquipamentoUseCase from "../application/equipamento/updateEquipamentoUseCase";
import EquipamentoFacade from "../facade/EquipamentoFacade";
import EquipamentoRepositoryImpl from "../repositories/EquipamentoRepository";

export default class EquipamentoFactory {
  static create() {
    const equipamentoRepository = new EquipamentoRepositoryImpl();
    const addEquipamentoUseCase = new AddEquipamentoUseCase(
      equipamentoRepository
    );
    const findAllEquipamentoUseCase = new FindAllEquipamentoUseCase(
      equipamentoRepository
    );
    const findEquipamentoUseCase = new FindEquipamentoUseCase(
      equipamentoRepository
    );
    const updateEquipamentoUseCase = new UpdateEquipamentoUseCase(
      equipamentoRepository
    );
    const equipamentoFacade = new EquipamentoFacade({
      addUseCase: addEquipamentoUseCase,
      findAllUseCase: findAllEquipamentoUseCase,
      findUseCase: findEquipamentoUseCase,
      updateUseCase: updateEquipamentoUseCase,
    });
    return equipamentoFacade;
  }
}
