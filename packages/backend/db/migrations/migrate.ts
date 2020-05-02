import { migrate } from "postgres-migrations";
import { getDbConfig } from "../../src/config";

(async function (): Promise<void> {
  const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } = getDbConfig();
  await migrate(
    {
      database: DB_NAME,
      user: DB_USERNAME,
      password: DB_PASSWORD,
      host: DB_HOST,
      port: DB_PORT,
    },
    "./db/migrations"
  );
})().catch(console.error);
