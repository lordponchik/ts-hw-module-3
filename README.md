<h1 id="home">Homework :clipboard:</h1>

## ts-hw-module-3

- 🇺🇸 [English](#en)
- 🇺🇦 [Ukrainian](#uk)
- 🇷🇺 [Russian](#ru)

---

<h3 id="en">📚 EN 📚</h3>

# Task 1

The Student class, which contains three properties: name, age, and grade. Instead of declaring these
properties in the class body, then in the constructor, and finally assigning them a value, write a
shorthand initializer.

```ts
class Student {
  public name: string;
  public age: number;
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
```

# Task 2

Your task will be to create two classes - Employee and Manager.

The Employee class should include:

name property, which will be available to everyone. department property, which will only be
available inside the Employee class. salary, which will be available only inside the Employee class
and its subclasses.

The Manager class must be a subclass of the Employee class

It is necessary to implement a constructor in the Manager class that will call the constructor of
the superclass and increase the salary by 10,000.

```ts
class Employee {
  // Заповніть модифікатори доступу
  name: string;
  department: string;
  salary: number;

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
}
```

# Task 3

You create a game where there are characters with different roles. You are currently working on the
Wizard class, which should implement two interfaces - ICharacter and ISpellCaster.

Define the ICharacter and ISpellCaster interfaces to match the requirements of the Wizard class. The
ICharacter interface should include name and level properties, and even introduce and levelUp
methods. The ISpellCaster interface must include a castSpell method.

```ts
// реалізація класу Wizard
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ', ' + this.name);
  }

  castSpell(): void {
    console.log('Casting a spell, behold my power!');
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// тестування класу
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16
```

# Task 4

In this task, you have to implement a life scenario where a person, a key and a house interact as
one with one

Key: Create a Key class. It must have one private signature property that is generated randomly when
creating an object of this class (eg Math.random()). Also, this class must have getSignature method
that returns the value of the signature property.

Person: Create a Person class. The constructor of this class accepts an object of the Key class and
stores it them in the private key property. The Person class should have a getKey method that
returns a stored key.

House: Create an abstract House class. This class has two properties: door, which can be open (true)
or closed (false), and key, which stores an object of the Key class. In this class too there should
be a comeIn method that adds a Person class object to the tenants array if the door is open. Your
the abstract class House must also have an abstract method OpenDoor that accepts an object of the
Key class.

My House (MyHouse): Create a MyHouse class that inherits from the House abstract class. Implement
the openDoor method in this class. If the key passed to this method matches the key saved as a key,
the door opens.

After implementing all the classes, create objects for each class and try to recreate the scenario
in which a person comes home.

For example, like this:

```ts
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
```

---

---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Завдання 1

Клас Student, який містить три властивості: name, age та grade. Замість того, щоб оголошувати ці
властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, напишіть скорочену
ініціалізацію.

```ts
class Student {
  public name: string;
  public age: number;
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
```

# Завдання 2

Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

Клас Employee повинен включати:

властивість name, яка буде доступна всім. властивість department, яка буде доступна лише всередині
класу Employee. salary, яке буде доступне лише всередині класу Employee та його підкласів.

Клас Manager повинен бути підклас класу Employee

Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та
збільшуватиме salary на 10000.

```ts
class Employee {
  // Заповніть модифікатори доступу
  name: string;
  department: string;
  salary: number;

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
}
```

# Завдання 3

Ви створюєте гру, де є персонажі з різними ролями. Зараз ви працюєте над класом Wizard, який має
реалізовувати два інтерфейси - ICharacter та ISpellCaster.

Визначте інтерфейси ICharacter та ISpellCaster так, щоб вони відповідали вимогам класу Wizard.
Інтерфейс ICharacter повинен включати властивості name і level, і навіть метод introduce і levelUp.
Інтерфейс ISpellCaster повинен включати метод castSpell.

```ts
// реалізація класу Wizard
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ', ' + this.name);
  }

  castSpell(): void {
    console.log('Casting a spell, behold my power!');
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// тестування класу
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16
```

# Завдання 4

У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один
з одним.

Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується
випадково при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати
метод getSignature, який повертає значення властивості signature.

Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає
їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений
ключ.

Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути
відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також
повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш
абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House.
Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем,
збереженим як key, то двері відчиняються.

Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в
якому людина приходить додому.

Наприклад, ось так:

```ts
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
```

---

---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Задание 1

Класс Student, содержащий три свойства: name, age и grade. Вместо того чтобы объявлять эти свойства
в теле класса, затем в конструкторе, и наконец придавать им значение, напишите сокращенную
инициализацию.

```ts
class Student {
  public name: string;
  public age: number;
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
```

# Задание 2

Ваша задача состоит в создании двух классов – Employee и Manager.

Класс Employee должен включать:

свойство name, которое будет доступно всем. свойство department, которое будет доступно только
внутри класса Employee. salary, которое будет доступно только внутри класса Employee и его
подклассов.

Класс Manager должен быть подкласс класса Employee

Необходимо реализовать в классе Manager конструктор, который будет вызывать конструктор суперкласса
и будет увеличивать salary на 10000.

```ts
class Employee {
  // Заповніть модифікатори доступу
  name: string;
  department: string;
  salary: number;

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
}
```

# Задание 3

Вы создаете игру, где есть персонажи с разными ролями. Сейчас вы работаете над классом Wizard, у
которого есть реализовывать два интерфейса – ICharacter и ISpellCaster.

Определите интерфейсы ICharacter и ISpellCaster так, чтобы они отвечали требованиям класса Wizard.
Интерфейс ICharacter должен включать свойства name и level, а также метод introduce и levelUp.
Интерфейс ISpellCaster должен включать метод castSpell.

```ts
// реалізація класу Wizard
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ', ' + this.name);
  }

  castSpell(): void {
    console.log('Casting a spell, behold my power!');
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// тестування класу
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16
```

# Задание 4

В этой задаче вам предстоит реализовать сценарий жизни, где человек, ключ и дом взаимодействуют один
с другом.

Ключ (Key): Создайте класс Key. У него должно быть одно частное свойство генерируемого signature
случайно при создании объекта этого класса (например, Math.random()). Также этот класс должен иметь
метод getSignature, возвращающий значение свойства signature.

Человек (Person): Создайте класс Person. Конструктор этого класса принимает объект класса Key и
сохраняет его в частном свойстве key. Класс Person должен иметь метод getKey, который возвращает
сохраненный ключ.

Дом (House): Создайте абстрактный класс House. Этот класс имеет два свойства: door, которое может
быть открытая (true), или закрытая (false), и key, хранящая объект класса Key. В этом классе также
должен быть метод comeIn, который добавляет объект класса Person в массив tenants, если door открыт.
Ваш Абстрактный класс House также должен иметь абстрактный метод OpenDoor, принимающий объект класса
Key.

Мой дом (MyHouse): Создайте класс MyHouse, который наследуется от абстрактного класса House.
Реализуй метод openDoor в этом классе. Если ключ, переданный этому методу, совпадает с ключом,
сохраненным как key, то дверь открывается.

После реализации всех классов создайте объекты для каждого класса и попробуйте воспроизвести
сценарий, в которому человек приходит домой.

Например, вот так:

```ts
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
```
