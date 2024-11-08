import express from 'express';
import bibleVerseRoutes from './routes/bibleVerseRoutes';
import favoriteRoutes from './routes/favoriteRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const cors = require('cors');

app.use(express.json());

app.use('/api', bibleVerseRoutes);
app.use('/api', favoriteRoutes);

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:4200' // Replace with your frontend URL
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
