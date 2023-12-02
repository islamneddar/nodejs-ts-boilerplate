export type DbOrmType = "typeorm"


export const assertDbOrmType = (dbOrmType: string): DbOrmType => {
  if (dbOrmType !== "typeorm") {
    throw new Error(`Invalid dbOrmType: ${dbOrmType}`);
  }
  return dbOrmType;
}