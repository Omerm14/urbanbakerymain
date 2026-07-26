import { cookies } from "next/headers";
import {
  EDITOR_SESSION_COOKIE,
  editorSessionToken,
  getEditorPassword,
  verifyEditorPassword,
} from "../../editor-auth";

function readPassword(payload: unknown): string {
  if (payload && typeof payload === "object" && "password" in payload) {
    const value = (payload as Record<string, unknown>).password;
    if (typeof value === "string") return value;
  }
  return "";
}

export async function POST(request: Request) {
  if (!getEditorPassword()) {
    return Response.json(
      { error: "Editor is not configured. Set the EDITOR_PASSWORD environment variable." },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const password = readPassword(payload);
  if (!verifyEditorPassword(password)) {
    return Response.json({ error: "Incorrect password" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set(EDITOR_SESSION_COOKIE, editorSessionToken()!, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return Response.json({ ok: true });
}
