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
    const checkVideo = await sql(
      `SELECT * FROM uploads WHERE id = $1`,
      [id]
    );

    if (checkVideo.length === 0) {
      return NextResponse.json({ error: 'Video not found.' }, { status: 404 });
    }

    // Try to update with the correct column names based on what exists in the database
    let result;
    try {
      // Try with camelCase column names first (including categories)
      result = await sql(
        `UPDATE uploads
         SET title = $1, subtitle = $2, description = $3, imgURL = $4, videoURL = $5, categories = $6
         WHERE id = $7 RETURNING *`,
        [title, subtitle, description, imgURL, videoURL, categories, id]
      );
    } catch {
      // If that fails, try with lowercase column names
      result = await sql(
        `UPDATE uploads
         SET title = $1, subtitle = $2, description = $3, imgurl = $4, videourl = $5, categories = $6
         WHERE id = $7 RETURNING *`,
        [title, subtitle, description, imgURL, videoURL, categories, id]
      );
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