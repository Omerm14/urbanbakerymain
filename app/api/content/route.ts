import { isEditorAuthenticated } from "../../editor-auth";
import { getSiteContent, saveSiteContent } from "../../../db/content";

export async function GET() {
  if (!(await isEditorAuthenticated())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  return Response.json({ content: await getSiteContent() });
}

export async function PUT(request: Request) {
  if (!(await isEditorAuthenticated())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  try {
    const content = await saveSiteContent(payload, "editor");
    return Response.json({ content });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Save failed";
    return Response.json({ error: message }, { status: 500 });
  }
}
