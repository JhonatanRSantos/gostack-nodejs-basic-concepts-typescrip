import path from 'path';
import { config } from 'dotenv';

try {
  const file = path.join(__dirname, '..', '..', `.env.${process.env.NODE_ENV}`);
  const environment = config({
    path: path.resolve(file)
  }).parsed;

  if (environment) {
    Object.keys(environment).forEach((key) => {
      process.env[`${key}`] = environment[`${key}`];
    });
  } else {
    throw Error(`No file found at ${file}`);
  }
} catch (e) {
  console.error(`Can't read the environment file. Cause: ${e.message}`);
  process.exit(1);
}
