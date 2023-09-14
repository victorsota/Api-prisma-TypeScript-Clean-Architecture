import { PrismaClient } from "@prisma/client";
import Tipo from "../entities/Tipo";
import TipoRepositoryInterface from "../interfaces/TipoRepositoryInterface";

const prisma = new PrismaClient();

export default class TipoRepositoryImpl implements TipoRepositoryInterface {
  async add(tipo: Tipo): Promise<void> {
    try {
      await prisma.tipo.create({
        data: {
          id: tipo.id,
          name: tipo.name,
          description: tipo.description,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  async findAll(): Promise<Tipo[]> {
    try {
      const tipos = await prisma.tipo.findMany();
      return tipos;
    } catch (error) {
      throw error;
    }
  }
  async find(id: string): Promise<Tipo> {
    try {
      const tipo = await prisma.tipo.findFirst({
        where: {
          id,
        },
      });
      return tipo;
    } catch (error) {
      throw error;
    }
  }
  async update(tipo: Tipo): Promise<void> {
    try {
      await prisma.tipo.update({
        where: {
          id: tipo.id,
        },
        data: {
          name: tipo.name,
          description: tipo.description,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
