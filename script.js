let button = document.querySelector("button");
let inputText = document.querySelector("input");
let form = document.querySelector("form");
let imageWrapper = document.querySelector(".imageWrapper");
let loader = document.querySelector(".loader");
let loader2 = document.querySelector(".loader2");
let defaultContainer = document.querySelector(".defaultContainer");
// console.log(imageWrapper);
// console.log(button);
// loader.style.display = "block";
// loader2.style.display = "block";

// todo fetch the images

const count = 10;
const apiKey = "t3AwRtRpH3c_XqfENUlDWKoEgmyumrZNBL6f7d_9Vmg";
const apiUrl = `https://api.unsplash.com//photos/random/?client_id=${apiKey}&count=${count}`;
let photosArray = [];

//todo setAttribute function for add attribute to element
function setAttributes(element,attributes){
    for (const key in attributes) {
        element.setAttribute(key,attributes[key]);
    }
}

//todo display function
function displayPhotos(){
    photosArray.forEach((item)=>{
        console.log(item);
        const itemLink = document.createElement("a");
        setAttributes(itemLink,{
            href : item.links.html,
            target : "_blank"
        })

        const img = document.createElement("img");
        setAttributes(img,{
            src : item.urls.regular,
            alt : `${item.alt_description}`
        });

        // itemLink.append(img);
        imageWrapper.append(img);
    })
}

//todo fetchImgaes will go to model
async function getPhotos() {
  // loader.style.display = "none";
  // loader2.style.display = "none";
  let data = await fetch(`https://api.unsplash.com//photos/random/?client_id=${apiKey}&count=${count}`);
  photosArray = await data.json();
  console.log(photosArray);
  displayPhotos();
}
console.log(window.scrollY,document.body.offsetHeight,window.innerHeight);
//todo add event scroll
window.addEventListener("scroll",()=>{
    if(window.scrollY+window.innerHeight  >= document.body.offsetHeight){
        console.log(window.scrollY,document.body.offsetHeight,window.innerHeight);
        getPhotos();
    }   
})

getPhotos();


