import {DataSource} from 'typeorm';
import {DataSourceDatabaseInterface} from '@/db/data-source/data-source.interface';

export class DataSourceTypeOrm implements DataSourceDatabaseInterface{
  private static instance = new DataSourceTypeOrm();
  dataSource: DataSource;
  private constructor() {
    this.dataSource = new DataSource({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "test",
      password: "test",
      database: "test",
      entities: ["src/entity/*.js"],
      logging: true,
      synchronize: true,
    })
  }

  public static getInstance() {
    return this.instance;
  }

  async connect(): Promise<void> {
    await this.dataSource.initialize();
  }
}
