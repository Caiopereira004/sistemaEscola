import bcrypt from "bcryptjs";
import { listarUsuarios } from "../models/usuarioModel.js";

export const listarUsuarios = async (req,res) =>{

    try{
        const usuarios = await listarUsuarios();
            res.json(usuarios);

    } catch (error){
        res.status(500).json({msg: "Erro ao listar usuários", erro: error.message})
    }
};

export const