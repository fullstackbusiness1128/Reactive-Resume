import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  jwtSecret: process.env.JWT_SECRET || 'asdfasdfasdf',
  jwtExpiryTime: parseInt(process.env.JWT_EXPIRY_TIME, 10),
}));
