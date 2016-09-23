$(document).ready(function(){
	SC.initialize({
  client_id: 'f77a15a6adfbb5035c8a8cf38e399f1e'
}); // client_id
  // SC.get("/tracks",{
  //   q: term
  //   }).then(function(response) {
  //   // things to do after the tracks load...
  //   console.log( response );
  // });
$("#smit").click(function() {
		console.log("YOU CLICKED");
	});

	$("#search_form").submit(function(event){
		event.preventDefault();
		// Clear the Search results
		$("#songs").html("");
		// Search for the submitted term
		omdbSearch( $("#search").val() );

		console.log($("#search").val() );
		// $(...).val() gets us
		// element.value
	});
}); // $(document).ready
function omdbSearch(term) {
	SC.get('/tracks', {
  q: term, license: 'cc-by-sa'
}).then(function(tracks) {
  console.log(tracks);
});
};