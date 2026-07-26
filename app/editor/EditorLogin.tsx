"use client";

import { useState, type FormEvent } from "react";

export default function EditorLogin() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const response = await fetch("/api/editor-login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    window.location.reload();
  }

  return (
    <main className="editor-shell" dir="rtl">
      <div className="editor-login">
        <form onSubmit={submit}>
          <h1>כניסה לעורך התוכן</h1>
          <label className="editor-field">
            <span>סיסמה</span>
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setStatus("idle");
                setPassword(event.target.value);
              }}
              autoFocus
            />
          </label>
          <div className="editor-actions">
            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "בודק..." : "כניסה"}
            </button>
            {status === "error" && <span className="error">סיסמה שגויה.</span>}
          </div>
        </form>
      </div>
    </main>
  );
}
