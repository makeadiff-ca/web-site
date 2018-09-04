export function generateSql() {
  return `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  `
}
