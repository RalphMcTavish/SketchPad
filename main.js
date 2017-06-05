//var l = 100;
$(document).ready(function(){
  drawTable(32);

  $('td div').mouseleave(function(){
	  shade($(this));
  });


  $('button').click(function(){
    length=window.prompt('Enter the length of side for new grid')
//remove old table
    $('tr').detach();
    drawTable(length);
  });
});
/* $('td div').mouseleave(function(){
	  shade($(this));
  }); */


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

function shade(that){
    var ClaNam = $(that).attr('class');
	//alert(ClaNam);
    //$(that).removeClass('cla0').addClass('cla10');
   switch (ClaNam) {
      case 'cla0':
        $(that).removeClass('cla0').addClass('cla1');
        break;
      case 'cla1':
        $(that).removeClass('cla1').addClass('cla2');
        break;
      case 'cla2':
        $(that).removeClass('cla2').addClass('cla3');
        break;
      case 'cla3':
        $(that).removeClass('cla3').addClass('cla4');
        break;
      case 'cla4':
        $(that).removeClass('cla4').addClass('cla5');
        break;
      case 'cla5':
        $(that).removeClass('cla5').addClass('cla6');
        break;
      case 'cla6':
        $(that).removeClass('cla6').addClass('cla7');
        break;
      case 'cla7':
          $(that).removeClass('cla7').addClass('cla8');
          break;
      case 'cla8':
          $(that).removeClass('cla8').addClass('cla9');
          break;
        case 'cla9':
          $(that).removeClass('cla9').addClass('cla10');
          break;
        default:
          break;
    }


    //$(that).css('background-color', 'hsl(0,0%,0%)');
  }
