import { listarProfessoresDB, registarProfessorDB, atualizarProfessorDB, deletarProfessorDB } from "../models/professorModel";

export const listarProfessores = async (req,res) =>{
    try {
        const professores = await listarProfessores.listarProfessoresDB();

        return res.json(professores)

    } catch (error) {
        console.log(error);

        return res.status(500).json({msg: "Erro ao listar professores"});
    }
}

export const registarProfessor = async (req,res) =>{
    const {nome, email, telefone, especialidade} = req.body;

    try{
        if(!nome || !email || !telefone || !especialidade){
            return res.status(400).json({msg: "Nome, email, telefone e especialidade são obrigatório!"});
        }

        await registarProfessor.registarProfessorDB();

        return res.status(201).json({msg: "Professor(a) registrado(a) com sucesso!"});

    } catch(error){
        return res.status(500).json({msg: "Erro ao registrar professor(a)", erro: error.message});
    }
}

export const atualizarProfessor = async (req, res) =>{
    const {id} = req.params;
    const {nome, email, telefone, especialidade} = req.body;

    try {
        if(!nome || !email || !telefone || !especialidade){
            return res.status(400).json({msg: "Nome, email, telefone e especialidade são obrigatórios!"});
        }
               const professor = await atualizarProfessor.atualizarProfessorDB();
        return
    } catch (error) {
        return res.status(500).json({msg: "Erro ao atualizar professor(a)"});
    }
}