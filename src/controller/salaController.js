const GetAllSalasDeAula = async (req, res) => {
  const sql = "SELECT * FROM salasdeaula WHERE removido = false";
  return res.send(sql);
};

const GetSalasDeAulaByID = async (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM salasdeaula WHERE saladeaulaid = ${id} AND removido = false`;
  return res.send(sql);
};

const InsertSalasDeAula = async (req, res) => {
  const { descricao, localizacao, capacidade, removido } = req.body;
  const sql = `INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido)
               VALUES ('${descricao}', '${localizacao}', ${capacidade}, ${removido})`;
  return res.send(sql);
};

const UpdateSalasDeAula = async (req, res) => {
  const { id } = req.params;
  const { descricao, localizacao, capacidade, removido } = req.body;
  const sql = `UPDATE salasdeaula 
               SET descricao = '${descricao}', localizacao = '${localizacao}',
                   capacidade = ${capacidade}, removido = ${removido} 
               WHERE saladeaulaid = ${id}`;
  return res.send(sql);
};

const DeleteSalasDeAula = async (req, res) => {
  const { id } = req.params;
  const sql = `UPDATE salasdeaula SET removido = true WHERE saladeaulaid = ${id}`;
  return res.send(sql);
};

module.exports = {
  GetAllSalasDeAula,
  GetSalasDeAulaByID,
  InsertSalasDeAula,
  UpdateSalasDeAula,
  DeleteSalasDeAula,
};
