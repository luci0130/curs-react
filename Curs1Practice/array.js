// Se da urmatorul Array:

const employees = [
    {
        name: 'Savuica Marinela',
        salary: 5500,
        productivityIndex: 7.4
    },
    {
        name: 'Dumitru Dan',
        salary: 7000,
        productivityIndex: 5.6
    },
    {
        name: 'Topor Simona',
        salary: 7500,
        productivityIndex: 9
    }
]

// 1. FARA A MODIFICA array-ul initial, creati un array nou in care fiecare angajat
// sa aiba salariul marit cu 20%.

const employeesDouble = employees.map(employee => employee.salary + 0.2*employee.salary);
employees.map(({name, salary, productivityIndex}) => ({name, salary: salary * 1.2, productivityIndex}));

const employees = [
    {name: 'Savuica Marinela', salary: 5500, productivityIndex: 7.4},
    {name: 'Dumitru Dan', salary: 7000, productivityIndex: 5.6},
    {name: 'Topor Simona', salary: 7500, productivityIndex: 9}
];

const updatedEmployees = employees.map(({name, salary, productivityIndex}) => ({
    name, salary: salary * 2, productivityIndex
}));

console.log(employeesDouble);

// 2. FARA A MODIFICA array-ul initial, creati un array nou in care sa se regaseasca
// doar angajatii cu indexul de productivitate peste 7

let filteredEmployees = employees.filter( elem => {
    if (elem.productivityIndex > 7) {
        return true;
    }
});