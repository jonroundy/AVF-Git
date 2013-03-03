function PictureSourceType() {};
PictureSourceType.PHOTO_LIBRARY = 0;
PictureSourceType.CAMERA = 1;
 
function getPicture(sourceType)
{
     var options = { quality: 10 };
     if (sourceType != undefined) {
          options["sourceType"] = sourceType;
     }
     // if no sourceType specified, the default is CAMERA 
     navigator.camera.getPicture(getPicture_Success, null, options);
};
 
function getPicture_Success(imageData)
{
         alert("getpic success");
        document.getElementById("test_img").src = "data:image/jpeg;base64," + imageData;
}