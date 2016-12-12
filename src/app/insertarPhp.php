<?php
include("conexion.php");

$codigo= $_POST["codigo"];
$nombre= $_POST["nombre"];
$editorial= $_POST["editorial"];
$cantPag= $_POST["cantPag"];
$añoPubli= $_POST["añoPubli"];
$autor= $_POST["autor"];
$cantEjemp= $_POST["cantEjemp"];



$sentencia = "insert into libro (codigo, nombre, editorial, cantidad_paginas, anio_publicacion, autor, cantidad_ejemplares,estado) value ('$codigo', '$nombre', '$editorial', '$cantPag', '$añoPubli', '$autor', '$cantEjemp',1)";

$query = mysqli_query($conexion, $sentencia);

if($query){
	header("location: ingresarlibros.html");
	echo"Datos guardados";
	}else{
		echo "Datos no guardados";
	}

?>