import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  // Enable draft mode
  (await draftMode()).enable();
  
  // Redirect to target slug or root
  const slug = searchParams.get("slug") || "/";
  redirect(slug);
}
