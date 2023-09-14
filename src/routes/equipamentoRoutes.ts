import express, { Request, Response } from 'express';
import { EquipamentoUseCase } from '../UseCases/EquipamentoUseCase';

const equipamentoRouter = express.router();
const equipamentoUserCase = new EquipamentoUseCase();


equipamentoRouter.post('/equipamento',async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: "Erro interno"})
    }
})