import { filtrarCalificacion } from "./data/students.js";
import { ordenarCalificacion } from "./utils/utils.js";
import { calcularPromedio } from "./utils/utils.js";
import { organizarEstudiantes } from "./utils/utils.js";
organi
// import { estudiantes } from './data/students.js';
// import { ordenarNombres, filtrarYOrdenarPorCalificacion, calcularPromedio, organizarPorCurso } from './utils/utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const cursos = organizarPorCurso(estudiantes);
    for (const curso in cursos) {
      const cursoSection = document.createElement('section');
      cursoSection.innerHTML = `<h2>${curso}</h2>`;
  
      cursos[curso].forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.classList.add('student-card');
        studentCard.innerHTML = `
          <p>ID: ${student.id}</p>
          <p>Name: ${student.name}</p>
          <p>Age: ${student.age}</p>
          <p>Grade: ${student.grade}</p>
          <p>Course: ${student.asignatura}</p>`;
        cursoSection.appendChild(studentCard);});
        app.appendChild(cursoSection);}
      });