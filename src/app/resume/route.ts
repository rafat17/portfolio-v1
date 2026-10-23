import { client } from "@/sanity/lib/client";
import { RESUME_QUERY } from "@/sanity/schemaTypes/queries";

export const revalidate = 60;

export async function GET() {
  const resume = await client.fetch(RESUME_QUERY);
  const url = resume?.cvFile?.asset?.url;

  if (!url) return new Response("Resume not found", { status: 404 });

  const pdf = await fetch(url);
  const fileName = `${resume?.title ?? "Resume"}.pdf`;

  return new Response(pdf.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${fileName}"`,
    },
  });
}
