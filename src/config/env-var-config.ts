import 'dotenv/config';

class EnvVarConfig {
  static instance = new EnvVarConfig();

  private constructor() {
  }

  public static getInstance() {
    return this.instance;
  }

  get nodeEnv() {
    return process.env.NODE_ENV || "development";
  }

  get port() {
    return process.env.PORT || 8080;
  }
  get dbOrmType() {
    return process.env.DB_ORM_TYPE || "typeorm";
  }

  get dbType() {
    return process.env.DB_TYPE || "mysql";
  }

  get dbHost() {
    return process.env.DB_HOST || "localhost";
  }

  get dbPort() {
    return process.env.DB_PORT || 3306;
  }

  get dbUsername() {
    return process.env.DB_USERNAME || "test";
  }

  get dbPassword() {
    return process.env.DB_PASSWORD || "test";
  }

  get dbDatabase() {
    return process.env.DB_DATABASE || "test";
  }

  get dbEntities() {
    return process.env.DB_ENTITIES || "src/entity/*.js";
  }

}

export const envVarConfig = EnvVarConfig.getInstance();