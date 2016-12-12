function viaje() {


						

							var tipoViajeResp2 = document.getElementById("tipoViajeRes").value;
		
							var ciudadOrigenRes = document.getElementById("ciudadOrigen").value;
							var ciudadDestinoRes = document.getElementById("ciudadDestino").value;
							

							var fechaIdaRespuesta = document.getElementById("fechaIda").value;
							var fechaVueltaRespuesta = document.getElementById("fechaVuelta").value;
							

							var tipoViajeRes= document.getElementById("tipoViaje").value;
							

							if(tipoViajeRespuesta2 == "viajeIda"){
								
								if(ciudadOrigenRes == "Manizales" && ciudadDestinoRes == "Bucaramanga"){
									if(tipoViajeRes == "Economica"){
										var precioTiquete = 350400;
										alert("Precio Tiquete " + ciudadOrigenRes + " a " + ciudadDestinoRes + " : " + precioTiquete);
									}else{
										if(tipoViajeRes == "Turista"){
											var precioTiquete = 450400;
										}else{
											if(tipoViajeRes == "Ejecutiva"){
												var precioTiquete = 600400;
											}
										}
									}
							}
							
							if(ciudadOrigenRes == "Manizales" && ciudadDestinoRes == "Bogota"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 200300;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 300300;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 450300;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Manizales" && ciudadDestinoRes == "Cali"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 180000;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 280000;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 430000;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Manizales" && ciudadDestinoRes == "Medellin"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 150000;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 250000;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 400000;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Bucaramanga" && ciudadDestinoRes == "Manizales"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 415000;
									alert("Precio Tiquete " + ciudadOrigenRes + " a " + ciudadDestinoRes + " : " + precioTiquete);
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 515000;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 665000;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Bucaramanga" && ciudadDestinoRes == "Bogota"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 220000;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 320000;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 470000;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Bucaramanga" && ciudadDestinoRes == "Cali"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 180000;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 280000;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 430000;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Bucaramanga" && ciudadDestinoRespuesta == "Medellin"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 210000;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 310000;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 460000;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Medellin" && ciudadDestinoRes == "Manizales"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 180000;
									alert("Precio Tiquete " + ciudadOrigenRes + " a " + ciudadDestinoRes + " : " + precioTiquete);
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 280000;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 430000;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Medellin" && ciudadDestinoRes == "Bogota"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 150000;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 250000;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 400000;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Medellin" && ciudadDestinoRes == "Cali"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 170000;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 270000;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 420000;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Medellin" && ciudadDestinoRes == "Bucaramanga"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 215000;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 315000;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 465000;
										}
									}
								}
							}

							

							
							if(ciudadOrigenRes == "Cali" && ciudadDestinoRes == "Manizales"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 130000;
									alert("Precio Tiquete " + ciudadOrigenRes + " a " + ciudadDestinoRes + " : " + precioTiquete);
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 230000;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 380000;
										}
									}
								}
							}

							
							if(ciudadOrigenRes == "Cali" && ciudadDestinoRes == "Bogota"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 140000;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 240000;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 390000;
										}
									}
								}
							}

							
							if(ciudadOrigenRes
							== "Cali" && ciudadDestinoRes == "Medellin"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 180000;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 280000;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 430000;
										}
									}
								}
							}

							
							if(ciudadOrigenRes == "Cali" && ciudadDestinoRes == "Bucaramanga"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 170000;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 270000;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 420000;
										}
									}
								}
							

						}
						


						
						if(tipoViajeRespuesta2 == "viajeIdaVuelta"){
								
								
								if(ciudadOrigenRes == "Manizales" && ciudadDestinoRes == "Bucaramanga"){
									if(tipoViajeRes == "Economica"){
										var precioTiquete = 350400*2;
										alert("Precio Tiquete " + ciudadOrigenRes + " a " + ciudadDestinoRes + " : " + precioTiquete);
									}else{
										if(tipoViajeRes == "Turista"){
											var precioTiquete = 450400*2;
										}else{
											if(tipoViajeRes == "Ejecutiva"){
												var precioTiquete = 600400*2;
											}
										}
									}
							}
							
							if(ciudadOrigenRes == "Manizales" && ciudadDestinoRes == "Bogota"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 200300*2;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 300300*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 450300*2;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Manizales" && ciudadDestinoRes == "Cali"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 180000*2;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 280000*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 430000*2;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Manizales" && ciudadDestinoRes == "Medellin"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 150000*2;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 250000*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 400000*2;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Bucaramanga" && ciudadDestinoRes == "Manizales"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 415000*2;
									alert("Precio Tiquete " + ciudadOrigenRes + " a " + ciudadDestinoRes + " : " + precioTiquete);
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 515000*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 665000*2;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Bucaramanga" && ciudadDestinoRes == "Bogota"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 220000*2;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 320000*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 470000*2;
										}
									}
								}
							}
							
							
							if(ciudadOrigenRes == "Bucaramanga" && ciudadDestinoRes == "Cali"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 180000*2;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 280000*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 430000*2;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Bucaramanga" && ciudadDestinoRes == "Medellin"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 210000*2;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 310000*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 460000*2;
											return precioTiquete
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Medellin" && ciudadDestinoRes == "Manizales"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 180000*2;
									alert("Precio Tiquete " + ciudadOrigenRes + " a " + ciudadDestinoRes + " : " + precioTiquete);
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 280000*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 430000*2;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Medellin" && ciudadDestinoRes == "Bogota"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 150000*2;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 250000*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 400000*2;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Medellin" && ciudadDestinoRes == "Cali"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 170000*2;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 270000*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 420000*2;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Medellin" && ciudadDestinoRes == "Bucaramanga"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 215000*2;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 315000*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 465000*2;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Cali" && ciudadDestinoRes == "Manizales"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 130000*2;
									alert("Precio Tiquete " + ciudadOrigenRes + " a " + ciudadDestinoRes + " : " + precioTiquete);
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 230000*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 380000*2;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Cali" && ciudadDestinoRes == "Bogota"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 140000*2;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 240000*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 390000*2;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Cali" && ciudadDestinoRes == "Medellin"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 180000*2;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 280000*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 430000*2;
										}
									}
								}
							}
							
							if(ciudadOrigenRes == "Cali" && ciudadDestinoRes == "Bucaramanga"){
								if(tipoViajeRes == "Economica"){
									var precioTiquete = 170000*2;
								}else{
									if(tipoViajeRes == "Turista"){
										var precioTiquete = 270000*2;
									}else{
										if(tipoViajeRes == "Ejecutiva"){
											var precioTiquete = 420000*2;
										}
									}
								}
							}


						}

						