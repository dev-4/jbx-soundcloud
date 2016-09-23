$(document).ready(function(){
	SC.initialize({
 	 client_id: 'f77a15a6adfbb5035c8a8cf38e399f1e'
	}); // client_id
	$("#search_form").submit(function(event){
		event.preventDefault();
		// Clear the Search results
		$("#songs").html("");
		// Search for the submitted term
		scSearch( $("#search").val() );

		console.log($("#search").val() );
		// $(...).val() gets us
		// element.value
	});
}); // $(document).ready
function scSearch(term) {
	SC.get('/tracks', {
  q: term
}).then(function(tracks) {
	SC.stream( '/tracks/' + tracks[0].id ).then(function(player){    
		console.log(player); 
		console.log(tracks);   
		player.play();
		player.on("finish",function(){
      currentSong += 1; //increase currentSong by 1
      playNext();       //call itself
    });
	});
});
};

