<?php
include("conexion.php");


$estado= $_POST["1"];

$sentencia = "select * from libro ";

$query = mysqli_query($conexion, $sentencia);

if($estado == 1){
	echo "Ativo";
	}else ($estado == 0){
		echo "Inactivo";
	}
	
	
	 
?>