module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'secret',
  database: 'projeto-nodejs', // alterar em caso de bancos de dados com nomes diferentes
  define: {
    timestamp: true, // cria duas colunas: createdAt e updatedAt
    underscored: true,
    underscoredAll: true,
  },
};
