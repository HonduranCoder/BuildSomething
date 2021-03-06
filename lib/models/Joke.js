const pool = require('../utils/pool');

module.exports = class Joke {
  id;
  joke;

  constructor(row) {
    this.id = row.id;
    this.joke = row.joke;
  }

  static async insert(joke) {
    const { rows } = await pool.query(
      'INSERT INTO jokes (joke) VALUES ($1) RETURNING *',
      [joke]
    );

    return new Joke(rows[0]);
  }
  static async getAllJokes() {
    const { rows } = await pool.query('SELECT * from jokes');
    return rows.map((row) => new Joke(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * from jokes WHERE id=$1', [id]);
    return new Joke(rows[0]);
  }
  static async update(id, joke) {
    const { rows } = await pool.query(
      'UPDATE jokes SET joke=$1 WHERE id=$2 RETURNING *',
      [joke, id]
    );
    return new Joke(rows[0]);
  }
  static async deleteId(id) {
    const { rows } = await pool.query(
      'DELETE from jokes WHERE id=$1 RETURNING *',
      [id]
    );
    return new Joke(rows[0]);
  }
};
//make method for each: update(keyword you use in SQL), get, delete
