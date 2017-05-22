$(document).ready(function()
{
  //$('#grid').addClass('test');
  //$('#grid').append("<div></div>");
  //$('#grid > div').addClass('squ');
  drawGrid(16);
});




function drawGrid(count)
{
  var i = 1;
  while(i <= count)
  {
    $('#grid').append("<div></div>");
    i=i+1;
  }
  $('#grid > div').addClass('squ');
}
