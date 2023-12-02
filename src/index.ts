
import 'reflect-metadata';
import fs from 'fs';
import path from 'path';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import {errorHandler} from '@/middleware/error-handler';
import {envVarConfig} from '@/config/env-var-config';

export const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

try {
  const accessLogStream = fs.createWriteStream(path.join(__dirname, '../log/access.log'), {
    flags: 'a',
  });
  app.use(morgan('combined', { stream: accessLogStream }));
} catch (err) {
  console.log(err);
}
app.use(morgan('combined'));

//app.use('/', routes);

app.use(errorHandler);

const port = envVarConfig.port;
app.listen(port, async () => {
  //assertDbOrmType(envVarConfig.dbOrmType);
  //await dbCreateConnection(envVarConfig.dbOrmType as DbOrmType).createDbConnection()
  console.log(`Server running on port ${port}`);
});