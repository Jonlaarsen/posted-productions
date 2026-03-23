import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { path } = await request.json();
    
    if (!path) {
      return NextResponse.json({ error: 'Path is required' }, { status: 400 });
    }

    // Revalidate the specified path
    revalidatePath(path);
    
    console.log(`Cache revalidated for path: ${path}`);
    
    return NextResponse.json({ 
      success: true, 
      message: `Cache revalidated for ${path}`,
      revalidated: true,
      now: Date.now()
    });
    
  } catch (error) {
    console.error('Error revalidating cache:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to revalidate cache' 
    }, { status: 500 });
  }
} 