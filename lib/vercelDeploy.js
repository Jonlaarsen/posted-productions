export const triggerVercelDeploy = async (operationType) => {
  try {
    // Check if we're in a server environment
    if (typeof window === 'undefined') {
      // Server-side: use absolute URL
      const baseUrl = process.env.VERCEL_URL 
        ? `https://${process.env.VERCEL_URL}` 
        : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
      
      const response = await fetch(`${baseUrl}/api/redeploy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          operation: operationType
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to trigger deployment: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(`Vercel deployment triggered successfully for ${operationType} operation`);
      return result;
    } else {
      // Client-side: use relative URL
      const response = await fetch('/api/redeploy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          operation: operationType
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to trigger deployment: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(`Vercel deployment triggered successfully for ${operationType} operation`);
      return result;
    }
    
  } catch (error) {
    console.error('Error triggering Vercel deployment:', error);
    // Don't throw the error - just log it so it doesn't break the upload flow
    console.log('Vercel deployment failed, but upload was successful');
    return { success: false, error: error.message };
  }
}; 