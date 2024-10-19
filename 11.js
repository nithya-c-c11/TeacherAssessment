// frontend/script.js
let currentYear = 1;

const loadYear = async (year) => {
    currentYear = year;
    await fetchCourses();
    await fetchTeachers();
};

const fetchCourses = async () => {
    const response = await fetch(http://localhost:5000/api/courses?year=${currentYear});
    const courses = await response.json();
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';

    courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = ${course.name} (${course.type});
        courseList.appendChild(li);
    });
};

const fetchTeachers = async () => {
    const response = await fetch('http://localhost:5000/api/teachers');
    const teachers = await response.json();
    const teacherList = document.getElementById('teacherList');
    teacherList.innerHTML = '';

    teachers.forEach(teacher => {
        const li = document.createElement('li');
        li.textContent = ${teacher.name} - Rating: ${teacher.rating};
        teacherList.appendChild(li);
    });
};

const submitSelections = async () => {
    const studentId = 1; // Example student ID
    const theoryCourses = []; // Gather selected theory course IDs
    const labCourses = []; // Gather selected lab course IDs

    const response = await fetch('http://localhost:5000/api/select-courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentId, theoryCourses, labCourses }),
    });

    if (response.ok) {
        alert('Selections saved successfully!');
    } else {
        alert('Error saving selections.');
    }
};

// Initial load for the first year
loadYear(1);