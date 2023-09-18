import { PrismaClient } from "@prisma/client";
import Equipamento from "../entities/Equipamento";

const prisma = new PrismaClient();

export default class EquipamentoRepositoryImpl {
  async add(equipamento: Equipamento): Promise<void> {
    try {
      await prisma.equipamento.create({
        data: {
          id: equipamento.id,
          name: equipamento.name,
          tipo: equipamento.tipo,
          description: equipamento.description,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  async findAll(): Promise<Equipamento[]> {
    try {
      const equipamentos = await prisma.equipamento.findMany();
      return equipamentos;
    } catch (error) {
      throw error;
    }
  }
  async find(id: string): Promise<Equipamento> {
    try {
      const equipamento = await prisma.equipamento.findFirst({
        where: {
          id,
        },
      });
      return equipamento;
    } catch (error) {
      throw error;
    }
  }
  async update(equipamento: Equipamento): Promise<void> {
    try {
      await prisma.equipamento.update({
        where: {
          id: equipamento.id,
        },
        data: {
          name: equipamento.name,
          tipo: equipamento.tipo,
          description: equipamento.description,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
