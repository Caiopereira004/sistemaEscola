import conexao from "../config/db.js";

export async function listarUsuarios(){
    const conn = await conexao.getConnection();

    try{
        const [usuarios] = await conn.query(`
            SELECT id, nome, email, perfil, criado_em FROM usuarios`)

    }finally{
        conn.release();
    }
}

export async function atualizarUsuario(id){
    const conn = await conexao.getConnection();

    try{
        await conn.query("UPDATE nome = ?, email = ?, perfil = ? WHERE id = ?", [nome, email, perfil, id]);
    } finally{
        conn.release();
    }
}

export async function deletarUsuario(id){
    const conn = await conexao.getConnection();

    try{
        const resultado = await conn.query("DELETE FROM usuarios WHERE di = ?", [id]);

        return resultado;
    }finally{
        conn.release();
    }
}