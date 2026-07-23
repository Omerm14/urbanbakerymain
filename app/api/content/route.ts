import { getChatGPTUser } from "../../chatgpt-auth";
import { getSiteContent, saveSiteContent } from "../../../db/content";

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  return Response.json({ content: await getSiteContent() });
}

export async function PUT(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const content = await saveSiteContent(payload, user.email);
  return Response.json({ content });
}
