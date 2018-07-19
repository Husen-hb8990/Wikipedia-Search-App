$(document).ready(function(){
	$('#searchBtn').click(function(){
        if ($('#searchTerm').val() == ""){
            alert('Please enter search keywords in Search field');
        }  
    var searchTerm = $('#searchTerm').val();
  var url = "Hello.php?"+searchTerm+"&format=json&callback=?";

    
    $.ajax({
      type: 'GET',
      url: url,
      async: true,
      dataType: 'json',
      success: function(data){
	  $('#output').html('');
        for (i=0; i<data[1].length; i++){
       $('#output').append("<li><a href="+data[3][i]+" target='_blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
      },
      error: function(errorMessage){
        alert('Error');
      }
		
           });	
  });
    
});



