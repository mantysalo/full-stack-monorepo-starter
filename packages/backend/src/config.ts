import dotenv from "dotenv";
import pino from "pino";

const logger = pino({ prettyPrint: true });

dotenv.config();

export const getDbConfig = (): typeof dbConfig => {
  const dbConfig = {
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: Number(process.env.DB_PORT),
  };

  const emptyEnvVariables = Object.entries(dbConfig).filter((entry) => !entry[1]);

  if (emptyEnvVariables.length) {
    emptyEnvVariables.forEach((entry) =>
      logger.error("Environment variable not set for: %s", entry[0])
    );
    throw new Error(
      "Please create a .env file in the project root or declare the missing environment variables some other way."
    );
  } else {
    return dbConfig;
  }
};

export const koaPort = Number(process.env.KOA_PORT) || 4000;
