var theImages = new Array();
    theImages[theImages.length] = 'images/scratchBanner4_wide.jpg';
    theImages[theImages.length] = 'images/scratchBanner5_wide.jpg';
    theImages[theImages.length] = 'images/scratchBanner7_wide.jpg';
    theImages[theImages.length] = 'images/scratchBanner8_wide.jpg';
    theImages[theImages.length] = 'images/scratchBanner9_wide.jpg';
    theImages[theImages.length] = 'images/scratchBanner10_wide.jpg';
    theImages[theImages.length] = 'images/scratchBanner11_wide.jpg';
    theImages[theImages.length] = 'images/scratchBanner12_wide.jpg';         
var theURLs = new Array();
    theURLs[theURLs.length] = 'index.html';
    theURLs[theURLs.length] = 'index.html';
    theURLs[theURLs.length] = 'index.html';
    theURLs[theURLs.length] = 'index.html';
    theURLs[theURLs.length] = 'index.html';
    theURLs[theURLs.length] = 'index.html';
    theURLs[theURLs.length] = 'index.html';
    theURLs[theURLs.length] = 'index.html';
        
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