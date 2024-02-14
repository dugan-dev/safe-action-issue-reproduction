'use server';

import { z } from 'zod';
import { action } from '../utils/safe-action';

// Input schema for safe action validation
const inputs = z.object({});

// Kysely version:
export const testAction = action(inputs, async () => {
  console.log('testAction');
});
