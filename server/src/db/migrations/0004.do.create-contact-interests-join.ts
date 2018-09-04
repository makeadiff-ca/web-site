export function generateSql() {
  return `
    CREATE TABLE contact_contact_interests (
      contact_id integer NOT NULL,
      contact_interest_id integer NOT NULL
    );

    CREATE UNIQUE INDEX contact_contact_interest_pair
    ON contact_contact_interests (contact_id, contact_interest_id);
  `
}
