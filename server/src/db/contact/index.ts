import { Pool, PoolClient } from 'pg'
import * as db from '../'

type Queryable = Pool | PoolClient

export interface Contact {
  id: number
  name: string
  email: string
  created_at: number
}

export interface ContactInterest {
  id: number
  value: string
}

export async function findAllContactInterests(): Promise<ContactInterest[]> {
  const result = await db.query(`SELECT * FROM contact_interests`)
  return result.rows
}

async function createContactOnQueryable(
  queryable: Queryable,
  name: string,
  email: string,
): Promise<Contact> {
  const contact = await queryable.query(
    `INSERT INTO contacts (name, email, created_at)
      VALUES ($1, $2, NOW())
      RETURNING id, name, email, created_at`,
    [name, email],
  )

  if (contact.rowCount === 1) {
    return contact.rows[0]
  } else {
    throw new Error('createContactOnQueryable failed.')
  }
}

async function createContactsContactInterestsOnQueryable(
  queryable: Queryable,
  contact_id: number,
  interest_ids: number[],
): Promise<number[]> {
  const contact = await queryable.query(
    `INSERT INTO contact_contact_interests (contact_id, contact_interest_id)
      VALUES ${interest_ids.map((_, i) => `($1, $${i + 2})`).join(', ')}`,
    [contact_id, ...interest_ids],
  )
  console.log('B')

  if (contact.rowCount === interest_ids.length) {
    return interest_ids
  } else {
    throw new Error('createContactsContactInterestsOnQueryable failed.')
  }
}

export async function createContactWithInterests(
  name: string,
  email: string,
  interest_ids: number[],
): Promise<null> {
  return await db.transact(async client => {
    const contact = await createContactOnQueryable(client, name, email)
    await createContactsContactInterestsOnQueryable(
      client,
      contact.id,
      interest_ids,
    )
    return null
  })
}
