function change()
{
    var img=document.getElementById("bulb");
    if(img.src.match("OFF"))
    {
        img.src="BULB ON.jpeg";
    }
    else
    {
        img.src="BULB OFF.jpeg";
    }
}