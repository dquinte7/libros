 <!DOCTYPE html>
  <html>
    <head>
	<meta charset="UTF-8">
      <!--Import Google Icon Font-->
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>

    <body>
      <!--Import jQuery before materialize.js-->
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script type="text/javascript" src="js/materialize.min.js"></script>
			 <table class="contenedor" >
	  
<nav class="card-panel teal lighten-12" role="navigation">
  <div class="nav-wrapper" >
   <a href="http://localhost/biblioteca/src/app/app.component.html" class="brand-logo"><h5 color="black">Gestión de libros</h5></a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="ingresarlibros.html" class="collection-item">Ingresar Libros<span class="badge"></span></a></li>
      <li><a href="consultarPhp.php" class="collection-item">Consultar todos los libros<span class="badge"></span></a></li>
      <li><a href="consultarlibrosAC.php" class="collection-item">Consultar libros activos</a></li>
	  <li><a href="dardebajalibros.php" class="collection-item">Dar de baja libros<span class="badge"></span></a></li>
    </ul>
  </div>
</nav>
	  
	  </table>
	  
	  <h1 colspan="12" align="center" class="Estilo1" >Consultar todos los libros</h1>
	  
	  
	  
	  <a class="waves-effect waves-light btn" href="http://localhost/biblioteca/src/app/app.component.html">Volver</a>
	  </form>
	  <center>
	      <table class="bordered" border="3">
		    <thead>
			   <tr>
			   <th></th>
			   </tr>
			</thead>
			 <tbody>
			   <tr class="card-panel teal lighten-2" >
			     <td>Código</td>
				 <td>Nombre</td>
				 <td>Editorial</td>
				 <td>Cantidad de páginas</td>
				 <td>Año de publicación</td>
				 <td>Autor</td>
				 <td>Cantidad de ejemplares</td>
				</tr>
				<?php
				  include("conexion.php");
				  
				  $sentencia = "select * from libro ";
				  
				  $query = mysqli_query($conexion, $sentencia);
				  
				  while($libro = mysqli_fetch_assoc($query)){
				  
				  ?>
				  <tr>
				  
				    <td ><?php echo $libro["codigo"];?></td>
					<td><?php echo $libro["nombre"];?></td>
					<td><?php echo $libro["editorial"];?></td>
					<td><?php echo $libro["cantidad_paginas"];?></td>
					<td><?php echo $libro["anio_publicacion"];?></td>
					<td><?php echo $libro["autor"];?></td>
					<td><?php echo $libro["cantidad_ejemplares"];?></td>
				  
				  </tr>
				  <?php
				  
				  }
				?>
			 </tbody>
		  </table>
	  </center>
    </body>
  </html>
  