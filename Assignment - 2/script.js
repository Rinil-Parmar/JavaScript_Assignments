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
let currentEmpId = 1;
let editingIndex = -1;

// Function to add or update an employee
function addOrUpdateEmployee() {
  // Get values from input fields
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const designation = document.getElementById("designation").value;

  // Check if any field is empty
  if (!name || !address || !designation) {
    alert("All fields are required.");
    return;
  }

  // If no employee is being edited, add a new employee
  if (editingIndex === -1) {
    const empId = currentEmpId++;
    const employee = new Employee(name, address, empId, designation);
    employees.push(employee);
  } else {
    const employee = employees[editingIndex];
    // Update the employee details
    employee.name = name;
    employee.address = address;
    employee.designation = designation;
    editingIndex = -1;
    // Change the button text back to 'Add Employee'
    document.getElementById("addOrUpdateButton").textContent = "Add Employee";
  }

  // Display the updated list of employees
  displayEmployees();
  clearInputs();
}


// Function to display the list of employees in the table
function displayEmployees() {
  // Get the table element
  const table = document.getElementById('employeeTable');
  // Clear the table content
  table.innerHTML = "<tr><th>Name</th><th>Address</th><th>Employee ID</th><th>Designation</th><th>Action</th></tr>";

  // Loop through the employees array and add each employee to the table
  employees.forEach((employee, index) => {
    const row = table.insertRow();
    // Add employee details to the row cells
    row.insertCell(0).textContent = employee.name;
    row.insertCell(1).textContent = employee.address;
    row.insertCell(2).textContent = employee.empId;
    row.insertCell(3).textContent = employee.designation;

    const editButtonCell = row.insertCell(4);
    const editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    // Set an onclick event for the 'Edit' button to call the editEmployee function with the index of the employee
    editButton.onclick = function () {
      editEmployee(index);
    };
    // Add the 'Edit' button to the row
    editButtonCell.appendChild(editButton);
  });
}

// Function to populate input fields with the details of the employee being edited
function editEmployee(index) {
  const employee = employees[index];
  // Populate input fields with employee details
  document.getElementById("name").value = employee.name;
  document.getElementById("address").value = employee.address;
  document.getElementById("designation").value = employee.designation;
  editingIndex = index;
  // Change the button text to 'Update Employee'
  document.getElementById("addOrUpdateButton").textContent = "Update Employee";
}

// Function to clear input fields
function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("designation").value = "";
}
