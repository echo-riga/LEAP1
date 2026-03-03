import { sql } from "@/lib/db";

export default async function Page() {
  const result = await sql`SELECT version()`;

  return (
    <div>
      <h1>Connected to Neon!</h1>
      <p>{result[0].version}</p>
    </div>
  );
}
