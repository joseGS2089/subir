cargarDatos();
function cargarDatos() {
    fetch('prueba.php')
    .then(response => response.json())
    .then(data => {
        const tablaDatos = document.getElementById('tablaDatos');
        tablaDatos.innerHTML = "";
        data.forEach(row => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
              <td>${row.id}</td>
              <td>${row.nombre}</td>
              <td>${row.descripcion}</td>
              <td> <button type="submit" id="agregar" class="btn btn-primary">Agregar</button> </td>
              `;
            tablaDatos.appendChild(tr);
        });   
    });
}

function consultarXid(id) {
    fetch(`controlador/traerProductoXidController.php?id=${id}`)
    .then(response => response.json())
    .then(data => {
        const tablaDatos = document.getElementById('tablaDatos');
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${data.id}</td>
            <td>${data.nombre}</td>
            <td>${data.descripcion}</td>
            <td> <button id="actualizar" class="btn btn-primary" onclick="consultarXid(${data.id})">Actualizar</button> </td>
        `;
        tablaDatos.appendChild(tr);
    });
}

function agregarDatos(formData) {
    fetch('controlador/agregarProductoController.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        cargarDatos();
        alert(data);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formProducto");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        var formData = new FormData(form);
        agregarDatos(formData);
    });
});
