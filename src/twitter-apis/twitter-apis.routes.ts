import {Router} from 'express';

import {verifyTwitterAccount, searchTwits} from './twitter-apis.controller';

const router = Router();

// Verifying twitter account
router.get('/verify', verifyTwitterAccount)

// Searching Twits
router.get('/search', searchTwits)

export default router;
