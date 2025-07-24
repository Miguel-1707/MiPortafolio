document.addEventListener('DOMContentLoaded', () => {
    // Define los datos de tu malla curricular
    // Puedes modificar este objeto con tu carrera, materias, créditos y prerrequisitos reales.
    const datosMalla = {
        nombreCarrera: "Ingeniería en Ciencias Computacionales",
        semestres: [
            {
                nombre: "Primer Semestre",
                materias: [
                    { id: "prog101", titulo: "Introducción a la Programación", creditos: 4, prerrequisitos: [] },
                    { id: "calc101", titulo: "Cálculo Diferencial", creditos: 5, prerrequisitos: [] },
                    { id: "fis101", titulo: "Física Básica", creditos: 3, prerrequisitos: [] }
                ]
            },
            {
                nombre: "Segundo Semestre",
                materias: [
                    { id: "prog102", titulo: "Programación Orientada a Objetos", creditos: 4, prerrequisitos: ["prog101"] },
                    { id: "calc102", titulo: "Cálculo Integral", creditos: 5, prerrequisitos: ["calc101"] },
                    { id: "alg101", titulo: "Álgebra Lineal", creditos: 4, prerrequisitos: [] }
                ]
            },
            {
                nombre: "Tercer Semestre",
                materias: [
                    { id: "estDatos", titulo: "Estructura de Datos", creditos: 4, prerrequisitos: ["prog102"] },
                    { id: "bdd", titulo: "Bases de Datos", creditos: 4, prerrequisitos: ["prog101"] }, // Ejemplo: BDD podría solo necesitar Intro a Prog
                    { id: "redes", titulo: "Redes de Computadoras", creditos: 3, prerrequisitos: [] }
                ]
            },
            {
                nombre: "Cuarto Semestre",
                materias: [
                    { id: "webDev", titulo: "Desarrollo Web", creditos: 5, prerrequisitos: ["estDatos", "bdd"] },
                    { id: "sisOperativos", titulo: "Sistemas Operativos", creditos: 4, prerrequisitos: ["prog102"] }
                ]
            }
            // Añade más semestres y materias aquí
        ]
    };

    const mallaCurricular = document.getElementById('malla-curricular');
    let materiasCompletadas = new Set(); // Para llevar un registro de los IDs de las materias completadas

    // --- Funciones ---

    // Renderiza toda la malla curricular basándose en datosMalla
    function renderizarMalla() {
        mallaCurricular.innerHTML = ''; // Limpia el contenido existente
        datosMalla.semestres.forEach(semestre => {
            const divSemestre = document.createElement('div');
            divSemestre.classList.add('semestre');
            divSemestre.innerHTML = `<h2>${semestre.nombre}</h2>`;

            semestre.materias.forEach(materia => {
                const divMateria = document.createElement('div');
                divMateria.classList.add('materia');
                divMateria.setAttribute('data-id-materia', materia.id);

                // Comprueba si la materia está completada
                if (materiasCompletadas.has(materia.id)) {
                    divMateria.classList.add('completada');
                }

                // Comprueba si la materia está bloqueada (prerrequisitos no cumplidos)
                if (!seCumplenPrerrequisitos(materia.prerrequisitos)) {
                    divMateria.classList.add('bloqueada');
                }

                divMateria.innerHTML = `
                    <div class="titulo-materia">${materia.titulo}</div>
                    <div class="creditos-materia">${materia.creditos} créditos</div>
                `;

                // Añade el evento click si no está bloqueada
                if (!divMateria.classList.contains('bloqueada')) {
                    divMateria.addEventListener('click', () => alternarCompletadoMateria(materia.id));
                }

                divSemestre.appendChild(divMateria);
            });
            mallaCurricular.appendChild(divSemestre);
        });
        actualizarNombreCarrera();
    }

    // Actualiza el nombre de la carrera que se muestra en la página
    function actualizarNombreCarrera() {
        const elementoNombreCarrera = document.querySelector('h1');
        if (elementoNombreCarrera) {
            elementoNombreCarrera.textContent = `Malla Curricular de ${datosMalla.nombreCarrera}`;
        }
    }

    // Comprueba si se cumplen todos los prerrequisitos para una materia dada
    function seCumplenPrerrequisitos(prerrequisitos) {
        if (!prerrequisitos || prerrequisitos.length === 0) {
            return true; // No hay prerrequisitos, por lo tanto siempre se cumplen
        }
        return prerrequisitos.every(idPrereq => materiasCompletadas.has(idPrereq));
    }

    // Alterna el estado de completado de una materia
    function alternarCompletadoMateria(idMateria) {
        const elementoMateria = document.querySelector(`[data-id-materia="${idMateria}"]`);

        if (elementoMateria.classList.contains('bloqueada')) {
            alert('¡No puedes seleccionar esta materia! Primero completa sus prerrequisitos.');
            return;
        }

        if (materiasCompletadas.has(idMateria)) {
            materiasCompletadas.delete(idMateria); // Desmarcar como completada
        } else {
            materiasCompletadas.add(idMateria); // Marcar como completada
        }

        // Volver a renderizar la malla para actualizar todos los estados de las materias
        renderizarMalla();
    }

    // --- Renderizado Inicial ---
    renderizarMalla();
});