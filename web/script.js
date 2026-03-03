let equipos = [];

// Esta función se activa al pulsar el botón verde de "+ Agregar Equipo"
function agregarEquipo() {
    const nombreInput = document.getElementById('nombre-equipo');
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("Escribe el nombre de un equipo");
        return;
    }

    const nuevoEquipo = {
        nombre: nombre,
        pj: 0, pg: 0, pp: 0, fav: 0, cont: 0, pts: 0
    };

    equipos.push(nuevoEquipo);

    // 💾 GUARDAR EN MEMORIA: Esto permite que 'roles.html' vea los equipos
    localStorage.setItem('equiposTorneo', JSON.stringify(equipos));

    nombreInput.value = "";
    actualizarTabla();
    alert("¡Equipo " + nombre + " guardado!");
}

function actualizarTabla() {
    const cuerpo = document.getElementById('cuerpo-tabla');
    if (!cuerpo) return;

    cuerpo.innerHTML = "";
    equipos.forEach((eq, index) => {
        cuerpo.innerHTML += `
            <tr>
                <td class="col-pos">${index + 1}</td>
                <td class="col-equipo">${eq.nombre}</td>
                <td>${eq.pj}</td>
                <td>${eq.pg}</td>
                <td>${eq.pp}</td>
                <td>${eq.fav}</td>
                <td>${eq.cont}</td>
                <td>${eq.fav - eq.cont}</td>
                <td class="col-pts">${eq.pts}</td>
            </tr>
        `;
    });
}