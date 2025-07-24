document.addEventListener('DOMContentLoaded', () => {
    // Define los datos de tu malla curricular
    // Puedes modificar este objeto con tu carrera, materias, créditos y prerrequisitos reales.
    const datosMalla = {
        nombreCarrera: "Ingeniería en Ciencias Computacionales",
        semestres: [
            {
                nombre: "Primer Semestre",
                materias: [
                    { id: "precal101", titulo: "Precálculo", creditos: 8, prerrequisitos: [] },
                    { id: "Mecani102", titulo: "Mecánica", creditos: 8, prerrequisitos: [] },
                    { id: "Desarr103", titulo: "Desarrollo de competencias digitales", creditos: 6, prerrequisitos: [] },
                    { id: "Filoso104", titulo: "Filosofia de la ciencia", creditos: 6, prerrequisitos: [] },
                    { id: "Quimic105", titulo: "Quimica General", creditos: 9, prerrequisitos: [] },
                    { id: "Matedi106", titulo: "Matematicas discretas", creditos: 6, prerrequisitos: [] },
                    { id: "Fundam107", titulo: "Fundamentos de la cs. computacional", creditos: 8, prerrequisitos: [] },
                    { id: "Proges108", titulo: "Programacion estructurada", creditos: 8, prerrequisitos: [] },
                ]
            },
            {
                nombre: "Segundo Semestre",
                materias: [
                    { id: "Calcul201", titulo: "Calculo diferencial e integral", creditos: 8, prerrequisitos: ["precal101"] },
                    { id: "Electr202", titulo: "Electromagnetismo para ing.", creditos: 8, prerrequisitos: [""] },
                    { id: "Electr203", titulo: "Electronica digital", creditos: 6, prerrequisitos: [] },
                    { id: "Admini204", titulo: "Administracion", creditos: 9, prerrequisitos: [] },
                    { id: "Progob205", titulo: "Programacion orientada a objetos", creditos: 8, prerrequisitos: ["Proges108"] },
                    { id: "SisteI206", titulo: "Sistemas operativos I", creditos: 8, prerrequisitos: [] },
                    { id: "Organi207", titulo: "Organizacion Computacional", creditos: 6, prerrequisitos: [] }
                ]
            },
            {
                nombre: "Tercer Semestre",
                materias: [
                    { id: "Algebr301", titulo: "Algebra Lineal", creditos: 8, prerrequisitos: [] },
                    { id: "Probes302", titulo: "Probabilidad y estadistica", creditos: 6, prerrequisitos: [] }, // Ejemplo: BDD podría solo necesitar Intro a Prog
                    { id: "Propid303", titulo: "Propiedad intelectual y derechos de autor", creditos: 6, prerrequisitos: [] },
                    { id: "Progev304", titulo: "Programacion orientada a eventos", creditos: 8, prerrequisitos: ["Progob205"] },
                    { id: "SistII305", titulo: "Sistemas operativos II", creditos: 8, prerrequisitos: ["SisteI206"] },
                    { id: "BasesI306", titulo: "Bases de datos I", creditos: 6, prerrequisitos: [] },
                    { id: "Estruc307", titulo: "Estructura de datos", creditos: 6, prerrequisitos: ["Organi207  "] }
                ]
            },

            {
                nombre: "Cuarto Semestre",
                materias: [
                    { id: "Ecudif401", titulo: "Ecuaciones diferenciales", creditos: 6, prerrequisitos: ["Calcul201"] },
                    { id: "Metonu402", titulo: "Metodos numericos", creditos: 8, prerrequisitos: ["Calcul201", "Algebr301"] },
                    { id: "Algori403", titulo: "Algoritmia", creditos: 8, prerrequisitos: [] },
                    { id: "Progwb404", titulo: "Programacion web", creditos: 8, prerrequisitos: [] },
                    { id: "Ingsof405", titulo: "Ingenieria de software", creditos: 6, prerrequisitos: [] },
                    { id: "BaseII406", titulo: "Bases de datos II", creditos: 6, prerrequisitos: ["BasesI306"] },
                    { id: "RedesI407", titulo: "Redes I", creditos: 8, prerrequisitos: [] }
                ]
            },

            {
                nombre: "Quinto Semestre",
                materias: [
                    { id: "Mateav501", titulo: "Matematicas Avanzadas para ing.", creditos: 6, prerrequisitos: ["Calcul201"] },
                    { id: "Acettc502", titulo: "Acercamiento Transdiciplinario", creditos: 11, prerrequisitos: [] },
                    { id: "Proglo503", titulo: "Programacion logica y funcional", creditos: 8, prerrequisitos: [] },
                    { id: "Teoria504", titulo: "Teoria de la computacion", creditos: 8, prerrequisitos: ["Algori403"] },
                    { id: "Grafin505", titulo: "Graficos, interfaces y usabilidad", creditos: 6, prerrequisitos: [] },
                    { id: "Sistin506", titulo: "Sistemas inteligentes", creditos: 6, prerrequisitos: [] },
                    { id: "RedeII507", titulo: "Redes II", creditos: 8, prerrequisitos: ["RedesI407"] }
                ]
            },

            {
                nombre: "Sexto Semestre",
                materias: [
                    { id: "Modema601", titulo: "Modelado matematico de sistemas", creditos: 8, prerrequisitos: [] },
                    { id: "Forepi602", titulo: "Formacion y evaluacion de proyectos", creditos: 7, prerrequisitos: [] },
                    { id: "Progsw603", titulo: "Programacion de Servicios web", creditos: 8, prerrequisitos: [] },
                    { id: "Lidead604", titulo: "Liderazgo y habilidades directivas", creditos: 8, prerrequisitos: ["Admini204"] },
                    { id: "Metcon605", titulo: "Metodos y conceptos de las cs. sociales", creditos: 11, prerrequisitos: [] },
                    { id: "Espsel606", titulo: "Especializante selectiva I", creditos: 6, prerrequisitos: [] },
                    { id: "Optabi607", titulo: "Obtativa abierta", creditos: 6, prerrequisitos: [] },

                ]
            },

            {
                nombre: "Septimo Semestre",
                materias: [
                    { id: "Metpra701", titulo: "Metodologia y practica de la investigacion", creditos: 9, prerrequisitos: [] },
                    { id: "Mindat702", titulo: "Mineria de datos", creditos: 6, prerrequisitos: [] },
                    { id: "Cripto703", titulo: "Criptografia", creditos: 6, prerrequisitos: ["Teoria504"] },
                    { id: "ComSus704", titulo: "Computacion sustentable", creditos: 6, prerrequisitos: [] },
                    { id: "EselII705", titulo: "Especializante selectiva II", creditos: 6, prerrequisitos: [] },
                    { id: "EseIII706", titulo: "Especializante selectiva III", creditos: 5, prerrequisitos: [] },
                    { id: "OptaII707", titulo: "Optativa abierta II", creditos: 6, prerrequisitos: [] },
                ]
            },

            {
                nombre: "Octavo Semestre",
                materias: [
                    { id: "Protit801", titulo: "Proyecto de Titulacion", creditos: 6, prerrequisitos: ["Desarr103", "Metpra701"] },
                    { id: "Foremp802", titulo: "Formacion de emprendedores", creditos: 6, prerrequisitos: ["Admini204"] },
                    { id: "Progpa803", titulo: "Programacion paralela", creditos: 8, prerrequisitos: ["Proglo503"] },
                    { id: "Tralen804", titulo: "Traductores de lenguajes", creditos: 8, prerrequisitos: ["Teoria504"] },
                    { id: "EselIV805", titulo: "Especializante selectiva IV", creditos: 6, prerrequisitos: [] },
                    { id: "EseleV", titulo: "Especializante selectiva V", creditos: 6, prerrequisitos: [] },
                    { id: "OpaIII", titulo: "Optativa abierta III", creditos: 6, prerrequisitos: [] }
                ]
            }

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