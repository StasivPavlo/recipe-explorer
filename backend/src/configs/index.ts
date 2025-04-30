import dotenv from 'dotenv';
import serverConfig from './server';
import apiConfig from './api';

dotenv.config();

const config = {
  server: serverConfig,
  api: apiConfig,
}

export default config;
