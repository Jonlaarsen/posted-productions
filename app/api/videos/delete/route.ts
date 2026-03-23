import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required.' }, { status: 400 });
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

    // Delete the video
    await sql(
      `DELETE FROM uploads WHERE id = $1`,
      [id]
    );

    // Revalidate cache
    revalidatePath('/');
    revalidatePath('/works');
    revalidatePath('/admin');

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting video:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
} 