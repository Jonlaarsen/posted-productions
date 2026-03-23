import { query } from '../../lib/db';
import { triggerVercelDeploy } from '../lib/vercelDeploy';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, subtitle, description, url } = req.body;

    if (!title || !url) {
      return res.status(400).json({ error: 'Title and URL are required.' });
    }

    try {
      const result = await query(
        `INSERT INTO uploads (title, subtitle, description, url) 
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [title, subtitle, description, url]
      );

      // Trigger Vercel deployment
      await triggerVercelDeploy('create');

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error saving to database:', error);
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}

