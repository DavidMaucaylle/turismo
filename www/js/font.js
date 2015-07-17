var x;
x=$(document);
x.ready(inicio);
function inicio(){
 var x;
	x=$("#articulo");
	x.mouseover(entraRaton);
	x.mouseout(saleRaton);
}
function entraRaton(){
$(this).css("background-color","red");
}
function saleRaton(){
$(this).css("background-color","black");
}