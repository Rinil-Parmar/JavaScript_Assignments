// Employee class
class Employee {
    constructor(name, address, empId, designation) {
        this.name = name;
        this.address = address;
        this.empId = empId;
        this.designation = designation;
    }
}

let employees = [];
let editingIndex = -1;

function addOrUpdateEmployee() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const empId = document.getElementById('empId').value;
    const designation = document.getElementById('designation').value;

    if (editingIndex === -1) {
        const employee = new Employee(name, address, empId, designation);
        employees.push(employee);
    } else {
        employees[editingIndex].name = name;
        employees[editingIndex].address = address;
        employees[editingIndex].empId = empId;
        employees[editingIndex].designation = designation;
        editingIndex = -1;
        document.getElementById('addOrUpdateButton').textContent = 'Add Employee';
    }

    displayEmployees();
    clearInputs();
}

function displayEmployees() {
    const table = document.getElementById('employeeTable');
    table.innerHTML = "<tr><th>Name</th><th>Address</th><th>Employee ID</th><th>Designation</th><th>Action</th></tr>";

    employees.forEach((employee, index) => {
        const row = table.insertRow();
        row.insertCell(0).textContent = employee.name;
        row.insertCell(1).textContent = employee.address;
        row.insertCell(2).textContent = employee.empId;
        row.insertCell(3).textContent = employee.designation;
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            editEmployee(index);
        };
        row.insertCell(4).appendChild(editButton);
    });
}

function editEmployee(index) {
    const employee = employees[index];
    document.getElementById('name').value = employee.name;
    document.getElementById('address').value = employee.address;
    document.getElementById('empId').value = employee.empId;
    document.getElementById('designation').value = employee.designation;
    editingIndex = index;
    document.getElementById('addOrUpdateButton').textContent = 'Update Employee';
}

function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('empId').value = '';
    document.getElementById('designation').value = '';
}
