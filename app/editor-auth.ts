import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const EDITOR_SESSION_COOKIE = "editor_session";

function hash(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);
  if (bufferA.length !== bufferB.length) return false;
  return timingSafeEqual(bufferA, bufferB);
}

export function getEditorPassword(): string | null {
  const password = process.env.EDITOR_PASSWORD;
  return password && password.length > 0 ? password : null;
}

export function verifyEditorPassword(candidate: string): boolean {
  const password = getEditorPassword();
  if (!password) return false;
  return safeEqual(hash(candidate), hash(password));
}

export function editorSessionToken(): string | null {
  const password = getEditorPassword();
  return password ? hash(password) : null;
}

export async function isEditorAuthenticated(): Promise<boolean> {
  const expected = editorSessionToken();
  if (!expected) return false;

  const cookieStore = await cookies();
  const value = cookieStore.get(EDITOR_SESSION_COOKIE)?.value;
  if (!value) return false;

  return safeEqual(value, expected);
}
