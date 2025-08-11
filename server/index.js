import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'; // <-- add this

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    ssl: true,
    tlsAllowInvalidCertificates: true
})
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.json());

import expenseRoutes from './routes/expenseRoutes.js';
app.use('/api/expenses', expenseRoutes);

// CORS setup
app.use(cors({
    origin: "http://localhost:3000", // your React dev server
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
