"use client";

import { useEffect, useState } from "react";

export default function FiltersTest() {
  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const API = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!API) {
      setErr("NEXT_PUBLIC_API_BASE_URL is missing");
      return;
    }

    fetch(`${API}/api/filters`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(setData)
      .catch((e) => setErr(String(e)));
  }, []);

  if (err) return <p style={{ padding: 16 }}>Error: {err}</p>;
  if (!data) return <p style={{ padding: 16 }}>Loading filters…</p>;

  return (
    <pre style={{ padding: 16, whiteSpace: "pre-wrap" }}>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
