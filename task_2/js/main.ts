interface EmployeeInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
}

interface DirectorInterface extends EmployeeInterface {
  workDirectorTasks(): string;
}

interface TeacherInterface extends EmployeeInterface {
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }

  toString(): string {
    return "Director";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }

  toString(): string {
    return "Teacher";
  }
}

interface createEmployeeFunction {
  (salary: number | string): Teacher | Director;
}

const createEmployee: createEmployeeFunction = (salary) => {
  const numSalary =
    typeof salary === "string"
      ? parseInt(salary.replace(/\D/g, ""), 10)
      : salary;

  return numSalary < 500 ? new Teacher() : new Director();
};

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

type Employee = Teacher | Director;

const isDirector = (employee: Employee): employee is Director => {
  return employee instanceof Director;
};

interface executeWorkFunction {
  (employee: Employee): string;
}

const executeWork: executeWorkFunction = (employee) => {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }

  return employee.workTeacherTasks();
};

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects): string => {
  if (todayClass === "Math") {
    return "Teaching Math";
  }

  return "Teaching History";
};

console.log(teachClass("Math"));
console.log(teachClass("History"));
