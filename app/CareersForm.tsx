"use client";

import { useState, type FormEvent } from "react";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfQ1JVMr1MgzpEaD6KX-_w5KOSRgl5YoNPF1uoAKh-0WZ94gA/formResponse";

const FIELDS = {
  firstName: "entry.871890578",
  lastName: "entry.1967874698",
  phone: "entry.823759521",
  email: "entry.1362654189",
  area: "entry.1655279362",
};

type Values = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  area: string;
};

const emptyValues: Values = { firstName: "", lastName: "", phone: "", email: "", area: "" };

export default function CareersForm() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function update(key: keyof Values, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const body = new URLSearchParams();
    body.set(FIELDS.firstName, values.firstName);
    body.set(FIELDS.lastName, values.lastName);
    body.set(FIELDS.phone, values.phone);
    body.set(FIELDS.email, values.email);
    body.set(FIELDS.area, values.area);

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body,
      });
      setStatus("sent");
      setValues(emptyValues);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <p className="careers-success">תודה! קיבלנו את הפרטים שלך ונחזור אליך בקרוב.</p>;
  }

  return (
    <form className="careers-fields" onSubmit={submit}>
      <label>
        <span>שם פרטי</span>
        <input required value={values.firstName} onChange={(event) => update("firstName", event.target.value)} />
      </label>
      <label>
        <span>שם משפחה</span>
        <input required value={values.lastName} onChange={(event) => update("lastName", event.target.value)} />
      </label>
      <label>
        <span>מספר טלפון</span>
        <input required type="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} />
      </label>
      <label>
        <span>אימייל</span>
        <input required type="email" value={values.email} onChange={(event) => update("email", event.target.value)} />
      </label>
      <label>
        <span>אזור מגורים</span>
        <input required value={values.area} onChange={(event) => update("area", event.target.value)} />
      </label>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "שולח..." : "שלח"}
      </button>
      {status === "error" && <span className="careers-error">משהו השתבש. נסו שוב.</span>}
    </form>
  );
}
