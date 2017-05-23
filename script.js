var x = 350;
var y = 250;
var duracion = 1000;

$(document).ready(inicio);

function inicio(){
	var lienzo = $("#lienzo")[0];
	var contexto = lienzo.getContext("2d");
	var buffer = document.createElement("canvas");
	buffer.width = lienzo.width;
	buffer.height = lienzo.height;
	contextoBuffer = buffer.getContext("2d");
	contextoBuffer.fillStyle = "#ffffff"; 
	contextoBuffer.clearRect(0,0,1000,800);
	contextoBuffer.font = "bold 50px sans-serif";
	contextoBuffer.fillText("Witch Hunt", 220, 240);
	contextoBuffer.fillStyle = "#ff0000"; 
	contextoBuffer.font = "bold 30px sans-serif";
	contexto.clearRect(0,0,1000,800);
	contexto.drawImage(buffer, 0, 0);
	$('#brisa')[0].play();
	$("#iniciar").click(function(){	
		contexto.clearRect(0,0,1000,800);
		contexto.drawImage(brujaP, x, 0);
		//cursor: url(imagenes/mira.png), url(cursor.cur), pointer;
		//cursor: url(imagenes/mira.png), pointer;
		//$("#bruja").
		x = 350;
		y = 250;	
		duracion = 1000;
		run();		
	});
	$("#recomendaciones").load("recomendaciones.html");
}

var x = 200;
		var y = 300;
		var x2 = 80;
		var y2 = 80;
		

function run(){ 
	var lienzo = $("#lienzo")[0];
	var contexto = lienzo.getContext("2d");
	var buffer = document.createElement("canvas");
	buffer.width = lienzo.width;
	buffer.height = lienzo.height;
	contextoBuffer = buffer.getContext("2d");
	contextoBuffer.fillStyle = "#ffffff"; 
	if(duracion >= 0){  		
		duracion--;
		dibujar(x,y,x2,y2);
		click();
		/*if(duracion % 50 == 0)
			//msg = aleatorio(9);
		var objnave = new Nave();
		var objasteroid = [new Asteroid(),new Asteroid(),new Asteroid(),
						   new Asteroid(),new Asteroid(),new Asteroid(),
						   new Asteroid(),new Asteroid(),new Asteroid(),
						   new Asteroid()]; 
		contextoBuffer.clearRect(0,0,700,500);

		contextoBuffer.font = "bold 25px sans-serif";
		contextoBuffer.fillText("tiempo = "+duracion, 25, 25);
		contextoBuffer.fillText("puntos = "+parseInt(duracion/10), 250, 25);
		//objnave.dibujar(contextoBuffer,0);
		rotacion -= 5;
		for(i=0;i<10;i++){
			
			objasteroid[i].dibujar(contextoBuffer,ast[i][0],ast[i][1]);
			/*if(objnave.colision(ast[i][0],ast[i][1])){
				vida -=1;
				objnave.dibujar(contextoBuffer,1);
				$('#explode')[0].play();
			}*/
			/*ast[i][0]-=5;
			ast[i][1]+=3;
			ast[i][0] = (700 + ast[i][0])%700;
			ast[i][1] = (500 + ast[i][1])%500;
		}
		contexto.clearRect(0,0,700,500);
		contexto.drawImage(buffer, 0, 0);
		setTimeout("run()",20);
		$("button").css("display","none");*/
	}else{
		$('#brisa')[0].pause();
		
		contextoBuffer.clearRect(0,0,700,500);

		contextoBuffer.font = "bold 50px sans-serif";
		contextoBuffer.fillText("JUEGO TERMINADO", 180, 200);
		//contextoBuffer.fillText(parseInt(duracion/10)+" pts", 250, 250);
		contexto.clearRect(0,0,700,500);
		contexto.drawImage(buffer, 0, 0);
		$("button").css("display","inline");
		
	}
}

function click(){
	canvas = $("#lienzo")[0];
	ctx = canvas.getContext("2d");
	//Añadimos un addEventListener al canvas, para reconocer el click
	canvas.addEventListener("click",   
	//Una vez se haya clickado se activará la siguiente función
	function(e){
	/** Las siguientes 2 líneas lo que hacen és saber en que 
		*parte del canvas se ha clickado. Si ha clickado dentro
		* del cuadrado se activará mover().
		* La operación que utilizamos es restar la parte izquierda que sobra
		* des del canvas asta el explorador (cancas.offsetLeft)
		* con el click (e.clientY)
		*/
		if(e.clientX-canvas.offsetLeft > 200 && e.clientX-canvas.offsetLeft < 280){  
			if(e.clientY-canvas.offsetTop > 300 && e.clientY-canvas.offsetTop < 380){  
				//si ha clickado dentro del cuadro verde
			mover();   
			} 
		}
	}
,false);}

function mover(){
	if(y>150){
		y--;
		//es la encargada de llamar cada 10 milesimas a la funcion mover()
		setTimeout(mover,10);
	}
	//limpiar();
	dibujar(x,y,x2,y2);
	alert("Hello! I am an alert box!!");
}

function dibujar(x,y,x2,y2){
	var lienzo = $("#lienzo")[0];
	var ctx = lienzo.getContext("2d");
	ctx.fillStyle = "green";
	ctx.fillRect(x, y, x2, y2);
	ctx.fill();
}
