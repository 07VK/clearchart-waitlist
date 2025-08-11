// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

// -- Middleware --
app.use(cors());
app.use(express.json());

// -- Database Connection Pool --
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  family: 4 // ADDED: This forces an IPv4 connection to prevent network errors on Render.
});

// -- API Endpoints --
app.post('/api/waitlist', async (req, res) => {
  // CHANGED: The incoming JSON property is 'phoneNumber', not 'phone_number'.
  const { name, email, phoneNumber } = req.body;

  // CHANGED: The validation now correctly checks the 'phoneNumber' variable.
  if (!name || !email || !phoneNumber) {
    return res.status(400).json({ error: 'Name, email, and phone number are required.' });
  }

  try {
    // CHANGED: Table names with hyphens must be in double quotes.
    // CHANGED: The parameter passed is the 'phoneNumber' variable.
    const newEntry = await pool.query(
      "INSERT INTO \"waitlist-table\" (name, email, phone_number) VALUES ($1, $2, $3) RETURNING *",
      [name, email, phoneNumber]
    );
    res.status(201).json(newEntry.rows[0]);
  } catch (err) {
    console.error(err.message);
    
    // CHANGED: This error handling is now more robust and no longer uses hardcoded constraint names.
    if (err.code === '23505') { // '23505' is the error code for a unique constraint violation.
      if (err.detail && err.detail.includes('email')) {
        return res.status(409).json({ error: 'This email is already on the waitlist.' });
      }
      if (err.detail && err.detail.includes('phone_number')) {
        return res.status(409).json({ error: 'This phone number is already on the waitlist.' });
      }
    }
    
    res.status(500).json({ error: 'An unexpected server error occurred.' });
  }
});

// -- Start the Server --
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(` Backend server is running on port ${PORT}`);
});