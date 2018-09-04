import path from 'path'
import Postgrator from 'postgrator'
import { dbConnectionString } from '../config'

function getPostgrator() {
  return new Postgrator({
    driver: 'pg',
    connectionString: dbConnectionString,
    migrationDirectory: path.resolve(__dirname, './migrations'),
  })
}

export async function migrate() {
  try {
    console.log('Migrations starting.')
    const postgrator = getPostgrator()
    const applied = await postgrator.migrate()
    applied.forEach(m => console.log(`(${m.action}) ${m.version}: ${m.name}`))
    console.log('Migrations complete.')
  } catch (e) {
    console.log('Migrations failed.', e)
  }
}
