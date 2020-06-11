var i = 0; //Start point
var images = []; //initialize array
var time = 5000; //time in ms for length of slide

// Image list
images[0] = 'image1.jpg'
images[1] = 'image2.jpg'
images[2] = 'image3.jpg'
images[3] = 'image4.jpg'

// Change image based on radio buttons
function currentSlide(n){
    document.slide.src = images[n];
}

// Change Image
function changeImg () {
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    }
    else {
        i = 0;
    }

    setTimeout("changeImg()", time);
};

// Font Change

function changeFont (){

    var x = document.getElementsByClassName("resize");

    for (var i = 0; i < x.length; i++){
        x[i].style.fontSize="10px";
    }
};

// Change the current post
function currentPost(n){

    post1= '<div class="blogPost"><a href="post1.html"><h3 class="resize">Post 1</h3></a><p class="resize">    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore    et dolore magna aliqua.    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo    consequat. Duis aute irure    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur    sint occaecat cupidatat non    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></div>';
    post2= '<div class="blogPost"><a href="post2.html"><h3 class="resize">Post 2</h3></a><p class="resize">    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore    et dolore magna aliqua.    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo    consequat. Duis aute irure    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur    sint occaecat cupidatat non    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></div>';
    post3= '<div class="blogPost"><a href="post3.html"><h3 class="resize">Post 3</h3></a><p class="resize">    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore    et dolore magna aliqua.    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo    consequat. Duis aute irure    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur    sint occaecat cupidatat non    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></div>';
    post4= '<div class="blogPost"><a href="post4.html"><h3 class="resize">Post 4</h3></a><p class="resize">    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore    et dolore magna aliqua.    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo    consequat. Duis aute irure    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur    sint occaecat cupidatat non    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></div>';

if (n == 0) {
    document.getElementById("containerBlogPost").innerHTML = post1;    
}
else if (n == 1){
    document.getElementById("containerBlogPost").innerHTML = post2;    

}
else if (n == 2){
    document.getElementById("containerBlogPost").innerHTML = post3;    

}
else if (n == 3){
    document.getElementById("containerBlogPost").innerHTML = post4;    

}
}


window.onload = changeImg;
