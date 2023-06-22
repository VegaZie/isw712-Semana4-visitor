// Uso del patrón Visitor
//// Importación de las clases Employee y los visitantes
const { Manager, Engineer } = require('./employee').default;
const { SalaryVisitor, ProgrammingLanguageVisitor } = require('./visitor').default;

//// Creación de empleados
const employees = [
    new Manager("John", 5000),
    new Engineer("Alice", 3000, "Java"),
    new Engineer("Bob", 2500, "Python"),
    new Engineer("Charlie", 3500, "Java"),
    new Engineer("Pedro", 4000, "Java"),
    new Engineer("David", 3850, "Python"),
    new Engineer("Emily", 4250, "Java")
  ];
  
  //// Creación de visitantes
  const salaryVisitor = new SalaryVisitor();
  const programmingLanguageVisitor = new ProgrammingLanguageVisitor();
  
  //Visitar empleados con los visitantes correspondientes
  employees.forEach((employee) => {
    employee.accept(salaryVisitor);
    employee.accept(programmingLanguageVisitor);    
  });
  
  //// Impresión de resultados
  console.log("Total salary: " + salaryVisitor.totalSalary);
  console.log("Java engineers: " + programmingLanguageVisitor.javaCount);
  console.log("Python engineers: " + programmingLanguageVisitor.pythonCount);