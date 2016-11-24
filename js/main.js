	var casilla = "";
	var nombres = ["carmen", "liliana", "jackeline", "okaidy", "cristina"];
	var fotos=['images/carmen.png', 'images/liliana.png', 'images/jackeline.png', 'images/okaidy.png', 'images/cristina.png'];
	var randomNumber = Math.floor((fotos.length)*Math.random());
	var puntos = 5;
	var error = 0;
	puntaje = document.getElementById('puntos').innerHTML
	var select = document.getElementById( "sede" );
	var selected = select.options[ select.selectedIndex ].value
	var comprobar = document.getElementById('comprobar'); //botón

	function puntaje(){
		if (error == 5){
			puntos == puntos - 1;
			if (puntos < 1){
				alert("Has perdido!")
			}
		}
	}

	function randomFoto(){  
	    $('#foto').prop('src', fotos[randomNumber]);
	    casilla = randomNumber;
	};

	select.addEventListener("change", function selecciona(){
		if (selected = 1){
			console.log(selected)
			randomFoto()	
		}
		else{
			console.log("porquéeeeee me haces esto")
       		$('#foto').prop('src', " ");

		}
	});

	comprobar.addEventListener("click", function check(){
		console.log("checando")
		var nombre = (document.getElementById('first_name').value).toLowerCase();
		function checarNombre(){
			if (nombre == nombres[casilla]){
				console.log("chido")
				var counter = 3;
				var interval = setInterval(function() {
					document.getElementById("cuenta").innerHTML= "Excelente, Acertaste!, <br> puedes intentar de nuevo en " + (counter);
    				console.log(counter)
    				counter--;
    				if (counter == 0) {
       				 clearInterval(interval); 
       				 puntos = puntos + 5;
       				puntaje = puntos;
       				 $('#foto').prop('src', " ");
					document.getElementById("cuenta").innerHTML= " ";
       				}
       			console.log(nombre)
				}, 1000);
				}
			else {
				document.getElementById("cuenta").innerHTML= "Erroneo!";
				error = error + 1;
			}		
					}	
		checarNombre();	
	});







	

