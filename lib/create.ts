import { neon } from '@neondatabase/serverless';
import { triggerVercelDeploy } from './vercelDeploy';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const create = async (formData: FormData) => {
  'use server';

  const sql = neon(`${process.env.DATABASE_URL}`);
  const title = formData.get('title') as string;
  const subtitle = formData.get('subtitle') as string | null;
  const description = formData.get('description') as string | null;
  const imgURL = formData.get('imgURL') as string;
  let videoURL = formData.get('videoURL') as string;
  const category = formData.get('category') as string;

  // Log form data for debugging
  console.log('Form data received:', {
    title,
    subtitle,
    description,
    imgURL,
    videoURL,
    category
  });

  if (!title || !imgURL || !videoURL) {
    throw new Error('Title, imgURL, and videoURL are required.');
  }

  // Validate and transform the YouTube URL if applicable
  const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/;
  const isYouTubeLink = youtubeRegex.test(videoURL);

  if (isYouTubeLink) {
    const match = videoURL.match(youtubeRegex);
    if (match) {
      const videoId = match[3];
      videoURL = `https://www.youtube.com/embed/${videoId}`;
    } else {
      throw new Error('Invalid YouTube video link.');
    }
  }

  try {
    console.log('Attempting to insert with values:', [title, subtitle, description, imgURL, videoURL, category]);
    
    // Try to insert with the correct column names based on what exists in the database
    try {
      // Try with camelCase column names first
      await sql(
        `INSERT INTO uploads (title, subtitle, description, imgURL, videoURL, categories) 
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [title, subtitle, description, imgURL, videoURL, category]
      );
    } catch {
      // If that fails, try with lowercase column names
      await sql(
        `INSERT INTO uploads (title, subtitle, description, imgurl, videourl, categories) 
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [title, subtitle, description, imgURL, videoURL, category]
      );
    }
    
    console.log('Data inserted successfully!');
    
    // Revalidate cache for relevant pages
    revalidatePath('/');
    revalidatePath('/works');
    revalidatePath('/admin');
    
    console.log('Cache revalidated successfully');
    
    // Try to trigger Vercel deployment (but don't fail if it doesn't work)
    try {
      await triggerVercelDeploy('create');
      console.log('Vercel deployment triggered');
    } catch (deployError) {
      console.log('Vercel deployment failed, but upload was successful:', deployError);
    }
    
  } catch (error: unknown) {
    console.error('Database error details:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error message:', errorMessage);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    throw new Error(`Database insertion failed: ${errorMessage}`);
  }
  
  // Redirect to works page to see the new content
  redirect('/works');
};
