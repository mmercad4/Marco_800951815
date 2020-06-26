const serverURI = 'http://localhost:3000/'

var i = 0; //Start point
var images = []; //initialize array
var time = 5000; //time in ms for length of slide

// Image list
images[0] = '/assets/images/image1.jpg'
images[1] = '/assets/images/image2.jpg'
images[2] = '/assets/images/image3.jpg'
images[3] = '/assets/images/image4.jpg'
// Chan



// Change image based on radio buttons
function currentSlide(n){
    document.slide.src = images[n];
}

// Change Image
/* function changeImg () {
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    }
    else {
        i = 0;
    }

    setTimeout("changeImg()", time);
};
 */
// Font Change

function changeFont (){

    var x = document.getElementsByClassName("resize");

    for (var i = 0; i < x.length; i++){
        x[i].style.fontSize="10px";
    }
};


function currentPost(n){
    axios.get(serverURI + 'index')
    .then((response)=>{
        if (response.error != ""){
            console.log(response.data)

            if (n == 0) {
                document.getElementById("containerBlogPost").innerHTML = '<div class="blogPost"><a href="post4.html"><h3 class="resize">'+posts[3].title+'</h3></a><p class="resize"></p>';    
            }
            else if (n == 1){
                document.getElementById("containerBlogPost").innerHTML = posts[1].title;    
            
            }
            else if (n == 2){
                document.getElementById("containerBlogPost").innerHTML = posts[2].title;    
            
            }
            else if (n == 3){
                document.getElementById("containerBlogPost").innerHTML = posts[3].title;    
            
            }
        } else {
            document.getElementById('status').innerHTML = error; 
            showStatus(0)
        }
    })
    .catch((connectionError)=>{
        console.log(connectionError)
        document.getElementById('status').innerHTML = connectionError
        showStatus(0)
    })
}