window.onload = function() {
    // 🔍 Leer equipos de la memoria
    const datosCargados = localStorage.getItem('equiposTorneo');
    const equiposCargados = datosCargados ? JSON.parse(datosCargados) : [];

    const contenedor = document.getElementById('calendario-contenido');

    if (equiposCargados.length < 2) {
        contenedor.innerHTML = `
            <div style="color: white; padding: 20px; background: #222; border-radius: 8px; text-align: center;">
                <p>OPPS! Aún no hay suficientes equipos.</p>
                <p>Regresa a la pestaña <b>Admin</b> y agrega al menos 2 equipos.</p>
            </div>`;
        return;
    }

    let htmlPartidos = "";
    
    // Crear enfrentamientos: Todos contra todos
    for (let i = 0; i < equiposCargados.length; i++) {
        for (let j = i + 1; j < equiposCargados.length; j++) {
            htmlPartidos += `
                <div style="background: #1e1e1e; border-left: 5px solid #00ff00; margin-bottom: 15px; padding: 15px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; color: white;">
                    <div style="flex: 1; font-weight: bold;">${equiposCargados[i].nombre}</div>
                    
                    <div style="flex: 1; text-align: center;">
                        <input type="number" value="0" style="width: 45px; background: #333; color: white; border: 1px solid #555; text-align: center;">
                        <span style="color: #00ff00; font-weight: bold; margin: 0 10px;">VS</span>
                        <input type="number" value="0" style="width: 45px; background: #333; color: white; border: 1px solid #555; text-align: center;">
                    </div>

                    <div style="flex: 1; text-align: right; font-weight: bold;">${equiposCargados[j].nombre}</div>

                    <button onclick="alert('Marcador guardado')" style="margin-left: 15px; background: #00ff00; color: black; border: none; padding: 5px 10px; font-weight: bold; border-radius: 4px; cursor: pointer;">
                        OK
                    </button>
                </div>
            `;
        }
    }

    contenedor.innerHTML = htmlPartidos;
};