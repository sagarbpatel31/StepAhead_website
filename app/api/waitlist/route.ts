import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

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

  const { error } = await getSupabase()
    .from("waitlist")
    .insert({ value, type, timestamp });

  if (error) {
    console.error("[waitlist] insert error:", error.message);
    return NextResponse.json({ error: "Storage error" }, { status: 500 });
  }

  console.log("[waitlist] stored:", { value, type, timestamp });
  return NextResponse.json({ ok: true });
}

// GET /api/waitlist?secret=YOUR_SECRET — retrieve all signups
// Set WAITLIST_SECRET in Vercel env vars to protect this endpoint.
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (!secret || secret !== process.env.WAITLIST_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error, count } = await getSupabase()
    .from("waitlist")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ count, entries: data });
}
