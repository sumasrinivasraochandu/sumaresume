function newpage(){
  window.open("resume.html","_self");
}


function loadJSON(file,callback){
  var rawfile= new XMLHttpRequest();
  rawfile.overrideMimeType("application/json");
  rawfile.open("GET",file,true)
rawfile.onreadystatechange=function() {
if (rawfile.readystate==4 && rawfile.status=="200")  {
callback(rawfile.responseText);
}
  }
rawfile.send();
}

loadSON("resources/resume.json",function(){
var data==JSON.parse(text);
console.log(data);

});
