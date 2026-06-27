import { draftMode } from "next/headers";
import { client, clientWithStega, isSanityConfigured } from "./client";

/**
 * Returns the appropriate Sanity client based on draft mode status.
 * Uses the stega-enabled client in draft mode for click-to-edit overlays.
 */
export async function getSanityClient() {
  const { isEnabled } = await draftMode();
  if (!isSanityConfigured) return null;
  return isEnabled ? clientWithStega : client;
}
