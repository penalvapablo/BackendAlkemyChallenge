import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || '8080',
  cors: process.env.CORS || '*',
  JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  SENDGRID_EMAIL: process.env.SENDGRID_EMAIL,
};
