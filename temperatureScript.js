
$(document).ready(function() {
    load() 
  });
  
function load() {
	var mydata = JSON.parse(data);
	alert(mydata[0].temperature);
	alert(mydata[0].humidity);
}
