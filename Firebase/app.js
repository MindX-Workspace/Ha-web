import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, child, get, set, update, remove } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js'

const firebaseConfig = {
    apiKey: "AIzaSyAgZp8KH4Ce3SRMDdeX2cTuraua2S1gF04",
    authDomain: "testingfirebase-de8b8.firebaseapp.com",
    projectId: "testingfirebase-de8b8",
    storageBucket: "testingfirebase-de8b8.appspot.com",
    messagingSenderId: "92528478949",
    appId: "1:92528478949:web:2e2d55530b69c273f9620c"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase()

let firstName = document.getElementById('fName')
let lastName = document.getElementById('lName')
let id = document.getElementById('id')
let dept = document.getElementById('dept')
let swim = document.getElementById('swim')

let addBtn = document.getElementById('add')
let retBtn = document.getElementById('ret')
let updBtn = document.getElementById('up')
let delBtn = document.getElementById('del')

function addData() {
    set(ref(db, 'EmployeeSet/' + id.value), {
        id: Number(id.value),
        nameOfEmployee: {
            firstName: firstName.value,
            lastName: lastName.value,
        },
        department: dept.value,
        swim: (swim.value == 'yes')
    }).then(() => {
        alert("Data Added Successfully!")
    }).catch((error) => {
        alert("Unsuccessful")
        console.log(error)
    })
}

function retrieveData() {
    const dbRef = ref(db)

    get(child(dbRef, 'EmployeeSet/' + id.value)).then((snapshot) => {
        if (snapshot.exists()) {
            firstName.value = snapshot.val().nameOfEmployee.firstName
            lastName.value = snapshot.val().nameOfEmployee.lastName
            dept.value = snapshot.val().department
            swim.value = (snapshot.val().swim) ? "Yes" : "No"
        } else {
            alert("Employee does not exist")
        }
    }).catch((error) => {
        alert("Unsuccessful")
        console.log(error)
    })
}

function updateData() {
    update(ref(db, 'EmployeeSet/' + id.value), {
        nameOfEmployee: {
            firstName: firstName.value,
            lastName: lastName.value,
        },
        department: dept.value,
        swim: (swim.value == 'yes')
    }).then(() => {
        alert("Updated Successfully!")
    }).catch((error) => {
        alert("Unsuccessful")
        console.log(error)
    })
}

function deleteData() {
    remove(ref(db, 'EmployeeSet/' + id.value))
        .then(() => {
            alert("Deleted Successfully!")
        }).catch((error) => {
            alert("Unsuccessful")
            console.log(error)
        })
}

addBtn.addEventListener('click', addData)
retBtn.addEventListener('click', retrieveData)
updBtn.addEventListener('click', updateData)
delBtn.addEventListener('click', deleteData)