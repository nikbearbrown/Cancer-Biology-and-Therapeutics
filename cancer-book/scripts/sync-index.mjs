import 'dotenv/config';

import { sync } from 'fumadocs-core/search/orama-cloud';
import * as fs from 'node:fs/promises';
import { CloudManager } from '@oramacloud/client';

// Function to update search indexes
export async function updateSearchIndexes() {


  const apiKey = '';
  const indexId = '';

  console.log('API Key:', apiKey);
  console.log('Index ID:', indexId);
  if (!apiKey || !indexId) {
    console.log('[ERROR] Missing ORAMA API Key or Index ID in environment variables. Skipping sync...');
    return;
  }

  try {
    const content = await fs.readFile('.next/server/app/static.json.body');
    const records = JSON.parse(content.toString());

    const manager = new CloudManager({ api_key: apiKey });

    await sync(manager, {
      index: indexId,
      documents: records,
    });

    console.log(`[SUCCESS] Search updated: ${records.length} records indexed.`);
  } catch (error) {
    console.error('[ERROR] Failed to update search indexes:', error);
  }
}

// Run the function
void updateSearchIndexes();
