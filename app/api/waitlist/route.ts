import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { value, type, timestamp } = body as {
    value: string;
    type: "email" | "phone";
    timestamp: string;
  };

  if (!value || !type || !timestamp) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // TODO: Wire up real storage. Options:
  //   Vercel KV  → import { kv } from "@vercel/kv";
  //                await kv.lpush("waitlist", JSON.stringify({ value, type, timestamp }));
  //   Supabase   → await supabase.from("waitlist").insert({ value, type, created_at: timestamp });
  //   Resend     → send a notification email to the team on each signup
  //   File (dev) → fs.appendFileSync("waitlist.ndjson", JSON.stringify({ value, type, timestamp }) + "\n");
  //                (won't persist on Vercel serverless — dev only)
  console.log("[waitlist]", { value, type, timestamp });

  return NextResponse.json({ ok: true });
}
