const employees = [
    {id:1, name:'Sai Kalyan', age: 27, department: 'IT', salary: 100000},
    {id:2, name:'Umesh', age:26, department: 'IT', salary: 20000},
    {id:3, name:'Laxman', age:45, department: 'HR', salary: 30000},
    {id:4, name:'savitri', age:38, department: 'House Wife', salary: 40000}
]

function displayEmployees() {

const totalEmployees = employees.map((employee, index)=>`<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - ${employee.salary}</p>`).join('');

document.getElementById('employeesDetails').innerHTML = totalEmployees;

}

function calculateTotalSalaries(){

    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);

    alert(`Total Salaries: $${totalSalaries}`);
    
}



// function displayHREmployees()
// {

//     const hrEmployeess = employees.filter(employee => employee.name === 'HR');

//     const hrEmployeesDisplay = hrEmployeess.map((employee)=>
// `<p> ${employee.id}: ${employee.name} : ${employee.age}: ${employee.department} ${employee.salary}</p>`).join('');

// document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;

// }

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}


function findByEmployeeId(employeeId)
{
  
    const foundEmployee = employees.find(employee => employee.id === employeeId);

    if(foundEmployee)
    {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age}: ${foundEmployee.department}: ${foundEmployee.salary}</p>`;
    } else {

        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this id';
    }

}
