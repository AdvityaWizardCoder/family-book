var images = ["https://as2.ftcdn.net/jpg/01/15/47/87/500_F_115478791_GG0yIcVA8Mhe6MAXEvgcfyL7JtuVfYvm.jpg", "https://i.pinimg.com/564x/ae/c5/24/aec524eefc1a1d857504771bf2fd455e.jpg" ,"https://i.pinimg.com/originals/28/d3/83/28d3837232911297b40210071de67297.png"];
var names = ["Mom", "Dad", "Me"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}
