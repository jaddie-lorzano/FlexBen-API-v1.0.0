
export default class BaseRepository {
    constructor({
        db,
        dbName,
        table,
    }) {
        this._db = db;
        this._dbName = dbName
        this._table = table;
    }
    async getAll () {
        let sql = `SELECT * FROM ${this._dbName}.${this._table}`
        let [entities, _] = await this._db.execute(sql)
        return entities;
    }
}