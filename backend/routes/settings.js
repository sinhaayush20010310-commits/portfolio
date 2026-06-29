import express from 'express';
import { protect } from '../middleware/auth.js';
const router = express.Router();
// GET all
router.get('/', async (req, res) => res.json({ data: [], message: 'Connect your model here' }));
// POST create (protected)
router.post('/', protect, async (req, res) => res.json({ message: 'Created' }));
// PUT update (protected)
router.put('/:id', protect, async (req, res) => res.json({ message: 'Updated' }));
// DELETE (protected)
router.delete('/:id', protect, async (req, res) => res.json({ message: 'Deleted' }));
export default router;
