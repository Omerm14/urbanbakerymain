import { requireChatGPTUser } from "../chatgpt-auth";
import { getSiteContent } from "../../db/content";
import ContentEditor from "./ContentEditor";

export const dynamic = "force-dynamic";

export default async function EditorPage() {
  const user = await requireChatGPTUser("/editor");
  const content = await getSiteContent();

  return <ContentEditor initialContent={content} userName={user.displayName} />;
}
