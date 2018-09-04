import { Pool, PoolClient, QueryConfig } from 'pg'
import * as config from '../config'

const pool = new Pool({
  database: 'pg',
  connectionString: config.dbConnectionString,
})

export function query(text: string | QueryConfig, values?: any[]) {
  return pool.query(text, values)
}

export function getPool() {
  return pool
}

export function getClient() {
  return pool.connect()
}

export async function transact<T>(body: (client: PoolClient) => Promise<T>) {
  const client = await getClient()
  await client.query('BEGIN')

  try {
    const result = await body(client)
    await client.query('COMMIT')
    return result
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }
}
