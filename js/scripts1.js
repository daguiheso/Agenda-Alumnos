// alumnos es el modelo

function AlumnosController($scope){
	$scope.alumnos=[
		{nombre:"Juan Blanco", telefono:"1234567890", curso:"Segundo ESO"},
		{nombre:"Lorena Hernandez", telefono:"3204488428", curso:"Primero ESO"},
		{nombre:"Daniel Hernandez", telefono:"3116710257", curso:"Segundo ESO"},
		{nombre:"Jonatan Graterol", telefono:"1234567890", curso:"Tercero ESO"}
	];
	$scope.Save=function(){
		$scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre, telefono:$scope.nuevoAlumno.telefono, curso:$scope.nuevoAlumno.curso});
		$scope.formVisibility = false;
	}

	$scope.formVisibility = false;

	$scope.ShowForm = function() {
		$scope.formVisibility = true;
	}

	
}