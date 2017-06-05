//var l = 100;
$(document).ready(function(){
  drawTable(4);

  $('td div').mouseleave(function(){
    var ClaNam = $(this).attr('class');
    //alert(ClaNam);
    //$(this).removeClass('cla0').addClass('cla10');
   switch (ClaNam) {
      case 'cla0':
        $(this).removeClass('cla0').addClass('cla1');
        break;
      case 'cla1':
        $(this).removeClass('cla1').addClass('cla2');
        break;
      case 'cla2':
        $(this).removeClass('cla2').addClass('cla3');
        break;
      case 'cla3':
        $(this).removeClass('cla3').addClass('cla4');
        break;
      case 'cla4':
        $(this).removeClass('cla4').addClass('cla5');
        break;
      case 'cla5':
        $(this).removeClass('cla5').addClass('cla6');
        break;
      case 'cla6':
        $(this).removeClass('cla6').addClass('cla7');
        break;
      case 'cla7':
          $(this).removeClass('cla7').addClass('cla8');
          break;
      case 'cla8':
          $(this).removeClass('cla8').addClass('cla9');
          break;
        case 'cla9':
          $(this).removeClass('cla9').addClass('cla10');
          break;
        default:
          break;
    }


    //$(this).css('background-color', 'hsl(0,0%,0%)');
  });

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
  $('td div').addClass('cla0');
  $()
  }
