function gallery(srcVal)
{
    var allimg=document.images
    for(i=0;i<=allimg.length-1;i++)
    {
        allimg[i].src=`${i}.jpg`
    }
    console.log(srcVal)
document.getElementById("bigimage").style.backgroundImage=`URL(${srcVal})`
}