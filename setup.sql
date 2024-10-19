-- database/setup.sql
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL, -- 'theory' or 'lab'
    year INT NOT NULL
);

CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    bio TEXT,
    rating FLOAT
);

CREATE TABLE selections (
    id SERIAL PRIMARY KEY,
    student_id INT NOT NULL,
    theory_courses INT[],
    lab_courses INT[],
    FOREIGN KEY (student_id) REFERENCES students(id)
);