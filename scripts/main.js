
$(document).ready(function(){
  drawTable(4);

  $('button').click(function(){
    length=window.prompt('Enter the length of side for new grid')
//remove old table
    $('tr').detach()
    drawTable(length)
  });
});
function drawTable(size){
  var i = 1;
  var n = 1;

  while(i<=size){
    n=1;
    $('table').append("<tr></tr>");
    while(n<=size){
      $("table tr:nth-child("+i+")").append("<td><div></div></td>");
      n++;
    }
    i++;
  }
  $('td div').addClass('blue');
  $('.blue').mouseleave(function(){
    $(this).css('background-color', 'green');
  });
}
