// This route is used to disable draft mode in Next.js.
import { draftMode } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  await (await draftMode()).disable();
  return NextResponse.redirect(new URL("/", request.url));
}
