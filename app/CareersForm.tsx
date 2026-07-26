"use client";

import { useRef, useState } from "react";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfQ1JVMr1MgzpEaD6KX-_w5KOSRgl5YoNPF1uoAKh-0WZ94gA/formResponse";
const TARGET_IFRAME = "careers-form-target";

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
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function update(key: keyof Values, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function submit() {
    // The form posts natively (via the hidden target iframe below) to Google's
    // formResponse endpoint, the same way the real Google Form itself submits.
    // That cross-origin response can't be read from JS, so this timeout is a
    // reasonable assumption of success rather than a confirmed one.
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      setValues(emptyValues);
    }, 900);
  }

  if (status === "sent") {
    return <p className="careers-success">תודה! קיבלנו את הפרטים שלך ונחזור אליך בקרוב.</p>;
  }

  return (
    <>
      <iframe name={TARGET_IFRAME} title="" style={{ display: "none" }} />
      <form
        ref={formRef}
        className="careers-fields"
        action={FORM_ACTION}
        method="POST"
        target={TARGET_IFRAME}
        onSubmit={submit}
      >
        <label>
          <span>שם פרטי</span>
          <input
            required
            name={FIELDS.firstName}
            value={values.firstName}
            onChange={(event) => update("firstName", event.target.value)}
          />
        </label>
        <label>
          <span>שם משפחה</span>
          <input
            required
            name={FIELDS.lastName}
            value={values.lastName}
            onChange={(event) => update("lastName", event.target.value)}
          />
        </label>
        <label>
          <span>מספר טלפון</span>
          <input
            required
            type="tel"
            name={FIELDS.phone}
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </label>
        <label>
          <span>אימייל</span>
          <input
            required
            type="email"
            name={FIELDS.email}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </label>
        <label>
          <span>אזור מגורים</span>
          <input
            required
            name={FIELDS.area}
            value={values.area}
            onChange={(event) => update("area", event.target.value)}
          />
        </label>
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "שולח..." : "שלח"}
        </button>
      </form>
    </>
  );
}
