import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client, isSanityConfigured } from "@/sanity/lib/client";

export async function GET(request: Request) {
  if (!isSanityConfigured || !client) {
    return new Response("Sanity is not configured", { status: 500 });
  }

  const previewClient = client.withConfig({
    token: process.env.SANITY_API_READ_TOKEN,
  });

  const { GET: enableGET } = defineEnableDraftMode({
    client: previewClient,
  });

  return enableGET(request);
}
