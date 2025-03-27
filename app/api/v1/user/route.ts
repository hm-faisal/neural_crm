import { NextRequest } from "next/server";
import { findUser, signUpAction } from "@/actions/user";

export async function POST(req: NextRequest) {
  let { email, role } = await req.json();

  let user = await signUpAction(email, role);

  return new Response(JSON.stringify(user));
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) return "Invalid email";

  const user = await findUser(email);

  return new Response(JSON.stringify(user));
}
