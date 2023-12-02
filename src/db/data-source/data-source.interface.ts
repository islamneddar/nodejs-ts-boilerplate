import {DataSource} from 'typeorm';

export type DataSourceType = DataSource
export interface DataSourceDatabaseInterface {
  dataSource : DataSourceType;
  connect: () => Promise<void>;
}