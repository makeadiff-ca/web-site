export function generateSql() {
  const interests = [
    'Software Development',
    'Software Project Management',
    'Software Solution Design',
    'Operations (DevOps)',
    'UI Design',
    'UX Design',
  ]
  return `
    INSERT INTO contact_interests (value)
    VALUES ${interests.map(i => `('${i}')`).join(', ')}
    ON CONFLICT DO NOTHING;
  `
}
