import { getEditorPassword, isEditorAuthenticated } from "../editor-auth";
import { getSiteContent } from "../../db/content";
import ContentEditor from "./ContentEditor";
import EditorLogin from "./EditorLogin";

export const dynamic = "force-dynamic";

export default async function EditorPage() {
  if (!getEditorPassword()) {
    return (
      <main className="editor-shell" dir="rtl">
        <div className="editor-login">
          <p>עורך התוכן אינו מוגדר. יש להגדיר את משתנה הסביבה EDITOR_PASSWORD בפרויקט.</p>
        </div>
      </main>
    );
  }

  if (!(await isEditorAuthenticated())) {
    return <EditorLogin />;
  }

  const content = await getSiteContent();
  return <ContentEditor initialContent={content} />;
}
