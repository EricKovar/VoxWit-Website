import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Enter a valid email address." },
        { status: 422 }
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    const tableName = process.env.SUPABASE_WAITLIST_TABLE ?? "voxwit_waitlist";

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        {
          success: true,
          message:
            "Waitlist submission captured locally. Add Supabase credentials to persist in production.",
        },
        { status: 200 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false },
    });

    const { error } = await supabase.from(tableName).upsert(
      {
        email: email.toLowerCase(),
        source: "voxwit-landing",
        created_at: new Date().toISOString(),
      },
      { onConflict: "email" }
    );

    if (error) {
      console.error("Supabase waitlist error", error);
      return NextResponse.json(
        { error: "Unable to save your email right now. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist submission error", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
