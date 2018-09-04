export function generateSql() {
  return `
    CREATE TABLE contact_interests (
      id    serial PRIMARY KEY,
      value varchar(128) NOT NULL,
      CONSTRAINT contact_interests_value UNIQUE(value)
    );
  `
}
