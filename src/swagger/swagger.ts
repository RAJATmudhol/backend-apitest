import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

export const setupSwagger = (app: express.Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  console.log('Swagger docs available at http://localhost:3000/api-docs');
};
