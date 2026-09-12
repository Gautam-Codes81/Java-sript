const API_URL = "http://localhost:8080/api/students";


// ===============================
// PAGE LOAD
// ===============================

document.addEventListener("DOMContentLoaded", getAllStudents);


// ===============================
// GET ALL STUDENTS
// ===============================

async function getAllStudents() {

    try {

        const response = await fetch(`${API_URL}/getAll`);

        if (!response.ok) {
            throw new Error("Failed to fetch students");
        }

        const students = await response.json();

        displayStudents(students);

    } catch (error) {

        console.error(error);

        alert("Students load karne mein problem hai.");
    }
}


// ===============================
// DISPLAY STUDENTS
// ===============================

function displayStudents(students) {

    const tableBody =
        document.getElementById("studentTableBody");

    tableBody.innerHTML = "";

    students.forEach(student => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.email}</td>
            <td>${student.rollNo}</td>
            <td>${student.subject}</td>

            <td>
                <button onclick="editStudent(${student.id})">
                    Edit
                </button>

                <button onclick="deleteStudent(${student.id})">
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}


// ===============================
// CREATE STUDENT - POST
// ===============================

document
    .getElementById("studentForm")
    .addEventListener("submit", async function (event) {

        event.preventDefault();

        const student = {

            name: document.getElementById("name").value,

            age: Number(
                document.getElementById("age").value
            ),

            email: document.getElementById("email").value,

            rollNo: Number(
                document.getElementById("rollNo").value
            ),

            subject: document.getElementById("subject").value

        };


        try {

            const response = await fetch(
                `${API_URL}/create`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(student)
                }
            );


            if (!response.ok) {
                throw new Error("Student create nahi hua");
            }


            alert("Student successfully added!");

            document
                .getElementById("studentForm")
                .reset();

            getAllStudents();


        } catch (error) {

            console.error(error);

            alert("Student add karne mein problem hai.");
        }

    });


// ===============================
// DELETE STUDENT
// ===============================

async function deleteStudent(id) {

    const confirmDelete =
        confirm("Kya aap is student ko delete karna chahte hain?");


    if (!confirmDelete) {
        return;
    }


    try {

        const response = await fetch(
            `${API_URL}/delete?id=${id}`,
            {
                method: "DELETE"
            }
        );


        if (!response.ok) {
            throw new Error("Delete failed");
        }


        alert("Student deleted successfully!");

        getAllStudents();


    } catch (error) {

        console.error(error);

        alert("Student delete nahi ho paaya.");
    }
}


// ===============================
// EDIT - ABHI TEMPORARY
// ===============================

async function editStudent(id) {

    try {
        // 1. Existing student data lao
        const response = await fetch(`${API_URL}/get?id=${id}`);

        if (!response.ok) {
            throw new Error("Student not found");
        }

        const student = await response.json();

        // 2. New values input lo
        const name = prompt("Enter Name:", student.name);
        if (name === null) return;

        const age = prompt("Enter Age:", student.age);
        if (age === null) return;

        const email = prompt("Enter Email:", student.email);
        if (email === null) return;

        const rollNo = prompt("Enter Roll Number:", student.rollNo);
        if (rollNo === null) return;

        const subject = prompt("Enter Subject:", student.subject);
        if (subject === null) return;

        // 3. Updated student object
        const updatedStudent = {
            name: name,
            age: Number(age),
            email: email,
            rollNo: Number(rollNo),
            subject: subject
        };

        // 4. PUT request
        const updateResponse = await fetch(
            `${API_URL}/update?id=${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedStudent)
            }
        );

        if (!updateResponse.ok) {
            throw new Error("Update failed");
        }

        alert("Student updated successfully!");

        // 5. Table refresh
        getAllStudents();

    } catch (error) {
        console.error(error);
        alert("Student update karne mein problem hai.");
    }
}