import { eq } from 'drizzle-orm';
import { db } from '../drizzle';
import { SelectUser, usersTable } from '../schema';

export async function getUserById(
  id: SelectUser['id']
): Promise<Array<{ id: number; name: string; password: string }>> {
  return db.select().from(usersTable).where(eq(usersTable.id, id));
}
