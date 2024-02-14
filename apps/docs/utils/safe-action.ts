import { createSafeActionClient } from 'next-safe-action';

export const action = createSafeActionClient({
  async middleware() {
    const userId = '1234'; // Replace with your own user id or fetch from your auth context
    if (userId === null) {
      throw new Error('User not authenticated. Please log in and try again.');
    }
  },
});
