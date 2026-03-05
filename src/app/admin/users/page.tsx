import { AdminUsersClient } from "@/app/admin/users/UsersClient";
import { sql } from "@/lib/db";

type User = {
  id: string;
  name: string;
  email: string;
  department: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export default async function AdminUsersPage() {
  const users = (await sql`
    SELECT id, name, email, department, role, "createdAt", "updatedAt"
    FROM "user"
    ORDER BY "createdAt" DESC
  `) as unknown as User[];

  return <AdminUsersClient users={users} />;
}
