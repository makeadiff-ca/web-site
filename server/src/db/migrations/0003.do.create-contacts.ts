export function generateSql() {
  return `
    CREATE TABLE contacts (
      id         serial PRIMARY KEY,
      name       varchar(128) NOT NULL,
      email      varchar(256) NOT NULL,
      created_at timestamp NOT NULL
    );
    CREATE INDEX contacts_created_at ON contacts (created_at);
  `
}
