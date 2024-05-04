class Student {
    private static nextID: number = 10000;
    private id: number;
    private name: string;
    private courses: string[];
    private balance: number;

    constructor(name: string) {
        this.id = Student.nextID++;
        this.name = name;
        this.courses = [];
        this.balance = 0;
    }

    enroll(course: string): void {
        this.courses.push(course);
    }

    viewBalance(): void {
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }

    payTuition(amount: number): void {
        this.balance -= amount;
        console.log(`Payment of $${amount} received for ${this.name}.`);
    }

    showStatus(): void {
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.id}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: $${this.balance}`);
    }
}

class StudentManagementSystem {
    private students: Student[];

    constructor() {
        this.students = [];
    }

    addStudent(name: string): void {
        const newStudent = new Student(name);
        this.students.push(newStudent);
        console.log(`Student ${name} added with ID: ${newStudent['id']}`);
    }

    enrollStudent(studentID: number, course: string): void {
        const student = this.findStudent(studentID);
        if (student) {
            student.enroll(course);
            console.log(`Student ${studentID} enrolled in ${course}.`);
        } else {
            console.log(`Student with ID ${studentID} not found.`);
        }
    }

    viewStudentBalance(studentID: number): void {
        const student = this.findStudent(studentID);
        if (student) {
            student.viewBalance();
        } else {
            console.log(`Student with ID ${studentID} not found.`);
        }
    }

    payStudentTuition(studentID: number, amount: number): void {
        const student = this.findStudent(studentID);
        if (student) {
            student.payTuition(amount);
        } else {
            console.log(`Student with ID ${studentID} not found.`);
        }
    }

    showStudentStatus(studentID: number): void {
        const student = this.findStudent(studentID);
        if (student) {
            student.showStatus();
        } else {
            console.log(`Student with ID ${studentID} not found.`);
        }
    }

    private findStudent(studentID: number): Student | undefined {
        return this.students.find(student => student['id'] === studentID);
    }
}

// Example usage
const studentSystem = new StudentManagementSystem();
studentSystem.addStudent("John Doe");
studentSystem.addStudent("Jane Smith");

studentSystem.enrollStudent(10000, "Math");
studentSystem.enrollStudent(10000, "Science");
studentSystem.enrollStudent(10001, "History");

studentSystem.viewStudentBalance(10000);
studentSystem.payStudentTuition(10000, 200);
studentSystem.viewStudentBalance(10000);

studentSystem.showStudentStatus(10000);
studentSystem.showStudentStatus(10001);
