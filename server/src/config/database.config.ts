import { registerAs } from '@nestjs/config';

export default registerAs('postgres', () => ({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  database: process.env.POSTGRES_DB || 'resumebuilder',
  username: process.env.POSTGRES_USER || 'postgress',
  password: process.env.POSTGRES_PASSWORD || 'postgress',
  certificate: process.env.POSTGRES_SSL_CERT,
}));
