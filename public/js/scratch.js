var theImages = new Array();
    theImages[theImages.length] = 'img/scratchBanner4_wide.jpg';
    theImages[theImages.length] = 'img/scratchBanner5_wide.jpg';
    theImages[theImages.length] = 'img/scratchBanner7_wide.jpg';
    //theImages[theImages.length] = 'img/scratchBanner8_wide.jpg';
    theImages[theImages.length] = 'img/scratchBanner9_wide.jpg';
    theImages[theImages.length] = 'img/scratchBanner10_wide.jpg';
    theImages[theImages.length] = 'img/scratchBanner11_wide.jpg';
    //theImages[theImages.length] = 'img/scratchBanner12_wide.jpg';         
var theURLs = new Array();
    theURLs[theURLs.length] = '/';
    theURLs[theURLs.length] = '/';
    theURLs[theURLs.length] = '/';
    //theURLs[theURLs.length] = '/';
    theURLs[theURLs.length] = '/';
    theURLs[theURLs.length] = '/';
    theURLs[theURLs.length] = '/';
    //theURLs[theURLs.length] = '/';
        
var imageIndex = Math.round(Math.random()*(theImages.length-1));
    function showNextImage(){
        imageIndex = (imageIndex + 1) % theImages.length;
            document.getElementById('theImage').src = theImages[imageIndex];
            }
            
    function goToImageIndex(popup) {
        if (popup) {
            window.open(theURLs[imageIndex]);
        } else {
            window.location = theURLs[imageIndex];
        }
    }
document.write('<a href="javascript:goToImageIndex(true)"><img src="' + theImages[imageIndex] + '" id="theImage" border="0"></img></a>');