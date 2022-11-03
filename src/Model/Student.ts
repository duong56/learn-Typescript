interface IDeveloper {
    name: string;
    position: string;
    develop: () => void;
}

type typeA = {
    name1: string;
};

type typeB = {
    name2: string;
};

class Developer implements IDeveloper {
    name: string;
    position: string;

    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
    }

    develop(): void {
        console.log("develop an app");
    }
}
/* 
class Developer implements IDeveloper {
    // error Class 'Developer' incorrectly implements interface 'IDeveloper'.
    name: string;

    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
    }

    develop(): void {
        console.log("develop an app");
    }
}
 */
type typeAB = typeA & typeB;

class Student {
    name: string;
    className: string;

    constructor(name: string, className: string) {
        this.name = name;
        this.className = className;
    }

    learning(): void {
        console.log("Create an app");
    }
}

const newStudent = new Student("Dương", "20GIT");

console.log(newStudent.name);
console.log(newStudent.className);

newStudent.learning();

export { Student, Developer };
