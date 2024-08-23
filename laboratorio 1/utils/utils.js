// 2.1 Ordena a los estudiantes por el nombre (name) en orden alfabético 
// ascendente. 

export const ordenarNombres = (array) => {
	const nombres = orden.sort((a, b) => {
		return a.name.localeCompare(b.name);
	}); return nombres;
}; console.log(ordenarNombres(estudiantes));

// __________________

// 2.2 Filtra a los estudiantes que tienen una calificación (grade)  
// mayor a 80 y luego ordénalos de mayor a menor calificación.

 export const filtrarCalificacion = (filtrarCalificacionita) => {
 	let filtracion = [];

 	filtrar.forEach((estudiante) => {
 		if (element.price > 80) filtrar.push(element)}); 
		return filtracion;};

 export const ordenarCalificacion = (array) => {
 	const califications = array.sort((a, b) => {
 		return a.calificacion - b.calificacion;});
 		return califications;};

 console.log(filtrarCalificacion(estudiantes));
 console.log(ordenarCalificacion(estudiantes));

// __________________

// 2.3 Calcula el promedio de las calificaciones (grade) 
// de todos los estudiantes.

 export const calcularPromedio = (promedio) => {
     let sumaCalificaciones = 0;
     let cantidadEstudiantes = 0;

     students.forEach((student) => {
         sumaCalificaciones += estudiantes.calificacion;
         cantidadEstudiantes++;
     });
     return cantidadEstudiantes / 2;
};
console.log(calcularPromedio(estudiantes, 'Manuela'));

// __________________

//2.4 Organizar a los estudiantes en un objeto basado en 
// su curso (course).

export const organizarEstudiantes = (organizacion) => {
	
	organizacion.forEach(element => {
		if (!acc[student.course]) {
		acc[student.course] = [];
	  }
	  acc[student.course].push(student);
	  return acc;
	}, {});
  }
  

console.log(organizarEstudiantes, matematicas);