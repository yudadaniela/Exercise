/*Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia
 (3.5 es la nota mínima para pasar).

Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó 
la materia (3.5 es la nota mínima para pasar).

Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) 
y determinar qué materias aprobó y cuáles reprobó.

Implementar funciones para realizar la misma funcionalidad del punto 3, pero
 calculando las notas de tres estudiantes

Implementar el concepto de clases para gestionar la información de los estudiantes
 y calcular las notas de los tres estudiantes*/

class Student {
    constructor(name) {
        this.name = name;
        this.signatures = [];


    }
    enterNoteAndSignature() {
       
        for (let i = 0; i < 3; i++) {
            let signature = prompt(`Ingrese el nombre de la materia #${i+1}`);
            let notes=[];
            for (let j = 0; j < 3; j++) {
                let note = parseFloat(prompt(`Ingrese la nota #${j+1} de la materia #${i+1}`));
                if (!isNaN(note)) {
                 notes.push(note)
                } else {
                    alert("La nota ingresada no es valida")
                    j--
                }
            }
            this.signatures.push({Materia:signature, notas:notes})
        }

    }
}
class QualificationMachine {
    constructor(student) {
       this.student=student;

    }
     averange(notes) {
        let sum = notes.reduce((accumulator, nota) => accumulator + nota, 0);
        let averange = sum / notes.length;
        return averange;

    }

     approve(notes) {
        return  this.averange(notes)>= 3.5 ? "Aprobó" : "Reprobó";
    }

    resume() {
        console.log(`El estudiante: ${this.student.name}`);
          this.student.signatures.forEach((signature, index)=>{
            console.log("La materia:"+signature.Materia);
            console.log("el promedio es:"+this.averange(signature.notas));
            console.log("el resultado es:"+this.approve(signature.notas));
          });


    }

}

let students=[];
const numberStudents=parseInt(prompt("Cuantos estudiantes desea ingresar"));
for (let i = 0; i < numberStudents; i++) {
    namee=prompt(`Ingrese el nombre del estudiante #${i+1}`)
    const student= new Student(namee);
    student.enterNoteAndSignature();
    students.push(student);
}
console.log(students);
const qualification= new QualificationMachine()
console.log("Información de los estudiantes:");
 students.forEach(function(student, index) {
   console.log(`El estudiante  #${index+1}`);
   let qualification = new QualificationMachine(student)
   qualification.resume();
 });