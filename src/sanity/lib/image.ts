import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = client ? imageUrlBuilder(client) : null;

// Use any to prevent typescript compile issues with specific sub-package type imports
export function urlFor(source: any) {
  return builder ? builder.image(source) : { url: () => "" } as any;
}
