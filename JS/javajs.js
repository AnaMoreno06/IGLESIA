// Mostrar sección seleccionada
function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('section');
    secciones.forEach(seccion => seccion.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    // Limpiar detalle de iglesia cuando se cambia de sección
    const detalle = document.getElementById('detalle-iglesia');
    if (detalle) detalle.innerHTML = '';
  }
  
  // Mostrar detalles de cada mini iglesia
  function mostrarDetalle(nombre) {
    const detalles = {
      salud: {
        titulo: "Nuestra Señora de la Salud",
        direccion: "Carrera 1 #10-20, Barrio Salud",
        horario: "Misas: Domingos 8:00 a.m."
      },
      villa: {
        titulo: "Villa Sara",
        direccion: "Calle 22 #15-30, Villa Sara",
        horario: "Misas: Sábados 6:00 p.m."
      },
      guadalupe: {
        titulo: "Guadalupe",
        direccion: "Avenida 45 #23-56, Guadalupe",
        horario: "Misas: Viernes 7:00 p.m."
      },
      divina: {
        titulo: "Divina Misericordia",
        direccion: "Transversal 9 #34-78, Divina",
        horario: "Misas: Domingos 11:00 a.m."
      }
    };
  
    const detalle = detalles[nombre];
    const contenedor = document.getElementById('detalle-iglesia');
    contenedor.innerHTML = `
      <h3>${detalle.titulo}</h3>
      <p><strong>Dirección:</strong> ${detalle.direccion}</p>
      <p><strong>Horario:</strong> ${detalle.horario}</p>
    `;
    contenedor.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Mostrar la sección de inicio al cargar
  window.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('home');
  });
  