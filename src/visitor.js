// Clase Visitor representa un visitante genérico.
class Visitor {
  //Método para visitar un empleado.
  visit(employee) {
    throw new Error("Method visit() must be implemented.");
  }
}

//Clase SalaryVisitor calcula el salario total de los empleados visitados.
class SalaryVisitor extends Visitor {
  //Crea una instancia de SalaryVisitor.
  constructor() {
    super();
    this.totalSalary = 0;
  }
  //Visita un empleado y agrega su salario al total.
  visit(employee) {
    this.totalSalary += employee.salary;
  }
}

//Clase ProgrammingLanguageVisitor cuenta el número de empleados por lenguaje de programación.
class ProgrammingLanguageVisitor extends Visitor {
  //Crea una instancia de ProgrammingLanguageVisitor.
  constructor() {
    super();
    this.javaCount = 0;
    this.pythonCount = 0;
  }

  //Visita un empleado y cuenta su lenguaje de programación.
  visit(employee) {
    if (employee.programmingLanguage === "Java") {
      this.javaCount++;
    } else if (employee.programmingLanguage === "Python") {
      this.pythonCount++;
    }
  }
}

export default {
  SalaryVisitor,
  ProgrammingLanguageVisitor,
};
