import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export type WaitlistEntry = {
  value: string;
  type: "email" | "phone";
  timestamp: string;
};

// POST /api/waitlist — store a new signup
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { value, type, timestamp } = body as WaitlistEntry;

  if (!value || !type || !timestamp) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const entry: WaitlistEntry = { value, type, timestamp };

  // Store in a Redis list (newest first) and increment a counter
  await kv.lpush("waitlist", JSON.stringify(entry));
  await kv.incr("waitlist:count");

  console.log("[waitlist] stored:", entry);
  return NextResponse.json({ ok: true });
}

// GET /api/waitlist?secret=YOUR_SECRET — retrieve all signups
// Set WAITLIST_SECRET in Vercel env vars to protect this endpoint.
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (!secret || secret !== process.env.WAITLIST_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const raw = await kv.lrange("waitlist", 0, -1);
  const entries = (raw as string[]).map((r) => JSON.parse(r) as WaitlistEntry);
  const count = (await kv.get<number>("waitlist:count")) ?? entries.length;

  return NextResponse.json({ count, entries });
}
