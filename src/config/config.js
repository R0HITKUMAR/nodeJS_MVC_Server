import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

const config = {
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  ENCRYPTION_SECRET_KEY: process.env.ENCRYPTION_SECRET_KEY,
  ENCRYPTION_SECRET_IV: process.env.ENCRYPTION_SECRET_IV,
  ENCRYPTION_METHOD: process.env.ENCRYPTION_METHOD,
  MONGO_URL: process.env.MONGO_URL
};

export default config;
