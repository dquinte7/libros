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
	  
	  <h1 colspan="12" align="center" class="Estilo1" >Consultar todos los libros</h1>
	  
	  
	  
	  <a class="waves-effect waves-light btn" href="index.html">Volver</a>
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
  