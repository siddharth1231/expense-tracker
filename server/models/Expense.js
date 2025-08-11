import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Expense', expenseSchema);
