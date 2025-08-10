 // backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

// -- Middleware --
app.use(cors()); // Allows your frontend to make requests to this backend
app.use(express.json()); // Allows the server to accept JSON data

// -- Database Connection Pool --
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// -- API Endpoints --
app.post('/api/waitlist', async (req, res) => {
  const { name, email, phoneNumber } = req.body;

  // -- MODIFIED VALIDATION --
  // Check if all three required fields are present
  if (!name || !email || !phoneNumber) {
    return res.status(400).json({ error: 'Name, email, and phone number are required.' });
  }

  try {
    const newEntry = await pool.query(
      "INSERT INTO waitlist (name, email, phone_number) VALUES ($1, $2, $3) RETURNING *",
      [name, email, phoneNumber]
    );
    res.status(201).json(newEntry.rows[0]);
  } catch (err) {
    console.error(err.message);
    
    // This part remains the same and correctly handles the unique constraints
    if (err.code === '23505') { 
      if (err.constraint === 'waitlist_email_key') {
        return res.status(409).json({ error: 'This email is already on the waitlist.' });
      }
      if (err.constraint === 'unique_phone_number') { // Assuming the constraint is named this
        return res.status(409).json({ error: 'This phone number is already on the waitlist.' });
      }
    }
    
    res.status(500).send('Server error');
  }
});


// -- Start the Server --
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Backend server is running on port ${PORT}`);
});