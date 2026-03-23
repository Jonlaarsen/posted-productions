import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { operation } = await req.json();
    
    // Trigger Vercel deployment using Vercel's API
    const response = await fetch(`https://api.vercel.com/v1/integrations/deploy/${process.env.VERCEL_DEPLOY_HOOK_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        operation: operation || 'database-update'
      })
    });

    if (!response.ok) {
      throw new Error(`Vercel deployment failed: ${response.statusText}`);
    }

    console.log(`Vercel deployment triggered successfully for ${operation} operation`);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Deployment triggered successfully',
      operation 
    });
    
  } catch (error) {
    console.error('Error triggering Vercel deployment:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
} 