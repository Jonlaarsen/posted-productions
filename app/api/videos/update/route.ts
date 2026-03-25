import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function PUT(req: Request) {
  try {
    const { id, title, subtitle, description, imgURL, videoURL, categories } = await req.json();

    if (!id || !title || !imgURL || !videoURL) {
      return NextResponse.json({ 
        error: 'ID, title, imgURL, and videoURL are required.' 
      }, { status: 400 });
    }

    const sql = neon(`${process.env.DATABASE_URL}`);

    // Check if the video exists
    const checkVideo = await sql`SELECT * FROM uploads WHERE id = ${id}`;

    if (checkVideo.length === 0) {
      return NextResponse.json({ error: 'Video not found.' }, { status: 404 });
    }

    // Try to update with the correct column names based on what exists in the database
    let result;
    try {
      // Try with camelCase column names first (including categories)
      result = await sql`
        UPDATE uploads
        SET title = ${title}, subtitle = ${subtitle}, description = ${description}, imgURL = ${imgURL}, videoURL = ${videoURL}, categories = ${categories}
        WHERE id = ${id} RETURNING *
      `;
    } catch {
      // If that fails, try with lowercase column names
      result = await sql`
        UPDATE uploads
        SET title = ${title}, subtitle = ${subtitle}, description = ${description}, imgurl = ${imgURL}, videourl = ${videoURL}, categories = ${categories}
        WHERE id = ${id} RETURNING *
      `;
    }

    // Revalidate cache
    revalidatePath('/');
    revalidatePath('/works');
    revalidatePath('/admin');

    return NextResponse.json(result[0], { status: 200 });
  } catch (error: unknown) {
    console.error('Error updating video:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
} 