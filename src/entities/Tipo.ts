import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export interface Tipo {
  id: number;
  name: string;
  description: string;
}

export async function createTipo(tipo: Tipo) {
  const newTipo = await prisma.tipo.create({
    data: {
      name: tipo.name,
      description: tipo.description,
    },
  });
  return newTipo;
}
