import {DataSourceTypeOrm} from '@/db/data-source/typeorm/data-source-typeorm';
import {DbOrmType} from '@/db/types';
import {DataSourceDatabaseInterface} from '@/db/data-source/data-source.interface';

class DbCreateConnection {
  private readonly createDbConnectionMap : Record<DbOrmType, DataSourceDatabaseInterface> = {
    "typeorm" : DataSourceTypeOrm.getInstance()
  }
  constructor(readonly dbOrmType: DbOrmType) {}

  getDataSource() {
    return this.createDbConnectionMap[this.dbOrmType].dataSource;
  }

  async createDbConnection() {
    try {
      await this.createDbConnectionMap[this.dbOrmType].connect();
      console.log(`Database connection success. Connection name:'`);
    } catch (err) {
      console.log(err);
    }
  }
}

export const dbCreateConnection = (dbOrmType: DbOrmType) => {
  return new DbCreateConnection(dbOrmType);
}