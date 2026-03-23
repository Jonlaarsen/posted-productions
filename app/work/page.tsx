import { neon } from "@neondatabase/serverless";
import Clips, { type Clip } from "@/components/work/Clips";

// Enable immediate revalidation
export const revalidate = 0;

// This is a server component that fetches data on the server side
const fetchUploads = async (): Promise<Clip[]> => {
  const sql = neon(process.env.DATABASE_URL!);

  try {
    const result = await sql`SELECT * FROM uploads ORDER BY categories ASC, title ASC`;
    return result as Clip[];
  } catch (error) {
    console.error("Error fetching uploads:", error);
    throw new Error("Failed to fetch data from the database.");
  }
};

// Server Component that fetches data
export default async function Page() {
  const uploads = await fetchUploads();

  return (
    <>
      <div
        className="md:py-[9rem] max-w-[99vw] pt-[2rem] bg-contain min-h-screen "
        // style={{backgroundImage:"url('https://i.pinimg.com/originals/6f/9d/c5/6f9dc513096e160a82c2201961b3386b.gif')"}}
      >
        <Clips uploads={uploads} />
      </div>
    </>
  );
}
