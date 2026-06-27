import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-27";

export const isSanityConfigured = !!(
  projectId &&
  projectId !== "your_project_id_here" &&
  projectId !== "your-project-id" &&
  projectId.trim() !== ""
);

// Standard client for published content
export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    })
  : (null as any);

// Client with stega encoding for visual editing overlays (click-to-edit)
export const clientWithStega = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      stega: {
        enabled: true,
        studioUrl: "/studio",
      },
    })
  : (null as any);
