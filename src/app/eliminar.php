<?php
include("conexion.php");

$codigo= $_REQUEST["codigo"];

$sentencia = "DELETE FROM libro WHERE codigo='$codigo' ";

$query = mysqli_query($conexion, $sentencia);

if($query){
	header("location: dardebajalibros.php");
	}
?>