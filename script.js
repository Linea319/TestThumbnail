
var imgArray = {};

function ShowImage(){
  //document.write(imgArray.length);
  for (var i = 0; i < imgArray.length; i++) {
    $("#demo").append($("<img>").attr({"src":imgArray[i]}).attr('width', 320).attr('height', 180));
  }
}

$(function() {
  $.getJSON("data.json" , function(data) {
    var
      ulObj = $("#demo"),
      len = data.length;
      imgArray = new Array();
    for(var i = 0; i < len; i++) {
      ulObj.append($("<li>").attr({"id":data[i].id}).text(data[i].name));
      //ulObj.append($("<img>").attr({"src":data[i].img}));
      imgArray.push(data[i].img);
    }
    ShowImage();
  });

});
