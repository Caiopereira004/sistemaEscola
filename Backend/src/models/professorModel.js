import conexao from "../config/db.js";

export async function listarProfessoresDB(){
    const conn = await conexao.getConnection();

    try {
        const [resultado] = await conn.query("SELECT id, nome, email, telefone, especialidade FROM professores");

        return resultado;

    } finally{
        conn.release();
    }
};

export async function registarProfessorDB(){
    const conn = await conexao.getConnection();

    try{
        const [resultado] = await conn.query("INSERT INTO (nome, email, telefone, especialidade) VALUES (?, ?, ?, ?)", [nome, email, telefone, especialidade]);

        return resultado;

    }finally{
        conn.release();
    }
}

export async function atualizarProfessorDB(){
    const conn = await conexao.getConnection();

    try{
        await conn.query("UPDATE professores SET nome = ?, email = ?, telefone = ?, especialidade = ? WHERE id = ?", [nome, email, telefone, especialidade, id]);
    
    }finally{
        conn.release();
    }
}

export async function deletarProfessorDB(){
    const conn = await conexao.getConnection();

    try{
        const [resultado] = await conn.query("DELETE FROM professores WHERE id = ?", [id]);

        return resultado;

    }finally{
        conn.release();
    }
}