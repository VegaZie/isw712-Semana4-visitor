// Clase Employee representa un empleado genérico.
class Employee {
  //Método para aceptar un objeto visitor.
  accept(visitor) {
    visitor.visit(this);
  }
}

//Clase Manager representa a un gerente.
class Manager extends Employee {
  // Crea una instancia de Manager.
  constructor(name, salary) {
    super();
    this.name = name;
    this.salary = salary;
  }
}

//Clase Engineer representa a un ingeniero.
class Engineer extends Employee {
  //Crea una instancia de Engineer.
  constructor(name, salary, programmingLanguage) {
    super();
    this.name = name;
    this.salary = salary;
    this.programmingLanguage = programmingLanguage;
  }
}

export default {
  Manager,
  Engineer,
};
