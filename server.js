// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;

const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'course_selection_db',
  password: 'your_db_password',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

// API endpoint to get courses
app.get('/api/courses', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM courses');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// API endpoint to submit course selections
app.post('/api/select-courses', async (req, res) => {
  const { studentId, theoryCourses, labCourses } = req.body;
  try {
    await pool.query('INSERT INTO selections (student_id, theory_courses, lab_courses) VALUES ($1, $2, $3)', 
      [studentId, theoryCourses, labCourses]);
    res.status(201).send('Selections saved');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// API endpoint to get teacher profiles
app.get('/api/teachers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM teachers');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(Server running on http://localhost:${PORT});
});