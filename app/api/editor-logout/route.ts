import { cookies } from "next/headers";
import { EDITOR_SESSION_COOKIE } from "../../editor-auth";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete(EDITOR_SESSION_COOKIE);
  return Response.json({ ok: true });
}
