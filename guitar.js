function getproductdetails(){
    var http=new XMLHttpRequest();
    http.open("GET","data.json",true);
    http.send(null);
    http.onreadystatechange=function(){
        if(http.status==200 && http.readyState==4){
        var data=JSON.parse(http.responseText);
var div = "";
        for(var i = 0; i<data.length; i++) {

            div += "<div id='product'><ul><img class='productimg' src='"+data[i].imageurl+"'><li>name <span>" + data[i].productname + "</span></li><li> manufacturer<span>" + data[i].manuf + "</span></li><li> price</li><span>" + data[i].price + "</span></ul></div>";

        }
            document.getElementById("abhi").innerHTML=div;

        }
    }
}

getproductdetails();

function navdiv(){
document.getElementsByClassName("whitediv")[0].style.display="block";
}
function navdiv2(){
    document.getElementsByClassName("whitediv")[0].style.display="none";

}