<?php
include ('../modelo/productoDAO.php');
$pr= new ProductoDAO($_POST['nombre'], $_POST['descripcion']);
$rta=$pr->addProductos ();
echo ("el registro fue agregado exitosamente");
?>