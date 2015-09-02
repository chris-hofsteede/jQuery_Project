$(document).ready(function(){
	for (j = 0;j<3;j++){
		$('.grid').after('<div class="row"></div>');
		
	};
	for (j = 0;j<3;j++){
		$('.row').append('<div class="col"> </div>');
	};
});