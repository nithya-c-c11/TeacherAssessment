document.addEventListener("DOMContentLoaded", () => {
    const firstYearTheoryCourses = ['Physics', 'Chemistry', 'Mathematics','Problem Solving & Programming','Engineering Drawing','Advance Data Structures with C' ];
    const secondYearTheoryCourses = ['VC&CV', 'Python', 'EDC','MEFA','DT','S&S'];
    const thirdYearTheoryCourses = ['LDICA', 'AC', 'AWP','CSE','Compiler Design','Cloud Foundation'];
    
    const firstYearLabCourses = ['Chemistry Lab', 'Physics Lab ','IT workshop','Engineering Workshop','Data Structure Lab','PSP Lab'];
    const secondYearLabCourses = ['EDC Lab', 'EE Lab','BS Lab','PYP Lab','ARMP Lab','ECAD Lab'];
    const thirdYearLabCourses = ['LDICA Lab', 'AC Lab','M&OC Lab','DSP Lab','DC LAb'];

    const firstYearTheoryList = document.getElementById('ece-first-year-theory-list');
    const secondYearTheoryList = document.getElementById('ece-second-year-theory-list');
    const thirdYearTheoryList = document.getElementById('ece-third-year-theory-list');
    
    const firstYearLabList = document.getElementById('ece-first-year-lab-list');
    const secondYearLabList = document.getElementById('ece-second-year-lab-list');
    const thirdYearLabList = document.getElementById('ece-third-year-lab-list');
    
    const selectedCoursesList = document.getElementById('selected-courses');
    const messageDiv = document.getElementById('message');

    const selectedCourses = new Set();

     //Populate first year theory courses
    firstYearTheoryCourses.forEach(course => {
        const li = createCourseElement(course);
        firstYearTheoryList.appendChild(li);
    });

    //Populate second year theory courses
    secondYearTheoryCourses.forEach(course => {
        const li = createCourseElement(course);
        secondYearTheoryList.appendChild(li);
    });

    // Populate third year theory courses
    thirdYearTheoryCourses.forEach(course => {
        const li = createCourseElement(course);
        thirdYearTheoryList.appendChild(li);
    });

    // Populate first year lab courses
    firstYearLabCourses.forEach(course => {
        const li = createCourseElement(course);
        firstYearLabList.appendChild(li);
    });

    // Populate second year lab courses
    secondYearLabCourses.forEach(course => {
        const li = createCourseElement(course);
        secondYearLabList.appendChild(li);
    });

    // Populate third year lab courses
    thirdYearLabCourses.forEach(course => {
        const li = createCourseElement(course);
        thirdYearLabList.appendChild(li);
    });

    function createCourseElement(course) {
        const li = document.createElement('li');
        li.textContent = course;
        li.addEventListener('click', () => toggleCourseSelection(course));
        return li;
    }

    function toggleCourseSelection(course) {
        if (selectedCourses.has(course)) {
            selectedCourses.delete(course);
        } else {
            selectedCourses.add(course);
        }
        updateSelectedCourses();
    }

    function updateSelectedCourses() {
        selectedCoursesList.innerHTML = '';
        selectedCourses.forEach(course => {
            const li = document.createElement('li');
            li.textContent = course;
            selectedCoursesList.appendChild(li);
        });
    }

    document.getElementById('submit-btn').addEventListener('click', () => {
        if (selectedCourses.size === 0) {
            messageDiv.textContent = 'Please select at least one course.';
        } else {
            messageDiv.textContent = 'Courses submitted successfully!';
            // Further processing can be done here, e.g., sending data to a server
        }
    });
});
