import express from 'express';
import Expense from '../models/Expense.js';

const router = express.Router();

// Add a new expense
router.post('/', async (req, res) => {
    try {
        const expense = new Expense(req.body);
        const savedExpense = await expense.save();
        res.status(201).json(savedExpense);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all expenses
router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find().sort({ date: -1 });
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
