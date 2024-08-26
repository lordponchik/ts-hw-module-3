// task-01

class Student {
  constructor(public name: string, public age: number, public grade: string) {}
}

// task-02

class Employee {
  // Заповніть модифікатори доступу
  public name: string;
  private department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  // Реалізуйте конструктор та збільшіть salary на 10000
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

// task-03

interface ICharacter {
  name: string;
  level: number;
  introduce(phrase: string): void;
  levelUp(): void;
}

interface ISpellCaster {
  castSpell(): void;
}

class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error("Level too low");
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ", " + this.name);
  }

  castSpell(): void {
    console.log("Casting a spell, behold my power!");
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// тестування класу
const wizard = new Wizard("Merlin", 15);

wizard.introduce("I am the mighty wizard, Merlin");
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16

export {};
